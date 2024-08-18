/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Seller.HiddenProductStyle.scss'
import BoxContainer from '../../../../../component/Box/Box.Container';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import { Box, Typography, Stack, Button, Modal, Pagination, Grid } from '@mui/material';
import { themeColors } from '../../../../../themes/schemes/PureLightTheme';
import { useSelector } from 'react-redux';
import { filterProductWithHiddenList, filterProductWithHiddenNumber } from '../../../../../utils/sellerHelper';
import ModalDeleteProduct from '../../../Modal/Modal.Product/Delete/Modal.DeleteProduct';
import { routes } from '../../../../../routes';
import ModalEditProduct from '../../../Modal/Modal.Product/Edit/Modal.EditProduct';

const SellerHiddenProduct: React.FC<{}> = () => {
    const listProduct = useSelector((state: any) => state.seller.listProduct)

    const [currentPage, setCurrentPage] = useState(1);
    const [listProductHidden, setListProductHidden] = useState([]);
    const isHiddenPage = true;
    const [open, setOpen] = useState(false);

    const productsPerPage = 7;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = listProduct.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPageProducts = Math.ceil(filterProductWithHiddenList?.length / productsPerPage);

    const paginate = (event: any, value: any) => {
        event.preventDefault();
        setCurrentPage(value);
        document.documentElement.scrollTop = 200;
    };

    const init = async () => {
        let temp = filterProductWithHiddenList(listProduct)
        setListProductHidden(temp)
    }

    const handleOpen = () => setOpen(true);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => { }, [currentPage, listProduct, listProductHidden, isHiddenPage, open]);

    return (
        <BoxContainer property="seller-product__hidden-list-container">
            <Box
                className="seller-product__hidden-list-header"
                sx={{
                    display: "flex",
                    m: "30px 0 0 30px",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h3">{filterProductWithHiddenNumber(listProduct)} Products</Typography>
            </Box>
            <Box className="seller-product__hidden-list-footer">
                <Stack
                    className="seller-product__hidden-list-top"
                    sx={{
                        bgcolor: themeColors.orderInfors,
                        border: "1px solid rgba(0,0,0,.2)",
                        borderRadius: "5px 5px 0 0",
                    }}
                >
                    <Box className="seller-product-hidden-list__left">
                        <Typography><b>Product Name</b></Typography>
                    </Box>
                    <Box className="seller-product-hidden-list__right">
                        <Box className="seller-product-hidden-list__product-total">
                            <Typography><b>Price</b></Typography>
                        </Box>
                        <Box className="seller-product-hidden-list__product-stock">
                            <Typography><b>Stock</b></Typography>
                        </Box>
                        <Box className="seller-product-hidden-list__product-sales">
                            <Typography><b>Buyer</b></Typography>
                        </Box>
                        <Box className="seller-product-hidden-list__product-status">
                            <Typography><b>Status</b></Typography>
                        </Box>
                        <Box className="seller-product-hidden-list__action">
                            <Typography><b>Action</b></Typography>
                        </Box>
                    </Box>
                </Stack>

                <Box className="seller-product__hidden-list-bottom">
                    {listProductHidden?.map((data: any, index: any) => (
                        <Box className="seller-product__hidden-information-rows" key={index}>
                            <Box className="seller-product__hidden-list-infor-product--left">
                                <img
                                    className="seller-product__hidden-list-img-product"
                                    alt=""
                                    src={data?.image}
                                />
                                <Typography className="seller-product__hidden-list-name-product">
                                    {data?.name}
                                </Typography>
                            </Box>
                            <Box className="seller-product__hidden-list-infor-product--right">
                                <Typography className="seller-product__hidden-list-price-product">
                                    {"$" + data?.price}
                                </Typography>
                                <Typography className="seller-product__hidden-list-stock-product">
                                    {data?.stock}
                                </Typography>
                                <Typography className="seller-product__hidden-list-sales-product">
                                    {data?.buyer}
                                </Typography>
                                <Typography className="seller-product__hidden-list-status-product">
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
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: '30px', marginRight: '30px', paddingBottom: "30px"}}>
                    <Stack>
                        {filterProductWithHiddenNumber(listProduct) > 1 && (
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
    )
}

export default SellerHiddenProduct
