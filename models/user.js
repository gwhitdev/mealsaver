const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todoApp
const UserSchema = new Schema({
    userId: {
        type: String,
        required: [true, 'UserId required']
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ingredients'
    }]
  }, {timestamps: true})
   
  //create model for todoApp
  const User = mongoose.model('users', UserSchema);
   
  module.exports = User;