import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { GET_INGREDIENTS, DELETE_INGREDIENT } from '../redux/ingredients/ingredientsActions';

import { Grid, Container } from 'semantic-ui-react';

import IngredientsStore from '../components/IngredientsStore/IngredientsStore.component';
import CreateIngredientForm from '../components/CreateIngredientForm/CreateIngredientForm.componet';
import Ingredient from '../components/Ingredient/Ingredient.component';
import UpdateIngredientForm from '../components/UpdateIngredientForm/UpdateIngredientForm.component';

const Ingredients = ({ingredients, GET_INGREDIENTS }) => {

    const { user } = useAuth0();
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);

    console.log('ingredients:', ingredients);
    
    useEffect(() => {
        async function getData() {
            await setLoading(true);
            await GET_INGREDIENTS(user.sub)
            await setLoading(false);
        }
        getData();
    },[user.sub, GET_INGREDIENTS, setOpen])

    

    return (
        <>
        Ingredients

        <Grid columns={1} centered>
            <Grid.Column>
                <Container style={{marginTop: '25px'}} >
                { ingredients && ingredients.length > 0 ? <IngredientsStore centered ingredients={ingredients} /> : 'No ingredients registered.'}
                </Container>
            </Grid.Column>
            
        </Grid>
        
        
        </>
    )
};


const mapStateToProps = ({userIngredients: {ingredients} }) => ({
    ingredients: ingredients
});

const mapDispatchToProps = dispatch => ({
    GET_INGREDIENTS: userId => dispatch(GET_INGREDIENTS(userId)),
    DELETE_INGREDIENT: ingredientId => dispatch(DELETE_INGREDIENT(ingredientId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);