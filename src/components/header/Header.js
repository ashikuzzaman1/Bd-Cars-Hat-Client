import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/carlogo.PNG';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {AllContexts} = useAuth();
    const {user, logOut} = AllContexts;
    const {displayName,photoURL,email} = user;
    
    return (
        <div className="sticky-top">
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand className="text-white">
                        <Link className='fw-bold text-decoration-none home-color text-white' to="/"><img className="logo-area" src={logo} alt="Logo" /> BD Cars Hat </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link to="/home">
                            <NavLink className='text-white text-decoration-none' to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link to="/cars">
                            <NavLink className='text-white text-decoration-none' to="/cars">Cars</NavLink>
                        </Nav.Link>
                        <Nav.Link to="/about">
                            <NavLink className='text-white text-decoration-none' to="/about">About Us</NavLink>
                        </Nav.Link>
                        <Nav.Link to="/contact">
                            <NavLink className='text-white text-decoration-none' to="/contact">Contact</NavLink>
                        </Nav.Link>
                        
                        { !displayName ? 
                            (
                                <>
                                    <Nav.Link to="/signup">
                                        <NavLink className='text-white text-decoration-none' to="/signup">Sign Up</NavLink>
                                    </Nav.Link>
                                    <Nav.Link to="/login">
                                        <NavLink className='text-white text-decoration-none' to="/login">Log In</NavLink>
                                    </Nav.Link>
                                </>
                            ):(
                                <>
                                <Nav.Link as={HashLink} to="/dashboard">
                                    <NavLink as={HashLink} className='text-white text-decoration-none' to="/dashboard">Dashboard</NavLink>
                                </Nav.Link>
                                <NavDropdown title={
                                    <img style={{width:"40px", borderRadius: "50%"}} src={photoURL} alt="" />
                                }>
                                    <div className="text-center p-3">
                                        <h6>{displayName}</h6>
                                        <h6 className="mb-3">{email}</h6>
                                        <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                                    </div>
                                </NavDropdown>
                                </>
                            )
                        }
                        {
                            email === "admin@admin.com" && (
                                <Nav.Link to="/admin">
                                <NavLink className='text-white text-decoration-none' to="/admin">AdminPanel</NavLink>
                                </Nav.Link>
                            )
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;