import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
const UserPage = ({ user }) => {
    // console.log("user2", user);
    const history = useHistory();
    const handleReturn = () => {
        history.push("/users");
    };
    return (
        <>
            {/* <ul>
                <li><span>Имя</span>{user.name}</li>
            </ul> */}
            <h1>User</h1>
            <button type="button" onClick={handleReturn}>
                All users
            </button>
        </>
    );
};
UserPage.propTypes = {
    user: PropTypes.object
};
export default UserPage;
