import React, { useState } from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, type, name, value, onChange, error, ...rest }) => {
    const getInputClases = () => {
        return `form-control ${error ? "is-invalid" : ""}`;
    };

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>{" "}
            <div className="input-group">
                <input type= {type}
                    id={name}
                    name ={name}
                    value={value}
                    onChange ={handleChange}
                    className={getInputClases()}
                    {...rest}>
                </input>

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};
TextAreaField.defaultProps = {
    type: "text"
};
TextAreaField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};
export default TextAreaField;
