import React, { useEffect, useState } from 'react'
import SellerHeader from '../../../layouts/Header/Seller/SellerHeader'
import DrawerComponent from '../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import BoxContainer from '../../../component/Box/Box.Container'
import './Seller.FinanceStyle.scss'
import { Box, Divider, List, ListItem, ListItemButton, Stack, TextField, Typography } from '@mui/material'
import { themeColors } from '../../../themes/schemes/PureLightTheme'
import { Link } from 'react-router-dom'
import SellerFinancePending from './Seller.FinanceDetails/Pending/Seller.FinancePending'
import SellerFinanceReleased from './Seller.FinanceDetails/Released/Seller.FinanceReleased'

const SellerFinancePage: React.FC<{}> = () => {

    const data = ['Pending', 'Released'];

    const [isSelectedDetailItem, setSelectedDetailItem] = useState(0);

    const handleDetailItemClick = (index: number) => {
        setSelectedDetailItem(index);
    }

    useEffect(() => { }, [isSelectedDetailItem])

    return (
        <div className='seller-finance__container'>
            <DrawerComponent />
            <div className='seller-finance-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-finance__top'>
                    <Typography className='seller-finance__title' sx={{ fontSize: '24px' }}>
                        Income Overview
                    </Typography>
                    <Box className='seller-finance__data'>
                        <Box className='seller-finance__pending'>
                            <Typography className='seller-finance__pending-title' sx={{ fontSize: '22px' }}>
                                Pending
                            </Typography>
                            <Typography className='seller-finance__pending-desc' sx={{ fontSize: '14px' }}>
                                Total
                            </Typography>
                            <Typography className='seller-finance__pending-data' sx={{ fontSize: '20px' }}>
                                0$
                            </Typography>
                        </Box>

                        <Divider orientation='vertical' sx={{ bgcolor: themeColors.borderDividerAndDecs }} />

                        <Box className='seller-finance__released'>
                            <Box className='seller-finance__released-left'>
                                <Typography className='seller-finance__released-title' sx={{ fontSize: '22px' }}>
                                    Released
                                </Typography>
                                <Typography className='seller-finance__released-desc' sx={{ fontSize: '14px' }}>
                                    This week
                                </Typography>
                                <Typography className='seller-finance__released-data' sx={{ fontSize: '20px' }}>
                                    0$
                                </Typography>
                            </Box>
                            <Box className='seller-finance__released-right'>
                                <Box className='seller-finance__released-month'>
                                    <Typography className='seller-finance__released-desc' sx={{ fontSize: '14px' }}>
                                        This month
                                    </Typography>
                                    <Typography className='seller-finance__released-data' sx={{ fontSize: '20px' }}>
                                        0$
                                    </Typography>
                                </Box>

                                <Box className='seller-finance__released-total'>
                                    <Typography className='seller-finance__released-desc' sx={{ fontSize: '14px' }}>
                                        Total
                                    </Typography>
                                    <Typography className='seller-finance__released-data' sx={{ fontSize: '20px' }}>
                                        0$
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className='seller-finance__account-balance'>
                        <Link to='/seller/finance/my-balance' className='seller-finance__link'>
                            My Balance {'>'}
                        </Link>
                    </Box>
                </BoxContainer>

                <BoxContainer property='seller-finance__bottom'>
                    <Box className='seller-finance__income-detail'>
                        <Typography className='seller-finance__title' sx={{ fontSize: '24px' }}>
                            Income Details
                        </Typography>
                        <TextField className='seller-finance__search-order' variant='outlined' placeholder='Search Order' size='small' />
                    </Box>
                    <List disablePadding sx={{ pb: '5rem' }}>
                        <Stack direction='row' sx={{
                            width: '20%'
                        }}>
                            {data.map((label, index) => (
                                <ListItem key={index}>
                                    <ListItemButton
                                        onClick={() => handleDetailItemClick(index)}
                                    >
                                        <Typography
                                            sx={{
                                                color: index === isSelectedDetailItem ? themeColors.avatar : 'inherit',
                                                fontWeight: index === isSelectedDetailItem ? 'bold' : 'inherit',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Stack>
                    </List>

                    <Divider sx={{ mt: '-5rem' }} />

                    {isSelectedDetailItem === 0 ? <SellerFinancePending /> : null}
                    {isSelectedDetailItem === 1 ? <SellerFinanceReleased /> : null}
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerFinancePage
