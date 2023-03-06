import React from "react";
import PropTypes from "prop-types";
import IconCaret from "./iconCaret";
const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    const renderSortArrow = (currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <IconCaret directionSort ={"down"}/>;
            } else {
                return <IconCaret directionSort ={"up"}/>;
            }
        }
        return null;
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
                        {renderSortArrow(columns[column].path)}
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
