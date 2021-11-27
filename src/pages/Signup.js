import React from 'react';
import { faEnvelope, faLink, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const {AllContexts} = useAuth();
    const { signUp, getName, getEmail, getPassword, getPhoto, error} = AllContexts;
    return (
        <div className="text-center my-4">
            <h2>Please Sign Up</h2>
            <p className="mt-2"> Sign Up Here!</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit = {signUp}>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl onBlur={getName}
                                type="text"
                                autoComplete="current-name"
                                id="name"
                                placeholder="Enter Your Name"
                                required
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl onBlur={getEmail}
                                type="email"
                                autoComplete="current-email"
                                id="email"
                                placeholder="Enter Your Email Address"
                                required
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl onBlur={getPassword}
                                type="password"
                                autoComplete="current-password"
                                id="password"
                                placeholder="Enter Your Password"
                                required
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="photo" visuallyHidden>
                                Your Photo URL
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl onBlur={getPhoto}
                                type="text"
                                autoComplete="current-photo"
                                id="photo"
                                placeholder="Enter Your Photo URL"
                                required
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Sign Up
                    </button>
                    <p className="mt-2">
                    <NavLink className="text-decoration-none" to="/login">
                        Already have an Account? Please LogIn!
                    </NavLink>
            </p>
                </Form>
            </div>
        </div> 
    );
};

export default Signup;