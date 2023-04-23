import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ options, label, name, onChange, defaultValue, error }) => {
    const getInputClases = () => {
        return `form-select ${error ? "is-invalid" : ""}`;
    };
    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ? Object.keys(options).map((key) => ({
            label: options[key].name,
            value: options[key]._id,
            color: options[key].color
        }))
        : options;
    // console.log(optionsArray);
    const defaultValueFormatArray = defaultValue
        ? defaultValue.map((key) => ({
            label: key.name,
            value: key._id,
            color: key.color
        }))
        : defaultValue;
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
                className={"basic-multi-select " + getInputClases()}
                classNamePrefix="select"
                onChange ={handleChange}
                defaultValue = {defaultValueFormatArray}

            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

MultiSelectField.propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.array,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default MultiSelectField;
