import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';


const Details = () => {
    const history = useHistory();
    const [car, setCar] = useState({});
    const {key} = useParams();
    const {cars, addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;
    const matchingCar = cars.find((car) => car.key === Number(key));

    return (
        <div style={{backgroundColor: "rgb(106, 175, 255)"}}>
                {
                    matchingCar?.name ? (
                        <Container className="p-3">
                            <Row>
                                <Col md={6}>
                                    <img style={{borderRadius: "10px"}}className="img-fluid" src={matchingCar.img} alt="car-image"/>
                                </Col>
                                <Col className="pt-3 text-white" md={6}>
                                    <h2><b>Name : </b> {matchingCar.name}</h2>
                                    <h5><b>About : </b>{matchingCar.about}</h5>
                                    <h5><b>Seats : </b>{matchingCar.seats}</h5>
                                    <h5><b>Price : </b>{matchingCar.price}</h5>
                                    <p><b>Rating : </b>
                                        <Rating
                                            initialRating={matchingCar.rating}
                                            readonly
                                            emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar}/>}
                                            fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar}/>}
                                            />
                                        <span> ({matchingCar.rating}) </span>
                                    </p>
                                    <button onClick={()=>{
                                            if(uid){
                                                addToCart(car);
                                            }else{
                                                history.push('/login')
                                            }
                    }} className="btn btn-primary">Add To Cart</button>
                                </Col>
                            </Row>
                        </Container>
                    ) : <h1 className="text-center text-danger">No Car Found</h1>
                }
        </div>
    );
};

export default Details;