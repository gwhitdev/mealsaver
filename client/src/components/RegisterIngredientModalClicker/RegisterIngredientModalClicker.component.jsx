import React, { useState } from 'react';
import CreateIngredientForm from '../CreateIngredientForm/CreateIngredientForm.componet';

import { Modal, Button, Icon } from 'semantic-ui-react';
import './clicker.styles.css';

const RegisterIngredientModalClicker = ({ buttonSize }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal 
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button basic size={buttonSize} color="pink" icon labelPosition="left"><Icon name="food"/>Register ingredient?</Button>}
                >
                <Modal.Header>Register new ingredient</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <CreateIngredientForm onClose={() => setOpen(false)}/>
                    </Modal.Description>
                </Modal.Content>
                    
            </Modal>


        </>
    )
};

export default RegisterIngredientModalClicker;