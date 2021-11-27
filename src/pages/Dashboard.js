import React, { useState } from 'react';
import Profile from './Profile';
import Cart from './Cart';
import Orders from '../components/admin/Orders';
import Payment from '../components/admin/Payment';
import Overview from '../components/admin/Overview';
import Cars from '../components/admin/Cars';
import AddCar from '../components/admin/AddCar';
import AddReview from '../components/admin/AddReview';
import CreateAdmin from '../components/admin/CreateAdmin';
import useAuth from '../hooks/useAuth';
import Home from './Home';

const Dashboard = () => {

    const {AllContexts} = useAuth();
    const {logOut} = AllContexts;

    const [active, setActive] = useState("Overview");
    
    const [current, setCurrent] = useState("Profile");

    function profileHandler(e){
        setCurrent(e.target.value);
    }
    function cartHandler(e){
        setCurrent(e.target.value);
    }
    console.log(current);
    
    return (
        <div>
            <div className="row">
                <div className="col-8">
                <div className="container-fluid">
                        <div className="row my-3">
                            <div className="col-2">
                                <ul className="list-unstyled">
                                    <li className="w-100 mb-2"><input onClick={() => setActive("Overview")} className={active === "Overview" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Overview" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Orders")}  className={active === "Orders" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="My Orders" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Cars")}  className={active === "Cars" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Manage Orders" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Add A Car")}  className={active === "Add A Car" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Add A Car" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Add Review")}  className={active === "Add Review" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Add Review" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Payment")}  className={active === "Payment" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Payment" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Make Admin")}  className={active === "Make Admin" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Make Admin" /></li>

                                    <li className="w-100 mb-2"><input onClick={logOut}  className={active === "LogOut" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="LogOut" /></li>
                                </ul>
                            </div>
                            <div className="col-10">
                                {
                                    (active === "Overview" && <Overview/>) || 
                                    (active === "Orders" && <Orders/>) ||
                                    (active === "Cars" && <Cars/>) ||
                                    (active === "Add A Car" && <AddCar/>) ||
                                    (active === "Add Review" && <AddReview/>) ||
                                    (active === "Payment" && <Payment/>) ||
                                    (active === "Make Admin" && <CreateAdmin/>) ||
                                    (active === "LogOut" && <Home/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                
                    <div className="d-flex my-3 justify-content-center">
                        <input onClick={profileHandler} type="button" value="Profile" />
                        <input onClick={cartHandler} type="button" value="MyCart" />
                    </div>


                    {
                        (current === "Profile" && <Profile></Profile>) || (current === "MyCart" && <Cart></Cart>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;