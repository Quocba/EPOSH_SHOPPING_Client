/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { themeColors } from '../../../../../themes/schemes/PureLightTheme'
import './Seller.AllTransactionStyle.scss'
import { useDispatch, useSelector } from 'react-redux'
import { saveListTransactionFilterMonth } from '../../../Seller.Action'

const SellerAllTransaction: React.FC<{}> = () => {

    const dispatch = useDispatch();

    const listTransaction = useSelector((state: any) => state.seller.listTransaction)
    const listTransactionFilterMonth = useSelector((state: any) => state.seller.listTransactionFilterMonth)
    const [currentPage, setCurrentPage] = useState(1);

    const transactionsPerPage = 7;
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactionsFilterMonth = listTransactionFilterMonth.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPageProducts = Math.ceil(listTransaction?.length / transactionsPerPage);

    const paginate = (event: any, value: any) => {
        event.preventDefault();
        setCurrentPage(value);
        document.documentElement.scrollTop = 200;
    };

    const init = () => {

    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => { }, [currentPage, listTransaction, listTransactionFilterMonth]);

    return (
        <>
            <Typography
                variant='h3'
                sx={{
                    m: '30px 0 0 30px',
                    color: themeColors.black
                }}>
                {listTransactionFilterMonth?.length} Orders
            </Typography>
            <Box className='seller-transaction__all-list-container'>
                <Box className='seller-transaction__all-list-top'>
                    <Stack className='seller-transaction__all-list-title' sx={{
                        bgcolor: themeColors.orderInfors,
                        border: '1px solid rgba(0,0,0,.2)',
                        borderRadius: '5px',
                    }}>
                        <Box className='seller-transaction-all-list__left'>
                            <Typography><b>Product(s)</b></Typography>
                        </Box>
                        <Box className='seller-transaction-all-list__right'>
                            <Box className='seller-transaction-all-list__transaction-total' sx={{ width: '40%', textAlign: 'center' }}>
                                <Typography><b>Transaction Total</b></Typography>
                            </Box>
                            <Box className='seller-transaction-all-list__transaction-status'>
                                <Typography><b>Status</b></Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Box>

                <Box className='seller-transaction__all-list-bottom'>
                    {currentTransactionsFilterMonth?.map((data: any, index: any) => (
                        <Box key={index} className='seller-transaction__all-list-information'  >
                            <Box className='top' sx={{
                                bgcolor: themeColors.orderInfors,
                            }}>
                                <Typography className='username'>
                                    Customer: {data?.account?.username}
                                </Typography>
                                <Box className='transaction-id' sx={{ display: 'flex' }}>
                                    <Typography>Transaction ID -</Typography>
                                    <Typography sx={{ fontWeight: 'bold', ml: '5px' }}>{data?.id}</Typography>
                                </Box>
                            </Box>

                            {data?.transactionDetails?.map((item: any, index: any) => (
                                <Box key={index} className='bottom' >
                                    <Box className='information-product' >
                                        <img
                                            className='img'
                                            alt=""
                                            src={item?.image}
                                        />
                                        <Typography className='name'>
                                            {item?.product_name}
                                        </Typography>
                                        <Typography className='quantity'>
                                            {`x` + item?.quantity}
                                        </Typography>
                                    </Box>
                                    <Box className='information-transaction'>
                                        <Typography className='total-money'>
                                            {`$` + Math.ceil(item?.quantity * item?.price)}
                                        </Typography>
                                        <Typography className='status' color={data?.status==='completed' ? themeColors.primary : data?.status==='Canceled' ? themeColors.gray : themeColors.warning}>
                                            {data?.status ? data.status.charAt(0).toUpperCase() + data.status.slice(1) : ''}
                                        </Typography>
                                    </Box>

                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "30px", marginRight: "30px", alignItems: "center" }}>
                    <Grid item xs={6} sx={{ alignItems: "center" }}>
                        <label>
                            <b>
                                Showing {currentPage} of {totalPageProducts}{" "}
                                {totalPageProducts > 1 ? "pages" : "page"}
                            </b>
                        </label>
                    </Grid>
                    <Stack sx={{ alignItems: "center" }}>
                        {listTransaction?.length > 1 && (
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
        </>
    )
}

export default SellerAllTransaction