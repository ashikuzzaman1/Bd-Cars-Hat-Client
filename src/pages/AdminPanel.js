import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Orders from '../components/admin/Orders';
import Overview from '../components/admin/Overview';
import useAuth from '../hooks/useAuth';
import Cars from '../components/admin/Cars';
import AddCar from '../components/admin/AddCar';
import CreateAdmin from '../components/admin/CreateAdmin';

const AdminPanel = () => {
    const history = useHistory();
    const {AllContexts} = useAuth();
    const {user} = AllContexts;
    const {email} = user;
    const [active, setActive] = useState("Overview");
    

    return (
        <div>
            {
                email !== "admin@admin.com" ? (
                    history.push("/home")
                ) : (
                    <div className="container-fluid">
                        <div className="row my-3">
                            <div className="col-2">
                                <ul className="list-unstyled">
                                    <li className="w-100 mb-2"><input onClick={() => setActive("Overview")} className={active === "Overview" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Overview" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Orders")}  className={active === "Orders" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Orders" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Cars")}  className={active === "Cars" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Cars" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Add A Car")}  className={active === "Add A Car" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Add A Car" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Make Admin")}  className={active === "Make Admin" ? "w-100 d-block bg-primary text-white" : "w-100 d-block"} type="button" value="Make Admin" /></li>
                                </ul>
                            </div>
                            <div className="col-10">
                                {
                                    (active === "Overview" && <Overview/>) || 
                                    (active === "Orders" && <Orders/>) ||
                                    (active === "Cars" && <Cars/>) ||
                                    (active === "Add A Car" && <AddCar/>) ||
                                    (active === "Make Admin" && <CreateAdmin/>)
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AdminPanel;