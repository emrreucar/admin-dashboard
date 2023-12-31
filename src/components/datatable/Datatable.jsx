import React from "react";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatablesource";

// npm install @mui/x-data-grid
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={'/users/test'} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={'/users/new'} style={{textDecoration: "none"}} className="link" >
          Add new
        </Link>
      </div>
      <DataGrid
      className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[1, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
