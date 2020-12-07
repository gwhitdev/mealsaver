import React, { useState, useEffect } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import Ingredient from '../Ingredient/Ingredient.component';



const IngredientsStore = ({ ingredients }) => {
    
    const [fridge, setFridge] = useState({});
    const [cupboard, setCupboard] = useState({});
    const [pantry, setPantry] = useState({});
    const [other, setOther] = useState({});

    const storeIngredients = (ingredientsToStore) => {
        const fridgeArr = [];
        const cupboardArr = [];
        const pantryArr = [];
        const otherArr = [];

        ingredientsToStore.map((ingredient) => {
            if (ingredient.keptAt === 'Fridge') {
                return fridgeArr.push(ingredient);
            } else if (ingredient.keptAt === 'Cupboard') {
                return cupboardArr.push(ingredient);
            } else if (ingredient.keptAt === 'Pantry') {
                return pantryArr.push(ingredient);
            } else {
               return  otherArr.push(ingredient);
            }
        })
        setFridge({ingredients: fridgeArr});
        setCupboard({ingredients: cupboardArr});
        setPantry({ingredients: pantryArr});
        setOther({ingredients: otherArr});
    };

        useEffect(() => {
            storeIngredients(ingredients);
        },[ingredients,])
        

    return (
        <>
        <Container>
        <Grid columns={4} stackable>
            <Grid.Column >
                <Header textAlign="center">In the fridge... </Header>
                    {
                        fridge.ingredients && fridge.ingredients.length > 0? fridge.ingredients.map(item => 
                        
                            <Ingredient ingredientId={item._id} key={item._id} ingredient={item} />
                            
                        ) : <div style={{textAlign: 'center'}}>None registered</div>
                    }
            </Grid.Column>

            <Grid.Column>
                <Header textAlign="center">In the cupboard... </Header>
                {
                    cupboard.ingredients && cupboard.ingredients.length  > 0  ? cupboard.ingredients.map(item => 
                        <Ingredient ingredientId={item._id} key={item._id} ingredient={item}  />
                    ) : <div style={{textAlign: 'center'}}>None registered</div>
                }
            </Grid.Column>
            <Grid.Column>
                <Header textAlign="center">In the pantry... </Header>
                {
                    pantry.ingredients && pantry.ingredients.length > 0  ? pantry.ingredients.map(item =>
                        <Ingredient ingredientId={item._id} key={item._id} ingredient={item} />
                    ) : <div style={{textAlign: 'center'}}>None registered</div>
                }
            </Grid.Column>
            <Grid.Column>
                <Header textAlign="center">Stored elsewhere... </Header>
                {
                    other.ingredients && other.ingredients.length > 0  ? other.ingredients.map(item =>
                        <Ingredient ingredientId={item._id} key={item._id}ingredient={item} />
                    ) : <div style={{textAlign: 'center'}}>None registered</div>
                }
            </Grid.Column>
        </Grid>
        </Container>

        
                </> 
    )
}


export default IngredientsStore;


