import React from "react";
const Bookmark = (props) => {
  const { hendleBookmark, status, id } = props;
  return (
    <button onClick={() => hendleBookmark(id)}>
      <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
    </button>
  );
};
export default Bookmark;
