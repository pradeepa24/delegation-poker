const express = require('express');
const router  = express.Router();
const passport = require('../config/passport');
const User = require('../models/User');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// //SIGUNP ROUTER
router.post('/signup', (req,res, next) =>{
  User.register(req.body, req.body.password)
  .then((user) => { 
      console.log('user',user)
      req.login(user, function(err,result){
        res.status(201).json({message: 'success', user: user})
      })
  })

  .catch((err) => { 
    console.log(err)
    res.status(500).json({ err })
  });
});
// function isAuth(req, res, next) {
//   console.log('hellooooooo')
//   console.log(req.isAuthenticated())
//   req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
// }
//SIGNUP ROUTER ENDS


//LOGIN ROUTER STARTS
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log('i m here')
  const { user } = req;
  res.status(200).json({message: 'success',user});
  //res.status(200).json({message: 'success', user: req.user});
});
module.exports = router;
