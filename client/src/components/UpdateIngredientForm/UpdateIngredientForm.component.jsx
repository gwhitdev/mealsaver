import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';


import { UPDATE_INGREDIENT } from '../../redux/ingredients/ingredientsActions';


const UpdateIngredientForm = ({ UPDATE_INGREDIENT, onClose, ingredient }) => {

    const [formData, setFormData] = useState({name: ingredient.name, quantity: ingredient.quantity, quantityType: ingredient.quantityType, keptAt: ingredient.keptAt, useByDate: ingredient.useByDate});

    const submitForm = (e) => {
        e.preventDefault();
        UPDATE_INGREDIENT(ingredient._id, formData)
        onClose();
    }

    return (
        <>
            <Form onSubmit={submitForm}>
            <Form.Field>
                <label>Ingredient name:</label>
                <input type="text" id="name" placeholder={ingredient.name}  onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Quantity Type:</label>
                <input type="text" id="quantityType" placeholder={ingredient.quantityType}  onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Stored in:</label>
                <input type="text" id="keptAt" placeholder={ingredient.keptAt}  onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Quantity:</label>
                <input type="number" id="quantity" placeholder={ingredient.quantity}  onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Use by date:</label>
                <input type="date" id="useByDate"  onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})} />
            </Form.Field>
                
                
                

            <Button type="submit">Update</Button>
        </Form>
        </>
    )
};


const mapDispatchToProps = dispatch => ({
    UPDATE_INGREDIENT: (ingredientId, formData) => dispatch(UPDATE_INGREDIENT(ingredientId, formData)),
});

export default connect(null,mapDispatchToProps)(UpdateIngredientForm);
/*


            */