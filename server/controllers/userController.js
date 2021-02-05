const {OAuth2Client} = require('google-auth-library');
const { User } = require('../models/index')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{

    static register(req, res, next){
        console.log(req.body);
    const {email, password} = req.body

    let newUser = {
        email,
        password
        }
        
    User.create(newUser)
      .then( user => {
        res.status(201).json({
          message: 'Register success',
          id: user.id,
          email: user.email,
        })
      })
      .catch( err => {
        console.log(err);
        next(err)
      })
    }

    static login(req,res,next){

        const { email, password } = req.body
    
        User.findOne({
          where:{
            email: email
          }
        })
        .then( user => {
    
          if(!user) throw { name: 'customError', message: 'Invalid email or password', status: 400 }
          const comparedPass = comparePass(password,user.password)
          if(!comparedPass) throw { name: 'customError', message: 'Invalid email or password', status: 400 }
          
          const access_token = generateToken({
            id: user.id,
            email: user.email,
          })
    
          res.status(200).json({ access_token })
    
        })
        .catch( err => {
          next(err)
        })
    
      }

      static googleloginhandler(req,res,next){
        let { id_token } = req.body
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
        let payload = null
            //console.log(`masukkk====>`)
    
            client.verifyIdToken({
                idToken: id_token,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            .then(ticket =>{
              console.log(ticket)
              payload = ticket.getPayload()
              return User.findOne({where: {email: payload.email}})
          })
          .then(user =>{
            console.log(user)
            if(!user){
                //console.log(`masukkk====>`)
                return User.create({
                    email: payload.email,
                    fullName: payload.name,
                    password: Math.floor(Math.random()*1000) + 'iniDariGoogle'
                })
            } else{
                return user
            }
        })
        .then(user =>{
            let googleSign = {
                id: user.id,
                email: user.email
            }
            let accessToken = generateToken(googleSign)
            return res.status(201).json({
                access_token: accessToken
            })
        })
        .catch(err =>{
            //console.log(err)
            next(err)
        })

      }

}

module.exports = UserController