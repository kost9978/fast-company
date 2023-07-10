import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import professionServise from "../services/profession.service";
const ProfessionContext = React.createContext();
export const useProfession = () => {
    return useContext(ProfessionContext);
};
export const ProfessionProvider = ({ children }) => {
    const [professions, setProfessions] = useState([]);
    const [isLoading, setLoding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProfessionsList();
    }, []);
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    function getProfession(id) {
        return professions.find((p) => (p._id === id));
    }
    async function getProfessionsList() {
        try {
            const { content } = await professionServise.get();
            setProfessions(content);
            setLoding(false);
        } catch (error) {
            errorCathcer(error);
        }
    }
    function errorCathcer(error) {
        const { message } = error.responce.data;
        setError(message);
    }
    return <ProfessionContext.Provider value={ { isLoading, professions, getProfession }}>{children }</ProfessionContext.Provider>;
};

ProfessionProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
// export default ProfessionProvider;
