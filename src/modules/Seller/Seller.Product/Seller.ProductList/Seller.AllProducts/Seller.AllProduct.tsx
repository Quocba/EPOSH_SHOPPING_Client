/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BoxContainer from "../../../../../component/Box/Box.Container";
import {
  Box,
  Button,
  Typography,
  Stack,
  Pagination,
  Grid,
} from "@mui/material";
import { themeColors } from "../../../../../themes/schemes/PureLightTheme";
import "./Seller.AllProductStyle.scss";
import { AddOutlined, DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { routes } from "../../../../../routes";
import { useSelector } from "react-redux";
import ModalDeleteProduct from "../../../Modal/Modal.Product/Delete/Modal.DeleteProduct";
import ModalEditProduct from "../../../Modal/Modal.Product/Edit/Modal.EditProduct";


const SellerAllProduct: React.FC<{}> = () => {
  const listProduct = useSelector((state: any) => state.seller.listProduct)

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const productsPerPage = 7;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = listProduct.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPageProducts = Math.ceil(listProduct?.length / productsPerPage);

  const paginate = (event: any, value: any) => {
    event.preventDefault();
    setCurrentPage(value);
    document.documentElement.scrollTop = 200;
  };

  const init = async () => {
    console.log(listProduct);
  }

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [currentPage, listProduct, open]);

  return (
    <BoxContainer property="seller-product__all-list-container">
      <Box
        className="seller-product__all-list-header"
        sx={{
          display: "flex",
          m: "30px 0 0 30px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">{listProduct?.length} Products</Typography>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "0 30px 0 1.4rem",
            color: themeColors.black,
            border: "1px solid rgba(0,0,0,0.2)",
            fontSize: "14px",
            paddingLeft: "6px",
            paddingRight: "6px",
            height: "40px",
            width: "18%",
            textAlign: "center",
          }}
          href={routes.seller.AddProductPage}
        >
          <AddOutlined sx={{ mr: "10px" }} />
          Add New Products
        </Button>
      </Box>
      <Box className="seller-product__all-list-footer">
        <Stack
          className="seller-product__all-list-top"
          sx={{
            bgcolor: themeColors.orderInfors,
            border: "1px solid rgba(0,0,0,.2)",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <Box className="seller-product-list__left">
            <Typography><b>Product Name</b></Typography>
          </Box>
          <Box className="seller-product-list__right">
            <Box className="seller-product-list__product-total">
              <Typography><b>Price</b></Typography>
            </Box>
            <Box className="seller-product-list__product-stock">
              <Typography><b>Stock</b></Typography>
            </Box>
            <Box className="seller-product-list__product-sales">
              <Typography><b>Buyer</b></Typography>
            </Box>
            <Box className="seller-product-list__product-status">
              <Typography><b>Status</b></Typography>
            </Box>
            <Box className="seller-product-list__action">
              <Typography><b>Action</b></Typography>
            </Box>
          </Box>
        </Stack>

        <Box className="seller-product__all-list-bottom">
          {currentProducts?.map((data: any) => (
            <Box key={data?.id} className="seller-product__information-rows">
              <Box className="seller-product__all-list-infor-product--left">
                <img
                  className="seller-product__all-list-img-product"
                  alt=""
                  src={data?.image}
                />
                <Typography className="seller-product__all-list-name-product">
                  {data?.name}
                </Typography>
              </Box>
              <Box className="seller-product__all-list-infor-product--right">
                <Typography className="seller-product__all-list-price-product">
                  {"$" + data?.price}
                </Typography>
                <Typography className="seller-product__stock-product">
                  {data?.stock}
                </Typography>
                <Typography className="seller-product__sales-product">
                  {data?.buyer}
                </Typography>
                <Typography className="seller-product__status-product" color={data?.status==='hidden' ? themeColors.error : data?.status==='approved' ? themeColors.primary : themeColors.warning}>
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
        <Box sx={{ marginLeft: "30px", marginRight: "30px", marginTop: "20px", paddingBottom: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Grid item xs={6} sx={{ alignItems: "center" }}>
              <label>
                <b>
                  Showing {currentPage} of {totalPageProducts}{" "}
                  {totalPageProducts > 1 ? "pages" : "page"}
                </b>
              </label>
            </Grid>
            <Stack sx={{ alignItems: "center" }}>
              {listProduct?.length > 1 && (
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
          </Box>
        </Box>
      </Box>
    </BoxContainer>
  );
};

export default SellerAllProduct;