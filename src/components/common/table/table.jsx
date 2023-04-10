import React from "react";
import TableHeader from "./tableHeader.jsx";
import TableBody from "./tableBody.jsx";
import PropTypes from "prop-types";

const Table = ({ onSort, selectedSort, columns, data, children, ...rest }) => {
    return (
        <>
            <table className="table">
                {children || (
                    <>
                        <TableHeader {...{ onSort, selectedSort, columns }} />
                        <TableBody data={data} columns={columns} {...rest} />
                    </>
                )}
            </table>
        </>
    );
};
Table.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    children: PropTypes.array
};
export default Table;
