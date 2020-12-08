import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { GET_INGREDIENTS, DELETE_INGREDIENT } from '../redux/ingredients/ingredientsActions';

import { Grid, Container } from 'semantic-ui-react';

import IngredientsStore from '../components/IngredientsStore/IngredientsStore.component';
import RegisterIngredientModalClicker from '../components/RegisterIngredientModalClicker/RegisterIngredientModalClicker.component';

const Ingredients = ({ingredients, GET_INGREDIENTS }) => {

    const { user } = useAuth0();

    useEffect(() => {

            if(ingredients.length === 0) {
                GET_INGREDIENTS(user.sub)
            }

    },[user.sub, ingredients, GET_INGREDIENTS])

    return (
        <>

        <Grid columns={2} centered>
            <Grid.Column>
                <Container style={{marginTop: '25px'}} textAlign="center" >
                { ingredients && ingredients.length > 0 ? <IngredientsStore centered ingredients={ingredients} /> : <><p>You haven't any ingredients registered at the moment...</p> <div><RegisterIngredientModalClicker buttonSize="massive"/></div> </>}
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