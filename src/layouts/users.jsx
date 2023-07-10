import React from "react";
import { useParams } from "react-router-dom";
import UsersListPage from "./../components/page/usersListPage/usersListPage";
import UserPage from "./../components/page/userPage/userPage";
import UserPageEdit from "./../components/page/userPageEdit/userPageEdit";
import UserProvider from "../hooks/useUsers";
// const Users = () => {
//     const { userId } = useParams();
//     return userId ? <UserPage userId={userId} /> : <UsersListPage />;
// };
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <UserProvider>
                {userId
                    ? (
                        edit
                            ? (
                                <UserPageEdit/>
                            )
                            : (
                                <UserPage userId={userId} />
                            )
                    )
                    : (
                        <UsersListPage />
                    )}
            </UserProvider>

        </>
    );
};
export default Users;
