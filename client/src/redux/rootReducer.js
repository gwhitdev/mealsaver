import { combineReducers } from 'redux';
import ingredientsReducer from './ingredients/ingredientsReducer';

const rootReducer = combineReducers({
    userIngredients: ingredientsReducer,
});

export default rootReducer;