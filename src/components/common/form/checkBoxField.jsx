import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ children, name, value, onChange, error }) => {
    const getInputClases = () => {
        return `form-check-input ${error ? "is-invalid" : ""}`;
    };
    const handleChange = () => {
        onChange({ name, value: !value });
    };
    return (
        <div className="form-check mb-4">
            <input className={getInputClases()}
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked = {value}
            />
            {" "}
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>

    );
};

CheckBoxField.propTypes = {

    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default CheckBoxField;
