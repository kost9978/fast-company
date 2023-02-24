import React from "react";
import PropTypes from "prop-types";
import { professions } from "./../API/fake.api/professions.api";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onProfessionSelect,
    selectedProf
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        "list-group-item" +
                        (items[item] === selectedProf ? " active" : "")
                    }
                    onClick={() => onProfessionSelect(items[item])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onProfessionSelect: PropTypes.func.isRequired,
    selectedProf: PropTypes.object
};
export default GroupList;
