import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { GET_INGREDIENTS } from '../redux/ingredients/ingredientsActions';
import { Grid, Container, Loader, Image, Dimmer, Card } from 'semantic-ui-react';

import MealSuggestion from '../components/MealSuggestion/MealSuggesstion.component';
import WhiteImage from '../white-image.png';

const Profile = ({ ingredients, GET_INGREDIENTS }) => {
    const { user } = useAuth0();
    const [recipeInfo, setRecipeInfo] = useState({});
    const [loading, setLoading] = useState(false);

    const findRecipe = async (ingredients) => {
        const chosenIngredient = ingredients[0].name;
        setLoading(true);
        await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${chosenIngredient}&number=1&apiKey=0e11a1a68fe54e18bfe7ab69066ec1ef`)
        .then(res => res.data[0].id)
        .then(id => axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=0e11a1a68fe54e18bfe7ab69066ec1ef`))
            .then(res => {setRecipeInfo(res.data); setLoading(false)});
    };

   

    useEffect(() => {
        function getIngredients(ingredients, user){
            ingredients.length === 0 ? GET_INGREDIENTS(user.sub) : findRecipe(ingredients);
        }
        getIngredients(ingredients, user)},
    [GET_INGREDIENTS, user, ingredients, ingredients.length, user.sub]);

    return (
        
<Container>
        <Grid verticalAlign="top" style={{ marginTop: '25px'}} columns={3} stackable centered >
        
            <Grid.Column>
                PROFILE
            </Grid.Column>    
            
            <Grid.Column>
                { loading 
                    ? <Card><Card.Content><Card.Description><Dimmer active inverted ><Loader inverted inline> Getting today's recipe </Loader></Dimmer><Image src={WhiteImage} /></Card.Description></Card.Content></Card>
                    : <MealSuggestion loading={loading} meal={recipeInfo} />
                }
            </Grid.Column>
            
            
            
        </Grid>
        </Container>
        
     
        
    )
};

const mapStateToProps = ({ userIngredients: { ingredients }}) => ({
    ingredients: ingredients
});

const mapDispatchToProps = dispatch => ({
    GET_INGREDIENTS: userId => dispatch(GET_INGREDIENTS(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);