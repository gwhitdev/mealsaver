import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Card, Button, Icon} from 'semantic-ui-react';

import { DELETE_INGREDIENT } from '../../redux/ingredients/ingredientsActions'

import UpdateIngredientForm from '../../components/UpdateIngredientForm/UpdateIngredientForm.component';


const Ingredient = ({ ingredient, DELETE_INGREDIENT }) => {

    
    const [open, setOpen] = useState(false);

    return (
        
            <Card centered key={ingredient._id}>
            <Card.Header>{ingredient.quantity} {ingredient.quantityType.toLowerCase()} of {ingredient.name.toLowerCase()} </Card.Header>
            <Card.Content extra style={{paddingTop: '5px'}} >
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button size="mini" animated basic color="pink"> 
                    <Button.Content visible>
                        <Icon name="arrow alternate circle up" />
                    </Button.Content>
                    <Button.Content hidden>
                        Update
                    </Button.Content>
                    </Button>}
                >
                    <Modal.Header>Update ingredient</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <UpdateIngredientForm ingredient={ingredient} onClose={() => setOpen(false)}/>
                        </Modal.Description>
                    </Modal.Content>
                                                                                                                        
                </Modal>
            
            <Button size="mini"  basic color="red" animated onClick={() => DELETE_INGREDIENT(ingredient._id)}>
                <Button.Content visible>
                    <Icon name="delete" />
                </Button.Content>
                <Button.Content hidden>
                    Delete
                </Button.Content>
            </Button> 
            </Card.Content>
            
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
    DELETE_INGREDIENT: ingredientId => dispatch(DELETE_INGREDIENT(ingredientId)),
    
});

export default connect(null, mapDispatchToProps)(Ingredient);

