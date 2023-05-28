import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import API from "./../../../API/index";
import QualitiesCard from "../../ui/qualitiesCard";
import UserCard from "../../ui/userCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";
const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    const history = useHistory();
    const handleReturn = () => {
        history.push("/users");
        // history.goBack();
    };

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user = {user}/>
                        <QualitiesCard qualities={user.qualities} />
                        <MeetingsCard value ={user.completedMeetings}/>

                        <div>
                            <button type="button" className="btn btn-primary" onClick={handleReturn}>
                    Все пользователи
                            </button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Comments/>
                    </div>
                </div>
            </div>
        );
    } else {
        return "Loading...";
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
