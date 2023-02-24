import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ qualitie }) => {
    return (
        <span className={"badge m-1 bg-" + qualitie.color} key={qualitie._id}>
            {qualitie.name}
        </span>
    );
};
Qualitie.propTypes = { qualitie: PropTypes.object.isRequired };
export default Qualitie;
