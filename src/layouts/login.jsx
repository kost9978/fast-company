/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import TextField from "../components/text.Field";
import { validate } from "../utils/validatator";
import { validationSchema } from "../utils/validationSchema";
const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        const errors = validate(data, validationSchema);
        setErrors(errors);
    }, [data]);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>

                        <TextField label = 'Email'
                            type= 'text'
                            name ='email'
                            value={data.email}
                            onChange ={handleChange}
                            error = {errors.email || ""}/>

                        <TextField label = 'Password'
                            type= 'password'
                            name ='password'
                            value={data.password}
                            onChange ={handleChange}
                            error = {errors.password || ""}/>
                        <button type="submit" disabled = {!isValid} className='btn btn-primary w-100 mx-auto'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
