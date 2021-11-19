import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../Hook/useFirebase';

const Details = () => {
    const [service, setService] = useState({});

    const { user } = useFirebase();
    const { serviceId } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        const newData = { ...data, serviceImg: service.image, servicePrice: service.price, serviceName: service.name, details: service?.description, email: user.email, status: 'pending' }
        console.log(newData);

        fetch("http://localhost:5000/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                reset()
                alert('order placed')
            });

    };

    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div>
            <div className="details-container">
                <div className="row container">
                    <div className="col-md-6">
                        <img className="w-50" src={service.image} alt="" />
                        <p>{service?.description}</p>
                        <h1>{service?.name}</h1>
                        <h1> {service?.price}</h1>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("email")}
                                placeholder="email"
                                defaultValue={user.email}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("number")}
                                placeholder="Number"
                                className="p-2 m-2 w-100 input-field"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Order now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;