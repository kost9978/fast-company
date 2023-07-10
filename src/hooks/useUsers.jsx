import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import userServise from "../services/user.service";
import { toast } from "react-toastify";
const UserContext = React.createContext();
export const useUser = () => {
    return useContext(UserContext);
};
const UserProvider = ({ children }) => {
    const [users, setUers] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getUser();
    }, []);
    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);
    async function getUser() {
        try {
            const { content } = await userServise.get();
            setUers(content);
            setLoding(false);
        } catch (error) {
            errorCathcer(error);
        }
    }
    function errorCathcer(error) {
        const { message } = error.responce.data;
        setError(message);
    }
    return <UserContext.Provider value={{ users }}>{!loading ? children : "Loading..."}</UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default UserProvider;
