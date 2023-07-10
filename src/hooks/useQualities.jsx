import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import qualitiesServise from "../services/qualities.service";
const QualitiesContext = React.createContext();
// Qualities qualities
export const useQualities = () => {
    return useContext(QualitiesContext);
};
export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [isLoading, setLoding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getQualitiesList();
    }, []);
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    function getQualities(ar) {
        if (!isLoading) {
            const q = ar.map((id) => qualities.find((p) => (p._id === id)));
            return q;
        } else return [];
    }
    async function getQualitiesList() {
        try {
            const { content } = await qualitiesServise.get();
            setQualities(content);
            setLoding(false);
        } catch (error) {
            errorCathcer(error);
        }
    }
    function errorCathcer(error) {
        const { message } = error.responce.data;
        setError(message);
    }
    return <QualitiesContext.Provider value={ { isLoading, qualities, getQualities }}>{children }</QualitiesContext.Provider>;
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
// export default ProfessionProvider;
