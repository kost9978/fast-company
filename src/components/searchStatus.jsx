import React from "react";
import PropTypes from "prop-types";
const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанет";
    return "человек тусанет";
};

const Status = ({ number }) => {
    return (
        <h2>
            <span
                className={"badge " + (number > 0 ? "bg-primary" : "bg-danger")}
            >
                {number > 0
                    ? `${number + " " + renderPhrase(number)} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

Status.propTypes = {
    number: PropTypes.number.isRequired
};
export default Status;
