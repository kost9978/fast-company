import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        // console.log("selectedSort.path -", selectedSort.path);
        // console.log("item -", item);
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th key = {column}
                        onClick={() => columns[column].path ? handleSort(columns[column].path) : undefined}
                        scope="col"
                        {...{ role: columns[column].path && "button" } }>
                        {columns[column].name}
                    </th>
                ))}

            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.object.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default TableHeader;
