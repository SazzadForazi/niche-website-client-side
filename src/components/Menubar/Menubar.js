import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../Hook/useFirebase';
import "./Menubar.css";
const Menubar = () => {
    const { user, handleLogout } = useFirebase();
    return (
        <div>
            <div className="menubar-container">
                <div className="menubar container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <div className="logo-img">
                                <img
                                    className="p-2 w-100"
                                    // src="https://www.logodesign.net/logo-new/abstract-car-incorporated-with-sun-rays-6279ld.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <div className="menu-items text-center">
                                <ul className="d-flex align-items-end justify-content-end me-5">
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/home">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/service">
                                            Cars
                                        </Link>
                                    </li>

                                    <li className="items p-2">
                                        <Link className="items p-2" to="/addServices">
                                            addServices
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/myOrder">
                                            MyOrders
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/contact">
                                            ContactUs
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/dashboard">
                                            DashBoard
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/register">
                                            Register
                                        </Link>
                                    </li>
                                    <Link to="/adminDashboard">
                                        <button className="items btn btn-info p-1 ">Admin</button>
                                    </Link>
                                    <Link to="/admin">
                                        <button
                                            onClick={handleLogout}
                                            className="items btn btn-info p-1 "
                                        >
                                            Logout
                                        </button>
                                    </Link>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;