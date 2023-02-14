import React from "react";
import User from "./user.jsx";

const Users = (props) => {
  const users = props.users;
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
            {users.map((user) => (
              <tr key={user._id}>
                <User hendleBookmark={props.hendleBookmark} user={user} handleDelete ={ props.handleDelete} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
