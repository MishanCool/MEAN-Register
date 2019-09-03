const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');//generate the random saltSecret, first require the bcryptjs state ment

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  saltSecret: String // automaticaly create user registration function in user.controller.js file
}, {timestamps: true});


//Event
userSchema.pre("save", function(next) {

  //Generate a salt and hash on separate function calls
  bcrypt.genSalt(10, function(err, salt) {                     //Randomly jenarate  result secret code from bcryptjs
    bcrypt.hash(this.password, salt, function(err, hash) {
        // Store hash in your password DB.
        this.password = hash; //encripted password inside this hash parameter, save inside the password property in mongo db.
        this.saltSecret = salt;
        next(); // exicute save user recode operation in user.controller.js file
    });
  });
});


mongoose.model('User', userSchema); //('model name' , schema object)