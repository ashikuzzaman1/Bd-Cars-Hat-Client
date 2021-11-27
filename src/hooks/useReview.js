import { useEffect, useState } from 'react';

const useReview = () => {

        const [reviews, setReviews] = useState([]);
        useEffect(() => {
            fetch('https://sleepy-peak-71196.herokuapp.com/review')
                .then(res => res.json())
                .then(data => setReviews(data));
        }, []);

        return [reviews, setReviews];

};

export default useReview;