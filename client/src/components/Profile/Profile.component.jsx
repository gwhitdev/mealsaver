import React , {useEffect}from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { Container, Icon, Card } from 'semantic-ui-react';
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { email} = user;
  console.log(user);

  useEffect(() => {
       
    const createMongoUser = async () => {
      
        await axios.post(`/api/users/create-mongo-user/${user.sub}`)
      
    }
    if (isAuthenticated) {
     createMongoUser();
  }  
},[user.sub, isAuthenticated])

  return (
    
    
    <Container>
      <Card fluid centered>

        <Card.Content>
          <Card.Header><Icon name="user"/><h2>Account details</h2></Card.Header>
          <Card.Description>
            <p>Email address: {email}</p>
            <p>Subscription type: Basic</p>
            <p><Link to={`${user.sub}/delete`}>Delete account</Link></p>
            </Card.Description>
          </Card.Content>
          
          
        
        
      </Card>
      </Container>

      
    )

};

export default Profile;