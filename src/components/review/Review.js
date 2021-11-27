import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, comment, img } = props.review || {};
    return (
        <div className="col-md-6 card-area">
            <div className="card h-100 gap-3">
                <div className="row g-0 p-3">
                    <div className="col-md-5 card-img-area">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title"><b>Name: </b>{name}</h5>
                            <p className="card-text"><b>Comment: </b>{comment}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;