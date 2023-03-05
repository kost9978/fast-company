import React from "react";
import PropTypes from "prop-types";
const IconCaret = ({ directionSort }) => {
    return (
        <i className={`bi bi-caret-${directionSort}-fill`}></i>
    );
};
IconCaret.propTypes = { directionSort: PropTypes.string.isRequired };
export default IconCaret;
