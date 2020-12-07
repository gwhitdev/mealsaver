const express = require ('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const User = require('../models/user');

router.get('/:id/ingredients', (req, res) => {
console.log('get req', req.params);
    User.findOne({userId: req.params.id})//.then(foundUser => console.log(foundUser.populate('ingredients')));
      .populate('ingredients')
      .exec((err, ingredients) => {
        console.log(ingredients);
        res.json(ingredients);
        if (err) return console.log(err);
})

});




module.exports = router;