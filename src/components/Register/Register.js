import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../Hook/useFirebase';
import './Register.css'

const Register = () => {
    const { googleSignIn, handleUserRegister } = useFirebase();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        handleUserRegister(data.email, data.password);
        console.log(data);
    };
    return (
        <div className='body'>

            <div className='regform'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br /> <br />
                    <input
                        className="input-field"
                        name="password"
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    <br />

                    <input
                        className="submit-btn btn btn-danger mt-3"
                        type="submit"
                        value="Register"
                    />
                </form>
            </div>
        </div>
    );
};

export default Register;