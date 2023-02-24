import React, { useState } from "react";
import Users from "./components/users";
import API from "./API/index.js";
const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

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
    return (
        <Users
            users={users}
            handleDelete={handleDelete}
            hendleBookmark={hendleBookmark}
        />
    );
};
export default App;
