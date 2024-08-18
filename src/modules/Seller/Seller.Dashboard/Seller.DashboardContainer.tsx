/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import SellerDashboardPage from "./Seller.DashboardPage";
import { getAllProductByShopId, getAllTransactionByShopId, getAllVoucherByShopId, getDataChart, getShopProfile } from "../Seller.Api";
import { useDispatch } from "react-redux";

const SellerDashboardContainer: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const shopID = localStorage.getItem("shop_id")
  const accountID = localStorage.getItem("account-id")
  const month = localStorage.getItem("monthChart")

  // ========== get all product by shopid ========== //
  const init = async () => {
    await getAllProductByShopId(shopID, dispatch)
  }

  // ========== get all transaction by shopid ========== //
  const transaction = async () => {
    await getAllTransactionByShopId(dispatch)
  }

  // ========== get all voucher by shopid ========== //
  const voucher = async () => {
    await getAllVoucherByShopId(shopID, dispatch)
  }

  // ========== get profile by account id ========== //
  const profile = async () => {
    await getShopProfile(accountID, dispatch)
  }

  // ========== get chart by month ========== //
  const chart = async () => {
    await getDataChart(month, dispatch);
  }

  useEffect(() => {
    init();
    transaction();
    voucher();
    profile();
    chart();
  }, [])

  return <SellerDashboardPage />;
};

export default SellerDashboardContainer;