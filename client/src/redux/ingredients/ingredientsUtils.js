export const updateIngredient = (ingredients, ingredientToUpdate) => {
    const existingIngredient = ingredients.find(
        ingredient => ingredient._id === ingredientToUpdate._id
        );

    if (existingIngredient) {
        return ingredients.map(ingredient => 
            ingredient._id === ingredientToUpdate._id
            ? { ...ingredient}
            : ingredient
            ) // return new version of state to render component properly
    }

    return [...ingredients, { ...ingredientToUpdate}];
}