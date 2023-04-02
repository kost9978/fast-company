import React, { useState, useEffect } from "react";
import Pagination from "./pagination.jsx";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList.jsx";
import API from "../API/index.js";
import Status from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const UsersList = () => {
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
    const [selectedSearch, setSelectedSearch] = useState("");
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
    if (users) {
        let filteredUsers = selectedProf
            ? users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
            )
            : users;
        filteredUsers = selectedSearch
            ? filteredUsers.filter((user) => user.name.toLowerCase().includes(selectedSearch.toLowerCase()))
            : filteredUsers;
        // const filteredUsers = selectedSearch
        //     ? users.filter((user) =>
        //         user.name.toLowerCase().includes(selectedSearch.toLowerCase())
        //     )
        //     : selectedProf
        //         ? users.filter(
        //             (user) =>
        //                 JSON.stringify(user.profession) ===
        // JSON.stringify(selectedProf)
        //         )
        //         : users;
        const itemsCount = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };
        const handleSearch = ({ target }) => {
            setSelectedSearch(target.value.trim());
        };
        const clarSearch = () => {
            const input = document.querySelector("#search");
            input.value = "";
            setSelectedSearch();
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
                    <div className="input-group mb-3">
                        <input type="text" id = 'search'className="form-control form-input" placeholder="Search" onChange={handleSearch}></input>
                        <button
                            className="btn btn-secondary "
                            onClick={clarSearch}> <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    {users.length > 0 && (
                        <UsersTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            handleDelete={handleDelete}
                            hendleBookmark={hendleBookmark}
                        />
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
    }
    return "Loading...";
};
export default UsersList;
