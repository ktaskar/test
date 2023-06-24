import React from 'react';
import {Container ,Card, Col, Button} from 'react-bootstrap';  

export const Home = () => {
    return (
        <div className="App">  
        <Container className='p-4'>  
       <Col md="4">  
       <Card>  
      
       <Card.Body>  
         <Card.Title>Card Title</Card.Title>  
         <Card.Text>  
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
         </Card.Text>  
        
       </Card.Body>  
     </Card>  
         </Col>  
     </Container>  
         </div>  
    );
}