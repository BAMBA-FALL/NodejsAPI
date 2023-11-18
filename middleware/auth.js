const userModel = require('../model/userModel') ;
const jwt = require('jsonwebtoken') ;
const isAuthenticated = async (req, res, next) => {
    try {
      if (!req.cookies || !req.cookies.token) {
        return next('Veuillez vous connecter pour accéder aux données');
      }
  
      const verify = await jwt.verify(req.cookies.token, process.env.SECRET_KEY);
      req.user = await userModel.findById(verify.id);
      next();
    } catch (error) {
      return next(error);
    }
  };
  
  module.exports = isAuthenticated;
  

module.exports = isAuthenticated ;