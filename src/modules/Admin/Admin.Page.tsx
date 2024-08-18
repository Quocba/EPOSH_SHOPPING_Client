import * as React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "../../layouts/Header/Admin/Admin.Header";
import TableUser from "./User/Admin.User";
import TableSeller from "./Shop/Admin.Shop";
import TableCategory from "./Category/Admin.Category";
import TableTransaction from "./Transaction/Admin.Transaction";
import {
  getAllUser,
  getAllShopInformation,
  getAllShopCategory,
  getAllTransaction,
} from "./Admin.Api";

const AdminPage: React.FC<{}> = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let tableComponent;

  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataSeller, setDataSeller] = useState<any[]>([]);
  const [dataCategory, setDataCategory] = useState<any[]>([]);
  const [dataTransaction, setDataTransaction] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  if (selectedItem === 0 || currentPath.toLowerCase() === "/admin/account") {
    tableComponent = <TableUser data={dataUser} />;
  } else if (
    selectedItem === 1 ||
    currentPath.toLowerCase() === "/admin/category"
  ) {
    tableComponent = <TableCategory data={dataCategory} />;
  } else if (
    selectedItem === 2 ||
    currentPath.toLowerCase() === "/admin/shop"
  ) {
    tableComponent = <TableSeller data={dataSeller} />;
  } else if (
    selectedItem === 3 ||
    currentPath.toLowerCase() === "/admin/transaction"
  ) {
    tableComponent = <TableTransaction data={dataTransaction} />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          currentPath.toLowerCase() === "/admin" ||
          currentPath.toLowerCase() === "/admin/account"
        ) {
          const responseData = await getAllUser();
          setDataUser(responseData);
          setSelectedItem(0);
        } else if (currentPath.toLowerCase() === "/admin/category") {
          const responseData = await getAllShopCategory();
          setDataCategory(responseData);
          setSelectedItem(1);
        } else if (currentPath.toLowerCase() === "/admin/shop") {
          const responseData = await getAllShopInformation();
          setDataSeller(responseData);
          setSelectedItem(2);
        } else if (currentPath.toLowerCase() === "/admin/transaction") {
          const responseData = await getAllTransaction();
          setDataTransaction(responseData);
          setSelectedItem(3);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [currentPath]);

  useEffect(() => { }, [dataUser, dataSeller, dataCategory, dataTransaction, selectedItem]);

  return (
    <Box>
      <Header
        username={"Huỳnh Chí Hải"}
        permission={"Admin"}
        table={tableComponent}
        sideSelect={selectedItem}
      />
    </Box>
  );
};

export default AdminPage;
