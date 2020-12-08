import React from 'react';

import { Container, Card, Header, Icon, Image} from 'semantic-ui-react';

const MealSuggestion = ({ meal }) => {
    const { title, image } = meal;
    return (
        <Container>
        <Card fluid color="pink" centered>
                
                <Header  style={{paddingLeft: '10px', paddingTop: '15px'}} as="h3">
                <Icon name="food" style={{paddingBottom: '20px'}}/>
                    Today's suggested meal
                <Header.Subheader>Suggested meals use some of your nearly out of date ingredients.</Header.Subheader>
      
                </Header>
                <Image src={image} wrapped ui={false}/> 
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                </Card.Content>
        </Card>
        </Container>  
    )
};

export default MealSuggestion;