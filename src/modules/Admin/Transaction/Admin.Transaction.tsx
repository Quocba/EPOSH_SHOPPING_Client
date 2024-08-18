import React from 'react';
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ConfirmTransaction from "../Modal/Modal.Transaction/Modal.Transaction.Confirm";
import RejectTransaction from "../Modal/Modal.Transaction/Modal.Transaction.Reject";

interface AdminTableProps {
  data: any[];
}

const TableTransaction: React.FC<AdminTableProps> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(data.length / usersPerPage);
  const formatTotal = (total: any) => parseFloat(total).toFixed(2);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const confirmTransaction = (rowIndex: number) => {
    setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
  };

  const rejectTransaction = (rowIndex: number) => {
    setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
  };

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <Box>
      {/* Table title */}
      <Box sx={{ marginBottom: "20px", marginTop: "20px", marginLeft: "20px" }}>
        <Typography variant="h3" noWrap component="div" sx={{ flexGrow: 1 }}>
          <b>TRANSACTION MANAGEMENT</b>
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          width: "100%",
          marginBottom: "30px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
      </Box>

      {/* Show data */}
      <Box
        sx={{ marginLeft: "20px", marginRight: "20px", marginBottom: "20px" }}
      >
        <TableContainer component={Paper} className="admin-table-container">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "black" }}>
                  <b>ID</b>
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <b>USER</b>
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <b>SHOP</b>
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <b>PRODUCT</b>
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <b>TOTAL</b>
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <b>TIME</b>
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <b>ACTION</b>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers && currentUsers.length > 0 ? (
                currentUsers.map((data, index) =>
                  data.status === "wait for confirm" || data.status === "wait for comfirm" ? (
                    <TableRow
                      key={data.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{data.id}</TableCell>
                      <TableCell component="th" scope="row">
                        <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                          <img
                            src={data.account.accountProfile.avatar}
                            alt="Avatar"
                            style={{ width: "40px", height: "40px" }}
                          />
                          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                            {data.account.username}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{data.shop.name}&nbsp;</TableCell>
                      <TableCell>
                        <div style={{ whiteSpace: 'pre-line', width: "500px" }}>
                          {data.transactionDetails?.map((transaction: any, index: any) => (
                            <React.Fragment key={index}>
                              {`${index + 1}. ${transaction.product_name} `}
                              <b>x{transaction.quantity}</b>
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        ${formatTotal(data.total)}
                      </TableCell>
                      <TableCell>{data.time}</TableCell>
                      <TableCell>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <div>
                            <ConfirmTransaction data={{ data }} onConfirm={() => confirmTransaction(index)}>
                              <IconButton sx={{ backgroundColor: "#0B2447", color: "white", padding: '4px 10px 4px 10px', width: "80px" }}>
                                <label htmlFor="" style={{ fontSize: "14px" }}>Confirm</label>
                              </IconButton>
                            </ConfirmTransaction>
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <RejectTransaction data={{ data }} onReject={() => rejectTransaction(index)}>
                              <IconButton sx={{ backgroundColor: "#DB4444", color: "white", padding: '4px 10px 4px 10px', width: "80px" }}>
                                <label htmlFor="" style={{ fontSize: "14px" }}>Reject</label>
                              </IconButton>
                            </RejectTransaction>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : null
                )
              ) : (
                // No data
                <TableRow>
                  <TableCell colSpan={8} sx={{ textAlign: 'center' }}>
                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                      <label style={{ fontSize: "16px" }} htmlFor="">Data not found</label>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          spacing={2}
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={6}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "10px" }}>
            <label>
              <b>
                Showing {currentPage} of {totalPages}{" "}
                {totalPages > 1 ? "pages" : "page"}
              </b>
            </label>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TableTransaction;
