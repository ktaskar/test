import React from 'react';
import Form from 'react-bootstrap/Form';

export const Contact = () => {
    return (
        <div>
        <h3>Contact</h3>
        <div className='row'>
           <div className='col-lg-6'>
           <Form>
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
           </div>
        </div>
       
        </div>
    );
}

