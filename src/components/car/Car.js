import React from 'react';
import {useHistory} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Car = ({car}) => {
    const {key, name, about, rating, price, img} = car;
    const {addToCart, AllContexts} = useAuth();
    const {user} = AllContexts;
    const {uid} = user;
    const history = useHistory();
    return (
        <div>
        <Zoom left cascade>
          <div>
          <Card style={{ width: '18rem' }} className="m-3">
                <Card.Img variant="top" className="imf-fluid" src={img} />
                <Card.Body>
                    <Card.Title><b>Name :</b> {name}</Card.Title>
                    <Card.Text><b>About :</b> {about}</Card.Text>
                    <Card.Text><b>Price :</b> {price}</Card.Text>
                <Card.Text>
                    <b>Rating : </b>
                <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar}/>}
                    fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar}/>}
                    />
                    <span> ({rating}) </span>
                </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex">
                    <NavLink to={`/cars/${key}`} className="btn btn-primary w-100 mx-2">View Details</NavLink>
                    <button onClick={()=>{
                        if(uid){
                            addToCart(car);
                        }else{
                            history.push('/login')
                        }
                    }} className="btn btn-primary w-100">Add To Cart</button>
                </Card.Body>
            </Card>
          </div>
        </Zoom>
      </div>

    );
};

export default Car;