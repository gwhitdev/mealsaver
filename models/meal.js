const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todoApp
const MealSchema = new Schema({
    name: {
      type: String,
      required: [true, 'This field is required']
    }
  })
   
  //create model for todoApp
  const Meal = mongoose.model('meal', MealSchema);
   
  module.exports = Meal;