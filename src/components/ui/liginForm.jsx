
import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import { validate } from "../../utils/validatator";
import { validationSchema } from "../../utils/validationSchema";
const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        const errors = validate(data, validationSchema);
        setErrors(errors);
    }, [data]);
    // const handleChange = ({ target }) => {
    //     setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    // };
    const handleChange = (target) => {
        // console.log("target", target.value, target.name);
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    const isValid = Object.keys(errors).length === 0;
    return (

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
            <CheckBoxField
                name ='stayOn'
                value={data.stayOn}
                onChange ={handleChange}
            >
                Оставаться в системе
            </CheckBoxField>

            <button type="submit" disabled = {!isValid} className='btn btn-primary w-100 mx-auto'>Submit</button>

        </form>

    );
};

export default LoginForm;
