import React from "react";
import Qualitie from "./qualities";
import Bookmark from "./bookmark";
const User = (props) => {
  const { user, hendleBookmark } = props;
  return (
    <>
      <td>{user.name}</td>
      <td>{user.qualities.map((item) => Qualitie(item))}</td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td>
        <Bookmark
          hendleBookmark={hendleBookmark}
          status={user.bookmark}
          id={user._id}
        />
      </td>
    </>
  );
};
export default User;
