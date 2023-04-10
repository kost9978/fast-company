/* eslint-disable no-undef */
import React, { useState } from "react";
import LoginForm from "../components/ui/liginForm";
import { useParams } from "react-router-dom";
import RegesterForm from "../components/ui/registerForm";
const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");
    const togleFormType = () => {
        setFormType((prevState) => (prevState === "register" ? "login" : "register"));
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register"
                        ? <><h3 className="mb-4">Register</h3>
                            <RegesterForm/> <h1>Already have account? <a role="button" onClick={togleFormType}>Sign In</a></h1> </>
                        : <><h3 className="mb-4">Login</h3>
                            <LoginForm/><h1>Dont have account? <a role="button" onClick={togleFormType}>Sign Up</a></h1></>}
                </div>
            </div>
        </div>);
};

export default Login;
