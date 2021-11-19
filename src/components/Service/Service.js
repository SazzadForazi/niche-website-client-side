import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data.slice(0, 6)));
    }, []);
    console.log(services);
    return (
        <div>
            <h1>Services section</h1>
            <div className="">
                <div className="row container services">
                    {services?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2">
                                <div className="service-img">
                                    <img className="w-50" src={pd?.image} alt="" />
                                </div>
                                <h1>{pd.name}</h1>
                                <p>{pd.description}</p>
                                <p>$ {pd.price}</p>
                                <Link to={`/services/${pd._id}`}>
                                    {" "}
                                    <button className="btn btn-success">Order Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;