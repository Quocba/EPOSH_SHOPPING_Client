import React from 'react'
import './Seller.RefundTransactionStyle.scss'
import { Box, Stack, Typography } from '@mui/material'
import { themeColors } from '../../../../../themes/schemes/PureLightTheme'

const SellerRefundTransaction: React.FC<{}> = () => {
    return (
        <Box className='seller-transaction__refund-list-container'>
            <Box className='seller-transaction__refund-list-top'>
                <Typography
                    variant='h3'
                    sx={{
                        m: '30px 0 0 30px',
                        color: themeColors.black
                    }}>
                    3 Orders
                </Typography>
            </Box>

            <Box className='seller-transaction__refund-list-bottom'>
                <Stack className='seller-transaction__refund-list-header' sx={{
                    bgcolor: themeColors.orderInfors,
                    border: '1px solid rgba(0,0,0,.2)',
                    borderRadius: '5px',
                }}>
                    <Box className='seller-transaction-refund-list__left'>
                        <Typography><b>Product(s)</b></Typography>
                    </Box>
                    <Box className='seller-transaction-refund-list__right'>
                        <Box className='seller-transaction-refund-list__transaction-total'>
                            <Typography><b>Refund Amount</b></Typography>
                        </Box>
                        <Box className='seller-transaction-refund-list__transaction-status'>
                            <Typography><b>Status</b></Typography>
                        </Box>
                        <Box className='seller-transaction-refund-list__action'>
                            <Typography><b>Return Reason</b></Typography>
                        </Box>
                    </Box>
                </Stack>

                <Stack className='seller-transaction__refund-list-footer-more-product'>
                    <Box className='seller-transaction__refund-list-information' sx={{
                        bgcolor: themeColors.orderInfors,
                        border: '1px solid rgba(0,0,0,.2)',
                    }}>
                        <Typography className='seller-transaction__refund-list-name-user'>
                            <b>1stromeo</b>
                        </Typography>
                        <Box className='seller-transaction__refund-list-transaction-id' sx={{ display: 'flex' }}>
                            <Typography><b>Transaction ID -</b></Typography>
                            <Typography sx={{ fontWeight: 'bold', ml: '5px' }}>99</Typography>
                        </Box>
                    </Box>
                    <Box className='seller-transaction__refund-list-information-detail-more-product' sx={{
                        border: '1px solid rgba(0,0,0,.2)',
                    }}>
                        <Box className='seller-transaction__refund-list-infor-product'>
                            <img
                                className='seller-transaction__refund-list-img-product'
                                alt=""
                                src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                            />
                            <Typography className='seller-transaction__refund-list-name-product'>
                                Mèo Méo Meo Con Mòe
                            </Typography>
                            <Typography className='seller-transaction__refund-list-total-product'>
                                x1
                            </Typography>
                        </Box>
                        <Box className='seller-transaction__refund-list-infor-transaction'>
                            <Typography className='seller-transaction__refund-list-total-money'>
                                $5000
                            </Typography>
                            <Typography className='seller-transaction__refund-list-status'>
                                Refund
                            </Typography>
                            <Box className='seller-transaction__refund-list-confirm-transaction'>
                                I want to return the item because it doesn't match the picture. The product received looks different, and I would like to request a refund or an exchange. Thank you for your understanding.
                            </Box>
                        </Box>

                        <Box className='seller-transaction__refund-list-infor-product-more'>
                            <img
                                className='seller-transaction__refund-list-img-product'
                                alt=""
                                src="https://dogily.vn/wp-content/uploads/2022/12/meme-cho-shiba-15.webp"
                            />
                            <Typography className='seller-transaction__refund-list-name-product'>
                                Gấu Gầu Gâu Con Chóa
                            </Typography>
                            <Typography className='seller-transaction__refund-list-total-product'>
                                x1
                            </Typography>
                        </Box>
                        <Box className='seller-transaction__refund-list-infor-transaction' sx={{ mt: '1rem' }}>
                            <Typography className='seller-transaction__refund-list-total-money'>
                                $5000
                            </Typography>
                            <Typography className='seller-transaction__refund-list-status'>
                                Refund
                            </Typography>
                            <Box className='seller-transaction__refund-list-confirm-transaction'>
                                I want to return the item because it got damaged during shipping. Please arrange for a return and replacement. Thank you for your prompt attention to this matter.
                            </Box>
                        </Box>
                    </Box>
                </Stack>

                <Stack className='seller-transaction__refund-list-footer-one-product'>
                    <Box className='seller-transaction__refund-list-information' sx={{
                        bgcolor: themeColors.orderInfors,
                        border: '1px solid rgba(0,0,0,.2)',
                    }}>
                        <Typography className='seller-transaction__refund-list-name-user'>
                            <b>hieuminhdoan123</b>
                        </Typography>
                        <Box className='seller-transaction__refund-list-transaction-id' sx={{ display: 'flex' }}>
                            <Typography><b>Transaction ID -</b></Typography>
                            <Typography sx={{ fontWeight: 'bold', ml: '5px' }}>50</Typography>
                        </Box>
                    </Box>
                    <Box className='seller-transaction__refund-list-information-detail-one-product' sx={{
                        border: '1px solid rgba(0,0,0,.2)',
                    }}>
                        <Box className='seller-transaction__refund-list-infor-product'>
                            <img
                                className='seller-transaction__refund-list-img-product'
                                alt=""
                                src="https://nhanvietluanvan.com/wp-content/uploads/2023/05/anh-meme-meo-ngoac-mom-750x620.jpg"
                            />
                            <Typography className='seller-transaction__refund-list-name-product'>
                                Mèo Méo Meo Con Mòe
                            </Typography>
                            <Typography className='seller-transaction__refund-list-total-product'>
                                x1
                            </Typography>
                        </Box>
                        <Box className='seller-transaction__refund-list-infor-transaction'>
                            <Typography className='seller-transaction__refund-list-total-money'>
                                $5000
                            </Typography>
                            <Typography className='seller-transaction__refund-list-status'>
                                Refund
                            </Typography>
                            <Box className='seller-transaction__refund-list-confirm-transaction'>
                                I need to return the item as it is a counterfeit product. I expect a full refund and request measures to prevent such incidents in the future. Thank you for your understanding.
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default SellerRefundTransaction
