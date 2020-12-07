import { IngredientsActionTypes } from './ingredientsTypes';

const INITIAL_STATE = {
    ingredients: []
};

const ingredientsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case IngredientsActionTypes.GET_INGREDIENTS:
            return {
                ...state.ingredients, ingredients: action.payload
            }
        case IngredientsActionTypes.CREATE_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.payload.data]}
            
        case IngredientsActionTypes.DELETE_INGREDIENT:
            return {
                ingredients: state.ingredients.filter(
                    ingredient => ingredient._id !== action.payload.data._id)       
            }
        case IngredientsActionTypes.UPDATE_INGREDIENT:
            const index = state.ingredients.findIndex(ingredient => ingredient._id === action.payload.data._id);
            const newArray = [...state.ingredients];
            newArray[index] = action.payload.data;
            return { 
                ...state, ingredients: newArray
             }
           
        default: 
            return state;
    }
};

export default ingredientsReducer;

/*
return {
                ...state,
                ingredients: [...state.ingredients, action.payload.data]
            }
            */