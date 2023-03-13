import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitiesList";
const UserPage = ({ user }) => {
    const history = useHistory();
    const handleReturn = () => {
        history.push("/users");
    };
    return (
        <>

            <h1>{user.name}</h1>
            <h2>{`profession: ${user.profession.name}`}</h2>
            <QualitiesList qualities={user.qualities} />
            <h3>{`completedMeetings: ${user.completedMeetings}`}</h3>
            <h1>{`rate: ${user.rate}`}</h1>
            <button type="button" onClick={handleReturn}>
                Все пользователи
            </button>
        </>
    );
};
UserPage.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserPage;
