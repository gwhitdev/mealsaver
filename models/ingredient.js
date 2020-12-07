const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    name: { type: String, required: [true, 'This field is missing.']},
    quantityType: { type: String, required: [true, 'This field is missing.']},
    quantity: { type: Number, required: [true, 'This field is missing.']},
    useByDate: { type: Date, required: [true, 'This field is missing.']},
    keptAt: { type: String, required: [true, 'This field is missing.']}
    
}, {timestamps: true})

const Ingredient = mongoose.model('ingredients', IngredientSchema);

module.exports = Ingredient;