import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';


const Profile = () => {
    
    const { AllContexts } = useAuth();
    const { user } = AllContexts;
    const { displayName, photoURL, email } = user;
    
    return (
        <div>
            <h1 className="text-center">Profile</h1>
            <Container className="my-3">
                <Row className="p-3">
                    <Col md={1}>
                        {/* <div className="d-flex flex-column align-items-center">
                            <img className="rounded-circle img-fluid" src={photoURL} alt="" />
                            <button className="btn btn-primary mt-3">Edit Profile</button>
                        </div> */}
                    </Col>
                    <Col className="p-3" md={11}>
                            <h2><b>Name : </b>{displayName}</h2>
                            <h4><b>Email : </b>{email}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;