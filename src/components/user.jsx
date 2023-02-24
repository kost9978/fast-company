import React from "react";
import Qualitie from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";
const User = ({ user, hendleBookmark, handleDelete }) => {
    return (
        <>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => (
                    <Qualitie key={item._id} qualitie={item} />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
                <Bookmark
                    hendleBookmark={hendleBookmark}
                    status={user.bookmark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
    hendleBookmark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default User;
