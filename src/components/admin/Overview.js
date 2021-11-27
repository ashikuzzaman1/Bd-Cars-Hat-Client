import React, { useEffect, useState } from 'react';

const Overview = () => {
    
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch("https://sleepy-peak-71196.herokuapp.com/orders")
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[]);
    
    return (
        <div>
            <p className="text-center">Overview</p>
            <h2 className="text-center">Total Order : {orders.length}</h2>
        </div>
    );
};

export default Overview;