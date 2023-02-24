import React, { useState, useEffect } from "react";
import User from "./user.jsx";
import Pagination from "./pagination.jsx";
import { paginate } from "./../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList.jsx";
import API from "../API/index.js";
import { noConflict } from "lodash";
import Status from "./searchStatus";
const Users = (props) => {
    const users = props.users;
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => setCurrentPage(1), [selectedProf]);
    const handleProfessionSelect = (prof) => {
        // console.log(prof);
        setSelectedProf(prof);
    };
    const hendlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users;

    const itemsCount = filteredUsers.length;

    const usersCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };
    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        items={professions}
                        valueProperty="_id"
                        contentProperty="name"
                        onProfessionSelect={handleProfessionSelect}
                        selectedProf={selectedProf}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <Status number={itemsCount} />
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

                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={itemsCount}
                        pageSize={pageSize}
                        onPageChange={hendlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    hendleBookmark: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default Users;
