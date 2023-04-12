import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ defaultOption, options, label, value, onChange, error }) => {
    const getInputClases = () => {
        return `form-select ${error ? "is-invalid" : ""}`;
    };
    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ? Object.keys(options).map((key) => ({
            name: options[key].name,
            _id: options[key]._id
        }))
        : options;
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    // console.log("optionsArray", optionsArray);
    return (
        <div className="mb-4">
            <label htmlFor="profession" className="form-label">{label}</label>{" "}
            <select
                value={value}
                id = "profession"
                name = 'profession'
                onChange ={handleChange}
                className={getInputClases()}>
                <option disabled value = '' >{defaultOption}</option>
                {optionsArray && optionsArray.map((item) => (<option value ={item._id} key = {item._id}>{item.name}</option>)
                )}

            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
SelectField.defaultProps = {
    type: "text"
};
SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    defaultOption: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default SelectField;
