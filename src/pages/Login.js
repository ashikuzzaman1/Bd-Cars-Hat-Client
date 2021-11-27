import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import google from './../assets/images/google.jpg';
import github from './../assets/images/hithub.png';
import facebook from './../assets/images/facebook.jpg';

const Login = () => {
    const {AllContexts} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';



    const { getEmail, getPassword, signInWithEmail, error, signInWithGoogle, signInWithGithub, signInWithFacebook, setUser, setError } = AllContexts;
    return (
        <div className="text-center my-4">
            <h2>Please LogIn</h2>
            <p className="mt-2"> Login With Email and Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit = {()=>{
                    signInWithEmail()
                    .then(res=>{
                        setUser(res.user);
                        history.push(redirect);
                    }).catch(err => {
                        setError(err.message)
                    })
                }}>
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
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        LogIn
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Please Create An Account!
                </NavLink>
                <NavLink className="text-decoration-none mx-3" to="/reset">
                    Forgotten Password?
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p>Login with</p>
            <div>
                <button onClick={()=>{
                    signInWithGoogle()
                    .then(res=>{
                        setUser(res.user);
                        history.push(redirect);
                    }).catch(err => {
                        setError(err.message)
                    })
                }} className="btn">
                    <img src={google} width="45px" alt="google-icon" />
                </button>
                <button onClick={()=>{
                    signInWithGithub()
                    .then(res=>{
                        setUser(res.user);
                        history.push(redirect);
                    }).catch(err => {
                        setError(err.message)
                    })
                }} className="btn">
                    <img src={github} width="45px" alt="github-icon" />
                </button>
                <button onClick={()=>{
                    signInWithFacebook()
                    .then(res=>{
                        setUser(res.user);
                        history.push(redirect);
                    }).catch(err => {
                        setError(err.message)
                    })
                }} className="btn">
                    <img src={facebook} width="45px" alt="facebook-icon" />
                </button>

            </div>
        </div>
    );
};

export default Login;
