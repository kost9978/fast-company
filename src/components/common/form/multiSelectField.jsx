import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ options, label, name, onChange, defaultValue }) => {
    // console.log("options", options);
    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ? Object.keys(options).map((key) => ({
            label: options[key].name,
            value: options[key]._id
        }))
        : options;
    // console.log(optionsArray);
    const handleChange = (value) => {
        onChange({ name, value });
    };
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>{" "}
            <Select
                closeMenuOnSelect={false}
                isMulti
                name={name}
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange ={handleChange}
                defaultValue = {defaultValue}
            />
        </div>
    );
};

MultiSelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.array,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default MultiSelectField;
