import React, { useState, useEffect } from "react";
import Pagination from "../pagination.jsx";
import { paginate } from "../../utils/paginate";
import GroupList from "../groupList.jsx";
import API from "../../API/index.js";
import Status from "../searchStatus";
import UsersTable from "../usersTable";
import _ from "lodash";
import UserPage from "../userPage.jsx";
import { useParams } from "react-router-dom";

const Users = () => {
    const { userId } = useParams();

    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, [userId]);

    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const hendleBookmark = (id) => {
        setUsers((prevSate) =>
            prevSate.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => setCurrentPage(1), [selectedProf]);

    const handleProfessionSelect = (id) => {
        setSelectedProf(id);
    };
    const hendlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
        setCurrentPage(1);
    };
    if (users && !userId) {
        const filteredUsers = selectedProf
            ? users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                    JSON.stringify(selectedProf)
            )
            : users;

        const itemsCount = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
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
                        <UsersTable users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            handleDelete={handleDelete}
                            hendleBookmark={hendleBookmark} />

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
    } else if (userId) { return <UserPage userId={userId} />; }
    return "Loading...";
};
export default Users;
