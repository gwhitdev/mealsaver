import React, { useState } from 'react';
import { Menu, Modal, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import CreateIngredientForm from '../CreateIngredientForm/CreateIngredientForm.componet';
import LoginButton from '../AuthButton/AuthButton.component';
import Logo from '../Logo/Logo.component';

const Nav = () => {
    const { isAuthenticated, logout, user } = useAuth0();

    const [activeItem, setActiveItem] = useState({activeItem: ''});
    const [formData, setformData] = useState({name: '', quantityType: '', keptAt: '', quantity: 1, useByDate: new Date()});
    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

    // MODALS
    const [ open, setOpen ] = useState(false);
  
    return (
        <Menu stackable>
        <Menu.Item as={Link} to="/"> <Logo logoClass="menu-logo" /> </Menu.Item>
       
         <Menu.Menu position="right">
         { isAuthenticated ? <React.Fragment>
        <Dropdown item text={user.name} key="user">
        <Dropdown.Menu>
           <Dropdown.Item  text="Your details" active={activeItem === 'details'} onClick={handleItemClick} as={Link} to="/profile" />
           <Dropdown.Item onClick={() => logout({returnTo: process.env.REACT_APP_AUTH0_LOGOUT_REDIRECT})} >
               <span >Logout</span>
           </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
         <Dropdown item text="Your food" >
            <Dropdown.Menu>
               <Dropdown.Item text="View all my suggested meals" as={Link} to='/meals/' />
               <Dropdown.Item text="View all my ingredients" as={Link} to='/ingredients' />
               <Dropdown.Item >  <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<span>Register new ingredient</span>}
                >
                <Modal.Header>Register new ingredient</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <CreateIngredientForm onClose={() => setOpen(false)}/>
                    </Modal.Description>
                </Modal.Content>
                    
            </Modal></Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
         </React.Fragment> 
         : '' }
         
         <Dropdown item text="About MealSaver">
            <Dropdown.Menu>
               <Dropdown.Item text="Who are we?" as={Link} to='/who/' />
               <Dropdown.Item text="Your privacy" as={Link} to='/privacy' />
               <Dropdown.Item text="Terms & Conditions" as={Link} to='/tsandcs'/>
            </Dropdown.Menu>
         </Dropdown>
         </Menu.Menu>

         
        </Menu>
    )
};

export default Nav;