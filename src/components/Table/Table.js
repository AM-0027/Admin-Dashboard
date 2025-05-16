import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(Product_Name, Tracking_ID, Date, Status, Details) {
  return { Product_Name, Tracking_ID, Date, Status, Details };
}

const rows = [
  createData("Laptop", "2516536001", "2025-05-10", "Approved", "Detail"),
  createData("Smartphone", "4367544002", "2025-05-09", "Pending", "Detail"),
  createData("Headphones", "1635656003", "2025-05-08", "Delivered", "Detail"),
  createData("Monitor", "2653472004", "2025-05-07", "Cancelled", "Detail"),
  createData("Keyboard", "2736722005", "2025-05-06", "Approved", "Detail"),
];

const makeStyles = (status) => {
  if (status === "Approved") {
    return {
      background: "rgba(145, 254, 159, 0.47)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: 	"#ffd2a6",
      color: "rgb(189, 123, 0)",
    };
  } else if (status === "Cancelled") {
    return {
      background: "rgba(255, 192, 203, 0.4)",
      color: "red",
    };
  } else {
    return {
      background: "	lightblue",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table style={{ minWidth: 650, background: "azure" }} aria-label="order tracking table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.Product_Name}</TableCell>
                <TableCell align="left">{row.Tracking_ID}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.Status)}>
                    {row.Status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {row.Details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
