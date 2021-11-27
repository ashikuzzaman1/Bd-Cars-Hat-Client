import React  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';


const Cart = () => {
    const {selectedCar, remove, setSelectedCar, AllContexts} = useAuth();
    const {user} = AllContexts;
    const {uid} = user;
    const history = useHistory();
    const totalPrice = selectedCar.reduce((total, car)=>total+car.price,0);

    return (
        <div>
            <Container>
            {   selectedCar.length ? 
                <Row>
                    <Col md={8}>
                        {
                            selectedCar.map((car)=>{
                                const {img,name,about,price,rating,_id} = car;
                                return (
                                    <Row className="my-2 bg-info pt-2 text-white" key={_id}>
                                    <Col sm={4}>
                                        <img className="img-fluid" src={img} alt="" />
                                    </Col>
                                    <Col sm={8}>
                                        <h5><b>Name : </b>{name}</h5>
                                        <p className="m-0"><b>about : </b>{about}</p>
                                        <h6><b>price : </b>${price}</h6>
                                        <h6><b>Rating : </b>
                                        <Row>
                                            <Col sm={4}>
                                                <Rating
                                                    initialRating={rating}
                                                    readonly
                                                    emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar}/>}
                                                    fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar}/>}
                                                />
                                                <span> ({rating}) </span>
                                            </Col>
                                            <Col sm={8}>
                                                <NavLink to={`/cars/${_id}`} className="btn btn-primary mx-2">View Details</NavLink>
                                                
                                                <button onClick={()=>remove(_id)} className="btn btn-primary">Remove</button>
                                            </Col>
                                        </Row>
                                        </h6>
                                    </Col>
                                </Row>
                                )
                            }
                             )}
                    </Col>
                    <Col className="text-center" md={4}>
                            <h4>Total Course : {selectedCar.length}</h4>
                            <h6>Total Price : ${totalPrice.toFixed(2)}</h6>
                            <button onClick={()=>{
                                
                                fetch(`https://sleepy-peak-71196.herokuapp.com/purchase/${uid}`, {
                                    method: 'delete'
                                })
                                .then(res => res.json())
                                .then(data => {
                                    if(data.deletedCount > 0){
                                        alert("Thank You For Place Your Order!");
                                        setSelectedCar([]);
                                        history.push("/home");
                                    }
                                })
                            }} className="btn btn-primary">Place Order</button>
                    </Col>
                </Row> : <div className="text-center text-danger"><h1>No Car Selected!</h1></div>
            }
            </Container>
        </div>
    );
};

export default Cart;