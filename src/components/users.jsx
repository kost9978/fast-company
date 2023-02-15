import React, { useState } from "react";
import User from "./user.jsx";
import Pagination from "./pagination.jsx";
import { paginate } from "./../utils/paginate";
import PropTypes from "prop-types";
const Users = (props) => {
    const users = props.users;
    const itemsCount = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const hendlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const usersCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            {users.length > 0 && (
                <table className="table">
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
                        {usersCrop.map((user) => (
                            <tr key={user._id}>
                                <User
                                    hendleBookmark={props.hendleBookmark}
                                    user={user}
                                    handleDelete={props.handleDelete}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={itemsCount}
                pageSize={pageSize}
                onPageChange={hendlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    itemsCount: PropTypes.number,
    hendleBookmark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default Users;
