import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "./../../../API/index";
import { displayDate } from "../../../utils/displayDate";
const Comment = ({
    _id: id,
    userId,
    content,
    created_at: created,
    onRemove
}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => {
            setUser(data);
        });
    }, []);
    return (
        <div className="bg-light card-body  mb-3">
            <div className="row">
                {!user
                    ? ("Loading...")
                    : (
                        <div className="col">
                            <div className="d-flex flex-start ">
                                <img
                                    src={`https://avatars.dicebear.com/api/avataaars/${(
                                        Math.random() + 1
                                    )
                                        .toString(36)
                                        .substring(7)}.svg`}
                                    className="rounded-circle shadow-1-strong me-3"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />
                                <div className="flex-grow-1 flex-shrink-1">
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-1 ">
                                                {user.name}
                                                <span className="small">

                                                    {"/" + displayDate(created)}
                                                </span>
                                            </p>
                                            <button className="btn btn-sm text-primary d-flex align-items-center" onClick={() => onRemove(id)}>
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        </div>
                                        <p className="small mb-0">{content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>

    );
};
Comment.propTypes = {
    content: PropTypes.string,
    _id: PropTypes.string,
    userId: PropTypes.string,
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onRemove: PropTypes.func
};
export default Comment;
