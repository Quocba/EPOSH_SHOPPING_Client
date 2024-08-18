import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import AdminContainer from "../modules/Admin/Admin.Container";

function AdminRoutes() {
  return (
    <Routes>
      <Route path={routes.admin.Root} element={<AdminContainer />} />
      <Route path={routes.admin.UserPage} element={<AdminContainer />} />
      <Route path={routes.admin.CategoryPage} element={<AdminContainer />} />
      <Route path={routes.admin.ShopPage} element={<AdminContainer />} />
      <Route path={routes.admin.VoucherPage} element={<AdminContainer />} />
      <Route path={routes.admin.TransactionPage} element={<AdminContainer />} />
    </Routes>
  );
}
export default AdminRoutes;
