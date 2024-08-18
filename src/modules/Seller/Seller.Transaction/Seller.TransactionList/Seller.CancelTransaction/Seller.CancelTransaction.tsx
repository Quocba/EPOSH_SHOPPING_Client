/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Seller.CancelTransactionStyle.scss'
import { Box, Stack, Typography, Grid, Pagination } from '@mui/material'
import { themeColors } from '../../../../../themes/schemes/PureLightTheme'
import { useSelector } from 'react-redux'
import { filterTransWithCanceledList, filterTransWithCanceledNumber } from '../../../../../utils/sellerHelper'

const SellerCancelTransaction: React.FC<{}> = () => {

    const listTransaction = useSelector((state: any) => state.seller.listTransaction)

    const [currentPage, setCurrentPage] = useState(1);
    const [listTransactionCancel, setlistTransactionCancel] = useState([]);
    const formatTotal = (total: any) => parseFloat(total).toFixed(2);
    const isCancelPage = true;

    const transactionsPerPage = 7;
    const indexOfLastProduct = currentPage * transactionsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - transactionsPerPage;
    const currentTransactions = listTransaction.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPageTransactions = Math.ceil(filterTransWithCanceledList?.length / transactionsPerPage);

    const paginate = (event: any, value: any) => {
        event.preventDefault();
        setCurrentPage(value);
        document.documentElement.scrollTop = 200;
    };

    const init = async () => {
        let temp = filterTransWithCanceledList(listTransaction)
        setlistTransactionCancel(temp)
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => { }, [currentPage, listTransaction, listTransactionCancel, isCancelPage]);

    return (
        <>
            <Typography
                variant='h3'
                sx={{
                    m: '30px 0 0 30px',
                    color: themeColors.black
                }}>
                {filterTransWithCanceledNumber(listTransaction)} Orders
            </Typography>
            <Box className='seller-transaction__cancel-list-container'>
                <Box className='seller-transaction__cancel-list-top'>
                    <Stack className='seller-transaction__cancel-list-title' sx={{
                        bgcolor: themeColors.orderInfors,
                        border: '1px solid rgba(0,0,0,.2)',
                        borderRadius: '5px',
                    }}>
                        <Box className='seller-transaction-cancel-list__left'>
                            <Typography><b>Product(s)</b></Typography>
                        </Box>
                        <Box className='seller-transaction-cancel-list__right'>
                            <Box className='seller-transaction-cancel-list__transaction-total' sx={{ width: '40%', textAlign: 'center' }}>
                                <Typography><b>Transaction Total</b></Typography>
                            </Box>
                            <Box className='seller-transaction-cancel-list__transaction-status'>
                                <Typography><b>Status</b></Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Box>

                <Box className='seller-transaction__cancel-list-bottom'>
                    {listTransactionCancel?.map((data: any, index: any) => (
                        <Box key={index} className='seller-transaction__cancel-list-information'  >
                            <Box className='top' sx={{
                                bgcolor: themeColors.orderInfors,
                            }}>
                                <Typography className='username'>
                                    {data?.account?.username}
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
                                            ${formatTotal(data?.total)}
                                        </Typography>
                                        <Typography className='status'>
                                            {data?.status ? data.status.charAt(0).toUpperCase() + data.status.slice(1) : ''}
                                        </Typography>
                                    </Box>

                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "30px", marginRight: "30px", alignItems: "center" }}>
                    <Stack>
                        {filterTransWithCanceledNumber(listTransaction) > 1 && (
                            <Pagination
                                color="standard"
                                shape="rounded"
                                defaultPage={1}
                                count={totalPageTransactions}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                            />
                        )}
                    </Stack>
                    <Grid item xs={6}>
                        <label>
                            <b>
                                Showing {currentPage} of {totalPageTransactions}{" "}
                                {totalPageTransactions > 1 ? "pages" : "page"}
                            </b>
                        </label>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SellerCancelTransaction
