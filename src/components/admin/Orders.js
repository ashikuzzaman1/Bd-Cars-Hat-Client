import React, { useEffect, useState } from 'react';

const Orders = () => {
    
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch("https://sleepy-peak-71196.herokuapp.com/orders")
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[]);

    function cancel(id){
        fetch(`https://sleepy-peak-71196.herokuapp.com/delete/${id}`,{
            method: "delete",
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1 ){
                alert('Order Delete Successfully!')
                const remainingOrders = orders.filter(order => order._id !== id)
                setOrders(remainingOrders);
            }else{
                alert('Something went wrong')
            }
        })
    }

    return (
        <div>
            <p>All Orders</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Cancel</th>
                    <th scope="col">Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order)=>{
                            const {img,_id,name,price,email,status} = order;
                            return (
                                    <tr key={_id}>
                                        <td><img width="50px" src={img} alt="" /></td>
                                        <td><h5>{name}</h5></td>
                                        <td><h5>${price}</h5></td>
                                        <td><h5>{email}</h5></td>
                                        <td><h5>{status}</h5></td>
                                        <td><button onClick={() => cancel(_id)} className="btn btn-danger">Cancel</button></td>
                                        <td><button className="btn btn-success">Confirm</button></td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;