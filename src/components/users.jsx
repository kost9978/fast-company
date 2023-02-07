import React, { useState } from "react";
import api from "../API/index.js";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // console.log("users", users);
  const men = () => {
    const text = users.length < 2 || users.length > 4 ? "человек" : "человека";
    return text;
  };
  const heading = () => {
    const text =
      users.length > 0
        ? `${String(users.length)} ${men()} тусанет с тобой сегодня`
        : "Никто с тобой не тусанет";

    return text;
  };
  const styleHeading = () => {
    const style =
      users.length > 0 ? "text-bg-primary p-2 fs-4" : "text-bg-danger p-2 fs-4";
    return style;
  };
  const handleDelet = (id) => {
    setUsers((prevState) => prevState.filter((tag) => tag["_id"] !== id));
  };
  return (
    <>
      <div>
        {" "}
        <span className={styleHeading()}>{heading()}</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Професия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item["_id"]}>
              <td>{item["name"]}</td>
              <td>
                {item["qualities"].map((elem) => (
                  <span
                    key={elem["_id"]}
                    className={"badge text-bg-" + elem["color"] + " m-2"}
                  >
                    {elem["name"]}
                  </span>
                ))}
              </td>
              <td>{item["profession"].name}</td>
              <td>{item["completedMeetings"]}</td>
              <td>{item["rate"]} </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger m-2"
                  onClick={() => handleDelet(item["_id"])}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Users;
