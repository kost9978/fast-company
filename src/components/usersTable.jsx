import React from "react";
import PropTypes from "prop-types";
import User from "./user.jsx";

const UsersTable = ({ users, ...rest }) => {
    return (<table className="table">
        <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                    <User
                        user={user} {...rest}
                    />
                </tr>
            ))}
        </tbody>
    </table>);
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired
};
export default UsersTable;
