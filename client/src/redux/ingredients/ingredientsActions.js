import axios from 'axios';
import { IngredientsActionTypes } from './ingredientsTypes';

export const GET_INGREDIENTS = userId => dispatch => {
    console.log(userId);
    axios.get(`/api/ingredients/${userId}/ingredients`)
        .then(res => {
            console.log('response:', res);
            dispatch({
                type: IngredientsActionTypes.GET_INGREDIENTS,
                payload: res.data.ingredients
            });
        })
        .catch( err => console.error(err));
};

export const CREATE_INGREDIENT = (userId, ingredient) => dispatch => {
    axios.post(`/api/ingredient/${userId}`, ingredient)
        .then(ingredients => {
            dispatch({
                type: IngredientsActionTypes.CREATE_INGREDIENT,
                payload: ingredients
            })
        }).catch(err => console.log(err))
};

export const DELETE_INGREDIENT = ingredientId => dispatch => {
    axios.delete(`/api/ingredient/${ingredientId}`)
    .then(ingredient => {
        dispatch({
            type: IngredientsActionTypes.DELETE_INGREDIENT,
            payload: ingredient
        })
    });
};

export const UPDATE_INGREDIENT = (ingredientId, formData) => dispatch => {
    console.log('formdata:',formData);
    axios.put(`/api/ingredient/${ingredientId}`, formData)
        .then(ingredient => {
            dispatch({
                type: IngredientsActionTypes.UPDATE_INGREDIENT,
                payload: ingredient
            })
        });
};