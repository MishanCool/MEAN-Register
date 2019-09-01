const mongoose = require('mongoose');

const User = mongoose.model('User');

//function name register
// this function use to handel request from client side
module.exports.register = (req, res, next) =>{
    //console.log('inside register fn...!');

    //make an object of following "User" model
    var user = new User();                                   //
                                                             //
    user.username = req.body.username;   //                  // save new user recodes based on the values pass through the "req" parameter
    user.email = req.body.email;         //   retrive values //
    user.password = req.body.email;      //                  //

    //save user recodes
    user.save((err, doc) => {        // err - posible errors pass through this parameter
                                     // doc - newly save recode details pass through this parameter
 
        if(!err){
            // response object . send function can be call inside the value of doc parameter 
            res.send(doc);
        }
    });

}