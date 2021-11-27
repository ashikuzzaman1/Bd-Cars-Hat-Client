import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateAdmin = () => {
    return (
        <div className="text-center w-25 mx-auto my-5">
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <p className="text-danger"></p>
                    <Form.Control  type="email" placeholder="Enter Your Email" />
                    <Form.Text className="text-muted">
                        Please Enter An Email Address For Making Admin!
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreateAdmin;
