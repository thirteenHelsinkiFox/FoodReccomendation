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

}

module.exports = UserController