import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader.jsx";
import TableBody from "./tableBody.jsx";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table.jsx";
import { Link } from "react-router-dom";
const UsersTable = ({ users, onSort, selectedSort, hendleBookmark, handleDelete, ...rest }) => {
    const columns = {
        name: { path: "name", name: "Имя", component: (user) => <Link key={user._id} to={"users/" + user._id}>{user.name}</Link> },
        qualites: { name: "Качества", component: (user) => (<QualitiesList qualities={user.qualities} />) },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    hendleBookmark={hendleBookmark}
                    status={user.bookmark}
                    id={user._id}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };

    return (
        <Table data={users} columns={columns} {...rest} onSort={onSort} selectedSort={selectedSort}>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody data={users} columns={columns} />
        </Table>

    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    hendleBookmark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default UsersTable;
