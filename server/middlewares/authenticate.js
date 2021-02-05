const { verify } = require('../helpers/jwt')

const authenticate = (req, res, next) => {
  console.log(req.headers.access_token);
    try{
      const token = req.headers.access_token
      const decoded = verify(token)

      req.user = decoded

      next()
    } catch(err){
      
      next(err)
    }
} 

module.exports = authenticate
