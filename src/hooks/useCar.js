import { useEffect, useState } from 'react';

const useCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        fetch('https://sleepy-peak-71196.herokuapp.com/car')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])

    return {cars, setCars};

};

export default useCar;