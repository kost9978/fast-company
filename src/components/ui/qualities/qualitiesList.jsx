import React from "react";
import Qualitie from "./qualities";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";
const QualitiesList = ({ qualities }) => {
    const { isLoading, getQualities } = useQualities();
    const q = isLoading ? [] : getQualities(qualities);
    return (
        <>
            {!isLoading
                ? q.map((item) => (
                    <Qualitie key={item._id} qualitie={item} />
                ))
                : <p>isLoading</p>}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
export default QualitiesList;
