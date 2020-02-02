// var express = require('express');
// var router = express.Router();
// var Admin = require('../../model/admin');
// var jwt = require('jsonwebtoken');
//
// router.post('/signup', function(req, res){
//   var admin = new Admin();
//   admin.name = req.body.name;
//   admin.email = req.body.email;
//   admin.password = req.body.password;
//   admin.save(function(err, rtn){
//     if (err){
//       req.status(500).json({
//         message:"Internal server error",
//         error:err
//       })
//     }else {
//       res.status(201).json({
//         message:"New account created",
//         admin:rtn
//       })
//     }
//   })
// })
