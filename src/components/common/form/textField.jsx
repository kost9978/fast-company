import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error, ...rest }) => {
    const [showPassowrd, setShowPassowrd] = useState(false);
    const getInputClases = () => {
        return `form-control ${error ? "is-invalid" : ""}`;
    };
    const togleShowPassowrd = () => {
        setShowPassowrd((prevState) => !prevState);
    };
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>{" "}
            <div className="input-group">
                <input type= {showPassowrd ? "text" : type}
                    id={name}
                    name ={name}
                    value={value}
                    onChange ={handleChange}
                    className={getInputClases()}
                    {...rest}>
                </input>
                {type === "password" && <button className="btn btn-outline-secondary"
                    type="button"
                    onClick={togleShowPassowrd}>
                    <i className={"bi bi-eye" + (!showPassowrd ? "-slash" : "")}></i>
                </button>}

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};
export default TextField;
