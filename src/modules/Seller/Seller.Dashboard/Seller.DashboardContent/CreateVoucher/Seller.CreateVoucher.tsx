/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import './Seller.CreateVoucher.scss'
import { themeColors } from "../../../../../themes/schemes/PureLightTheme";
import { routes } from "../../../../../routes";
import { useDispatch, useSelector } from "react-redux";
import { changeVoucher } from "../../../Seller.Action";

const SellerCreateVoucher: React.FC<{}> = () => {

  const indexVoucher = useSelector((state: any) => state.seller.indexVoucher);
  const dispatch = useDispatch();

  const voucherItems = [
    {
      title: 'Shop Voucher',
      desc: 'Offer applies to all your products to increase sales',
      btnCreate: 'Create Voucher'
    },
    {
      title: 'Product Voucher',
      desc: 'Shop vouchers apply to some promotions product',
      btnCreate: 'Create Voucher'
    },
    {
      title: 'New Buyer Voucher',
      desc: 'Shop vouchers to attract new and potential buyers',
      btnCreate: 'Create Voucher'
    },
    {
      title: 'Ship Voucher',
      desc: 'Vouchers apply to delivery methods of promotions',
      btnCreate: 'Create Voucher'
    },
  ]

  const handleVoucherItemClick = (item: any) => {
    console.log(item);
    dispatch(changeVoucher(item))
  }

  useEffect(() => { }, [indexVoucher])

  return (
    <Box className='seller-create-voucher__container'>
      {voucherItems.map((item, index) => (
        <React.Fragment key={index}>
          <Stack className="seller-create-voucher__items">
            <Box className='seller-create-voucher__item-text'>
              <Typography className='seller-item__title'>{item.title}</Typography>
              <Typography className='seller-item__desc'>{item.desc}</Typography>
            </Box>
            <Divider sx={{ color: themeColors.borderDividerAndDecs }} />
            <Button
              onClick={() => handleVoucherItemClick(item)}
              sx={{
                width: "100%",
                height: "100%",
                color: themeColors.primary,
                fontSize: "22px",
                fontWeight: "400",
                "&:hover": {
                  backgroundColor: themeColors.white,
                },
                '@media screen and (min-width: 740px) and (max-width: 1194px)': {
                  height: '50%',
                  fontSize: '16px',
                }
              }}
              href={routes.seller.CreateVoucherPage}
            >
              {item.btnCreate}
            </Button>
          </Stack>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SellerCreateVoucher;
