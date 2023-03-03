import React from "react";
import Qualitie from "./qualities";
import PropTypes from "prop-types";
const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((item) => (
                <Qualitie key={item._id} qualitie={item} />
            ))}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
export default QualitiesList;
