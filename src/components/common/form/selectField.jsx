import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ defaultOption, name, options, label, value, onChange, error, selectedValue }) => {
    const getInputClases = () => {
        return `form-select ${error ? "is-invalid" : ""}`;
    };
    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ? Object.keys(options).map((key) => ({
            name: options[key].name,
            _id: options[key]._id
        }))
        : options;
    const filteredArray = Object.keys(selectedValue).length && optionsArray
        ? optionsArray.filter((item) => (item._id !== selectedValue._id))
        : optionsArray;
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label htmlFor= {name} className="form-label">{label}</label>{" "}
            <select
                value={value}
                id = {name}
                name = {name}
                onChange ={handleChange}
                className={getInputClases()}>
                {!Object.keys(selectedValue).length
                    ? <option disabled value = '' >{defaultOption}</option>
                    : <option value={selectedValue._id} >{selectedValue.name}</option>}

                {filteredArray && filteredArray.map((item) => (<option value ={item._id} key = {item._id}>{item.name}</option>)
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
    defaultOption: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selectedValue: PropTypes.object,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default SelectField;
