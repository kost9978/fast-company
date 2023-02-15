import React from "react";
import PropTypes from "prop-types";
const Bookmark = ({ hendleBookmark, status, id }) => {
    return (
        <button onClick={() => hendleBookmark(id)}>
            <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
        </button>
    );
};
Bookmark.propTypes = {
    hendleBookmark: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};
export default Bookmark;
