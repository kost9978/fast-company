import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader.jsx";
import TableBody from "./tableBody.jsx";

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualites: { name: "Качества" },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: { path: "bookmark", name: "Избранное" },
        delete: {}
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }}/>
            <TableBody {...{ users, ...rest }}/>
        </table>);
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};
export default UsersTable;
