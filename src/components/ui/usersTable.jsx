import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table, { TableBody, TableHeader } from "../common/table";
import Qualities from "./qualities/index";
import Bookmark from "./../common/bookmark";
import Profession from "./profession";
const UsersTable = ({
    users,
    onSort,
    selectedSort,
    hendleBookmark,
    handleDelete,
    ...rest
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link key={user._id} to={"users/" + user._id}>
                    {user.name}
                </Link>
            )
        },
        qualites: {
            name: "Качества",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        // profession: { path: "profession.name", name: "Профессия" },
        profession: {
            name: "Профессия",
            component: (user) => <Profession id ={user.profession}/>
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
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
        <Table
            data={users}
            columns={columns}
            {...rest}
            onSort={onSort}
            selectedSort={selectedSort}
        >
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
