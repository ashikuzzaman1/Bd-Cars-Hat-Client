import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sleepy-peak-71196.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    
    return (
        <div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(review => <Review key={review.key} review={review}></Review>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Reviews;