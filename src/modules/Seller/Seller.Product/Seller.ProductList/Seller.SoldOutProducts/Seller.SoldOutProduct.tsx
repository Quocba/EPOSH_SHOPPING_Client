/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Seller.SoldOutProductStyle.scss";
import { EditOutlined, DeleteOutlined } from "@mui/icons-material";
import {
  Box,
  Typography,
  Stack,
  Button,
  Grid,
  Pagination,
  Modal,
} from "@mui/material";
import BoxContainer from "../../../../../component/Box/Box.Container";
import { themeColors } from "../../../../../themes/schemes/PureLightTheme";
import { filterProductWithSoldoutList, filterProductWithSoldoutNumber } from "../../../../../utils/sellerHelper";
import { useSelector } from "react-redux";
import ModalDeleteProduct from "../../../Modal/Modal.Product/Delete/Modal.DeleteProduct";
import { routes } from "../../../../../routes";
import ModalEditProduct from "../../../Modal/Modal.Product/Edit/Modal.EditProduct";

const style = {
  borderRadius: '5px',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const SellerSoldOutProduct: React.FC<{}> = () => {
  const listProduct = useSelector((state: any) => state.seller.listProduct)

  const [currentPage, setCurrentPage] = useState(1);
  const [listProductSoldOut, setListProductSoldOut] = useState([]);
  const isSoldOutPage = true;
  const [open, setOpen] = useState(false);

  const productsPerPage = 7;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = listProduct.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPageProducts = Math.ceil(filterProductWithSoldoutList?.length / productsPerPage);

  const paginate = (event: any, value: any) => {
    event.preventDefault();
    setCurrentPage(value);
    document.documentElement.scrollTop = 200;
  };

  const init = async () => {
    let temp = filterProductWithSoldoutList(listProduct)
    setListProductSoldOut(temp)
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [currentPage, listProduct, listProductSoldOut, isSoldOutPage]);

  return (
    <BoxContainer property="seller-product__sold_out-list-container">
      <Box
        className="seller-product__sold_out-list-header"
        sx={{
          display: "flex",
          m: "30px 0 0 30px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">{filterProductWithSoldoutNumber(listProduct)} Products</Typography>
      </Box>
      <Box className="seller-product__sold_out-list-footer">
        <Stack
          className="seller-product__sold_out-list-top"
          sx={{
            bgcolor: themeColors.orderInfors,
            border: "1px solid rgba(0,0,0,.2)",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <Box className="seller-product-sold_out-list__left">
            <Typography><b>Product Name</b></Typography>
          </Box>
          <Box className="seller-product-sold_out-list__right">
            <Box className="seller-product-sold_out-list__product-total">
              <Typography><b>Price</b></Typography>
            </Box>
            <Box className="seller-product-sold_out-list__product-stock">
              <Typography><b>Stock</b></Typography>
            </Box>
            <Box className="seller-product-sold_out-list__product-sales">
              <Typography><b>Buyer</b></Typography>
            </Box>
            <Box className="seller-product-sold_out-list__product-status">
              <Typography><b>Status</b></Typography>
            </Box>
            <Box className="seller-product-sold_out-list__action">
              <Typography><b>Action</b></Typography>
            </Box>
          </Box>
        </Stack>

        <Box className="seller-product__sold_out-list-bottom">
          {listProductSoldOut?.map((data: any, index: any) => (
            <Box className="seller-product__sold_out-information-rows" key={index}>
              <Box className="seller-product__sold_out-list-infor-product--left">
                <img
                  className="seller-product__sold_out-list-img-product"
                  alt=""
                  src={data?.image}
                />
                <Typography className="seller-product__sold_out-list-name-product">
                  {data?.name}
                </Typography>
              </Box>
              <Box className="seller-product__sold_out-list-infor-product--right">
                <Typography className="seller-product__sold_out-list-price-product">
                  {"$" + data?.price}
                </Typography>
                <Typography className="seller-product__sold_out-list-stock-product">
                  {data?.stock}
                </Typography>
                <Typography className="seller-product__sold_out-list-sales-product">
                  {data?.buyer}
                </Typography>
                <Typography className="seller-product__sold_out-list-status-product">
                  {data?.status
                    ? data.status.charAt(0).toUpperCase() + data.status.slice(1)
                    : ""}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    mr: "0.5rem",
                  }}
                >
                  <ModalEditProduct data={{ id: data?.id, name: data?.name, description: data?.description, discount: data?.discount, price: data?.price, stock: data?.stock }}>
                    <Button
                      className="seller-product__confirm-product"
                      size="small"
                      sx={{
                        "&:hover": {
                          bgcolor: themeColors.warning,
                        },
                      }}
                    >
                      <EditOutlined />
                    </Button>
                  </ModalEditProduct>
                  <ModalDeleteProduct productID={data?.id}>
                    <Button
                      onClick={handleOpen}
                      className="seller-product__confirm-product"
                      size="small"
                      sx={{
                        "&:hover": {
                          bgcolor: themeColors.warning,
                        },
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </ModalDeleteProduct>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "30px", marginRight: "30px", paddingBottom: "30px"}}>
          <Stack>
            {filterProductWithSoldoutNumber(listProduct) > 1 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={totalPageProducts}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
          <Grid item xs={6}>
            <label>
              <b>
                Showing {currentPage} of {totalPageProducts}{" "}
                {totalPageProducts > 1 ? "pages" : "page"}
              </b>
            </label>
          </Grid>
        </Box>
      </Box>
    </BoxContainer>
  );
};

export default SellerSoldOutProduct;