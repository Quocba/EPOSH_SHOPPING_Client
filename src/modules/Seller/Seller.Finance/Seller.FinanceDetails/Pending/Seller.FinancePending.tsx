import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import './Seller.FinancePending.scss'
import { themeColors } from '../../../../../themes/schemes/PureLightTheme'
import NoSimOutlinedIcon from '@mui/icons-material/NoSimOutlined';

const SellerFinancePending: React.FC<{}> = () => {
    return (
        <Box className='seller-finance__pending-detail-container'>
            <Stack className='seller-finance__pending-list-detail'>
                <Box className='seller-finance__pending-list-header' sx={{
                    bgcolor: themeColors.orderInfors,
                    border: '1px solid rgba(0,0,0,.2)',
                    borderRadius: '5px 5px 0 0',
                }}>

                    <Typography>Order</Typography>
                    <Typography>Date</Typography>
                    <Typography>Status</Typography>
                    <Typography>Payment Methods</Typography>
                    <Typography>Unpaid Amount</Typography>
                </Box>
                <Box className='seller-finance__pending-list-footer' sx={{
                    border: '1px solid rgba(0,0,0,.2)',
                    borderRadius: '0 0 5px 5px',
                    height: '100%',
                }}>
                    <Box className='seller-finance__pending-list-detail'>
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

export default SellerFinancePending
