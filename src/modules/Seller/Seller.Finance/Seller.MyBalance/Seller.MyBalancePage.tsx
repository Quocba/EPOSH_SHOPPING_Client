import React, { useEffect, useState } from 'react'
import DrawerComponent from '../../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import SellerHeader from '../../../../layouts/Header/Seller/SellerHeader'
import './Seller.MyBalanceStyle.scss'
import BoxContainer from '../../../../component/Box/Box.Container'
import { Box, Button, Divider, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import { themeColors } from '../../../../themes/schemes/PureLightTheme'
import { NoSimOutlined } from '@mui/icons-material'

const SellerMyBalancePage: React.FC<{}> = () => {

    const data = ['All', 'Order Income', 'Withdrawals', 'Refund from Order', 'Adjustment', 'Seller Balance Payment'];

    const [isSelectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
    }

    useEffect(() => { }, [isSelectedItem]);

    return (
        <div className='seller-balance__container'>
            <DrawerComponent />
            <div className='seller-balance-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-balance__content'>
                    <Box className='seller-balance__top'>
                        <Typography className='seller-balance__title' sx={{ fontSize: '24px', fontWeight: 'bold' }}>Balance Orverview</Typography>
                        <Box className='seller-balance__wallet'>
                            <Typography className='seller-balance__waller-title' sx={{ fontSize: '20px' }}>Wallet Balance</Typography>
                            <Box className='seller-balance__wallet-data'>
                                <Typography className='seller-balance__wallet-data-money' sx={{ fontSize: '18px' }}>0$</Typography>
                                <Button size='small' sx={{
                                    color: themeColors.white,
                                    bgcolor: themeColors.tertiary,
                                    cursor: 'not-allowed',
                                    fontSize: '16px',
                                    '&:hover': {
                                        bgcolor: themeColors.primary
                                    }
                                }}>
                                    Withdraw
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='seller-balance__bottom'>
                        <Typography className='seller-balance__title' sx={{ fontSize: '24px', fontWeight: 'bold' }}>Recent Transactions</Typography>
                        <List disablePadding>
                            <Stack direction='row' gap='1rem' justifyContent='space-between'>
                                {data.map((item, index) => (
                                    <ListItem key={index} sx={{
                                        width: index === 0 ? '6.3%' : '19%',
                                        m: '0',
                                        p: '0'
                                    }}>
                                        <ListItemButton
                                            onClick={() => handleItemClick(index)}
                                            sx={{
                                                ml: index === 0 ? '20px' : '0',
                                                mr: index === 5 ? '20px' : '0',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: index === isSelectedItem ? themeColors.avatar : 'inherit',
                                                    fontWeight: index === isSelectedItem ? 'bold' : 'inherit',
                                                    width: '100%',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Stack>
                        </List>
                        <Divider />
                        <Box className='seller-balance__list-detail'>
                            <Box>
                                <NoSimOutlined sx={{ width: '100px', height: '100px', color: themeColors.borderDividerAndDecs, }} />
                                <Typography sx={{ color: themeColors.borderDividerAndDecs, fontSize: '20px', width: '100px', textAlign: 'center' }}>No Data</Typography>
                            </Box>
                        </Box>
                    </Box>
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerMyBalancePage
