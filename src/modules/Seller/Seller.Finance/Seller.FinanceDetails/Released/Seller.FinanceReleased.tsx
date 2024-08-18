import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { themeColors } from '../../../../../themes/schemes/PureLightTheme'
import './Seller.FinanceReleased.scss'
import NoSimOutlinedIcon from '@mui/icons-material/NoSimOutlined';

const SellerFinanceReleased: React.FC<{}> = () => {
    return (
        <Box className='seller-finance__released-detail-container'>
            <Stack className='seller-finance__released-list-detail'>
                <Box className='seller-finance__released-list-header' sx={{
                    bgcolor: themeColors.orderInfors,
                    border: '1px solid rgba(0,0,0,.2)',
                    borderRadius: '5px 5px 0 0',
                }}>

                    <Typography>Order</Typography>
                    <Typography>Payout Released</Typography>
                    <Typography>Status</Typography>
                    <Typography>Payment Methods</Typography>
                    <Typography>Released Amount</Typography>
                </Box>
                <Box className='seller-finance__released-list-footer' sx={{
                    border: '1px solid rgba(0,0,0,.2)',
                    borderRadius: '0 0 5px 5px',
                    height: '100%'
                }}>
                    <Box className='seller-finance__released-list-detail'>
                        <Box>
                            <NoSimOutlinedIcon sx={{ width: '100px', height: '100px', color: themeColors.borderDividerAndDecs, }} />
                            <Typography sx={{ color: themeColors.borderDividerAndDecs, fontSize: '20px', width: '100px', textAlign: 'center' }}>No Data</Typography>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default SellerFinanceReleased
