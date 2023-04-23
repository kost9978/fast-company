import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Qualities from "./../../ui/qualities/index";
import API from "./../../../API/index";
const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    const history = useHistory();
    const handleReturn = () => {
        history.push("/users");
    };
    const handleEdit = () => {
        history.push(`/users/${userId}/edit`);
    };
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>{`profession: ${user.profession.name}`}</h2>
                <Qualities qualities={user.qualities} />
                <h3>{`completedMeetings: ${user.completedMeetings}`}</h3>
                <h1>{`rate: ${user.rate}`}</h1>
                <div className="mb-4">
                    <button type="button" onClick={handleEdit}>
                    Редактировать
                    </button>
                </div>
                <div>
                    <button type="button" onClick={handleReturn}>
                    Все пользователи
                    </button>
                </div>
            </>
        );
    } else {
        return "Loading...";
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
