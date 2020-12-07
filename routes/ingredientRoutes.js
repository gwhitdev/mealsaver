const express = require ('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const User = require('../models/user');

router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  
  Ingredient.findById({_id: req.params.id})
  .then(data => {
    console.log(JSON.stringify(data));
    res.json(data)})
  .catch(next)
});

router.post('/:id', (req, res, next) => {
    const userId = req.params.id;
    console.log(req.params.id, req.body);
  
      if (userId && req.body) {
  
        const newIngredient = new Ingredient({
          name: req.body.name,
          quantity: req.body.quantity,
          quantityType: req.body.quantityType,
          keptAt: req.body.keptAt,
          useByDate: req.body.useByDate,
        });
  
        newIngredient.save()
        .then(
          (ingredient) => {
            User.findOneAndUpdate({userId: userId},
              {$push: {ingredients: ingredient}}
              ).then(res.json(ingredient))
              .catch(err => console.error(err))
          }
        ).catch(err => console.error(err));
      };
  });

router.delete('/:id', (req, res, next) => {
    Ingredient.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

router.put('/:id', (req, res, next) => {
  console.log(req.params);
  Ingredient.findOneAndUpdate({_id: req.params.id}, 
    req.body,
    {new: true, useFindAndModify: false},
  ).then(data => res.json(data))
  .catch(next)
}) ;
module.exports = router;