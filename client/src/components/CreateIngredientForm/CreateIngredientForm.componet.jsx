import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button, Input} from 'semantic-ui-react';

import { CREATE_INGREDIENT, GET_INGREDIENTS } from '../../redux/ingredients/ingredientsActions';


const CreateIngredientForm = ({ CREATE_INGREDIENT, GET_INGREDIENTS, onClose }) => {
    const { user } = useAuth0();
    const [formData, setFormData] = useState({name: '', quantity: 1, keptAt: '', quantityType: '', useByDate: new Date().toLocaleDateString()});

    const submitForm = (e) => {
        e.preventDefault();
        CREATE_INGREDIENT(user.sub, formData)
        //alert('sent');
        setFormData({name: '', quantity: 1, quantityType: '', keptAt: '', useByDate: new Date().toLocaleDateString()});
        onClose();
    }



    return (
        <>
        <Form  onSubmit={submitForm}>
            <Form.Field>
                <label>Ingredient name:</label>
                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Quantity type:</label>
                <input type="text" id="quantityType" value={formData.quantityType} onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Storied in:</label>
                <input type="text" id="keptAt" value={formData.keptAt} onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Quantity:</label>
                <Input type="number" id="quantity" value={formData.quantity} onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <label>Use by date:</label>
                <input type="date" id="useByDate" value={formData.useByDate} onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})} />
            </Form.Field>
            
    
        
            <Button  type="submit">Register</Button>
        
        </Form>
        </>
    )
};

const mapDispatchToProps = dispatch => ({
    CREATE_INGREDIENT: (userId, ingredient) => dispatch(CREATE_INGREDIENT(userId, ingredient)),
    GET_INGREDIENTS: userId => dispatch(GET_INGREDIENTS(userId))
});

export default connect(null, mapDispatchToProps)(CreateIngredientForm);