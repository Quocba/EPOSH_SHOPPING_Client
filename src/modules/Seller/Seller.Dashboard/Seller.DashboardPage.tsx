import { Box, /*Card, CardMedia,*/ Typography } from "@mui/material";
import BoxContainer from "../../../component/Box/Box.Container";
import DrawerComponent from "../../../layouts/Drawer/DrawerSeller/DrawerComponent";
import SellerHeader from "../../../layouts/Header/Seller/SellerHeader";
import "./Seller.DashboardStyle.scss";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import Widget from "./Seller.DashboardContent/TodoList/Widget";
import MonthDropdown from "./Seller.DashboardContent/SaleAnalysis/Month/Month.Dropdown";
import ChartInformation from "./Seller.DashboardContent/SaleAnalysis/Content/Chart.Information";
import SellerCreateVoucher from "./Seller.DashboardContent/CreateVoucher/Seller.CreateVoucher";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SellerDashboardPage: React.FC<{}> = () => {

  const listProduct = useSelector((state: any) => state.seller.listProduct)
  const listTransaction = useSelector((state: any) => state.seller.listTransaction)
  const listVoucher = useSelector((state: any) => state.seller.listVoucher)

  useEffect(() => { }, [listProduct, listTransaction])

  return (
    <div className="seller-page__container">
      <DrawerComponent />
      <div className="home-container">
        <SellerHeader />
        <BoxContainer property="seller__to-do-list">
          <Box className="to-do-list__title">
            <Typography sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: themeColors.black,
              mb: '9px',
              '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                fontSize: '18px',
              }
            }}>
              To do list
            </Typography>
            <Typography sx={{
              fontSize: '14px',
              fontWeight: 'auto',
              color: themeColors.borderDividerAndDecs,
              marginLeft: '3px',
              '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                fontSize: '12px',
              }
            }}>
              Things you want to do
            </Typography>
          </Box>
          <Widget listProduct={listProduct} listTransaction={listTransaction} listVoucher={listVoucher} />
        </BoxContainer>

        <BoxContainer property='seller__sale-analysis'>
          <Box className='sale-analysis__top'>
            <Box className='sale-analysis__title'>
              <Typography sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: themeColors.black,
                mb: '9px',
                '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                  fontSize: '18px',
                }
              }}>
                Sales Analysis
              </Typography>
              <Typography sx={{
                fontSize: '14px',
                fontWeight: 'auto',
                color: themeColors.borderDividerAndDecs,
                marginLeft: '3px',
                '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                  fontSize: '12px',
                }
              }}>
                An overview of the shop data for the confirmed order dimension
              </Typography>
            </Box>
            <MonthDropdown />
          </Box>
          <Box className='sale-analysis__bottom'>
            <ChartInformation />
          </Box>
        </BoxContainer>

        <BoxContainer property="seller__create-voucher">
          <Box className="create-voucher__title">
            <Typography sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: themeColors.black,
              mb: '9px',
              '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                fontSize: '18px',
              }
            }}>
              Create Vouchers
            </Typography>
            <Typography sx={{
              fontSize: '14px',
              fontWeight: 'auto',
              color: themeColors.borderDividerAndDecs,
              marginLeft: '3px',
              '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                fontSize: '12px',
              }
            }}>
              43% increase in Orders and 28% increase in Sales Revenue
            </Typography>
          </Box>
          <SellerCreateVoucher />
        </BoxContainer>
      </div>
    </div>
  );
};

export default SellerDashboardPage;
