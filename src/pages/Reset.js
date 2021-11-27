import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Reset = () => {
    const {AllContexts} = useAuth();
    const {getEmail, passwordReset, error} = AllContexts;
    return (
        <div className="text-center w-25 mx-auto my-5">
            <Form onSubmit={passwordReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email Address</Form.Label>
                    <p className="text-danger">{error}</p>
                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter Your Email" />
                    <Form.Text className="text-muted">
                    Enter Your Email For Reset Your Password.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Reset
                </Button>
            </Form>
        </div>
    );
};

export default Reset;