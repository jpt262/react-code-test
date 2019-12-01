import React from 'react';
import TablePagination from "@material-ui/core/TablePagination";

const Pagination = ({
  ...props
}) => (
  <div className="pagination">
    <TablePagination {...props}/>
  </div>
)

export default Pagination
