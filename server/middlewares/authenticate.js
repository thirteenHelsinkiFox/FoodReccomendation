const { verify } = require('../helpers/jwt')

const authenticate = (req, res, next) => {
    try{
      const token = req.headers.access_token
      const decoded = verify(token, process.env.SECRET_JWT )

      req.user = decoded

      next()
    } catch(err){
      
      next(err)
    }
} 

module.exports = authenticate
