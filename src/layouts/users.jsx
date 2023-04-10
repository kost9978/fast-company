import React from "react";
import { useParams } from "react-router-dom";
import UsersListPage from "./../components/page/usersListPage/usersListPage";
import UserPage from "./../components/page/userPage/userPage";
const Users = () => {
    const { userId } = useParams();
    return userId ? <UserPage userId={userId} /> : <UsersListPage />;
};

export default Users;
