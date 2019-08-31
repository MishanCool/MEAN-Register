const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  salt: String // automaticaly create user registration function in user.controller.js file
}, {timestamps: true});

mongoose.model('User', userSchema); //('model name' , schema object)