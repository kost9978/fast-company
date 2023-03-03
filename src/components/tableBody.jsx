import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const TableBody = ({ users, ...rest }) => {
    return (<tbody>
        {users.map((user) => (
            <tr key={user._id}>
                <User
                    user={user} {...rest}
                />
            </tr>
        ))}
    </tbody>);
};
TableBody.propTypes = {
    users: PropTypes.array.isRequired

};

export default TableBody;
