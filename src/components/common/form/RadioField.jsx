import React from "react";
import PropTypes from "prop-types";
const RadioField = ({ options, label, value, onChange, name }) => {
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>{" "}
            {options.map((item) => (
                <div className="form-check form-check-inline" key = {item.name + "_" + item.value}>
                    <input className ="form-check-input"
                        type="radio"
                        name={name}
                        id={item.name + "_" + item.value}
                        checked = {item.value === value}
                        value={item.value}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor={item.name + "_" + item.value}>{item.name}</label>
                </div>
            ))}

        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string.isRequired,
    defaultOption: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.PropTypes.array.isRequired
};
export default RadioField;
