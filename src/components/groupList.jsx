import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onProfessionSelect,
    selectedProf
}) => {
    const arrayItems = Array.isArray(items) ? items : Object.values(items);
    return (
        <ul className="list-group">
            {arrayItems.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={
                        "list-group-item" +
                        (item[valueProperty] === selectedProf ? " active" : "")
                    }
                    onClick={() => onProfessionSelect(item[valueProperty])}
                    role="button"
                >
                    {item[contentProperty]}
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
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onProfessionSelect: PropTypes.func.isRequired,
    selectedProf: PropTypes.string
};
export default GroupList;
