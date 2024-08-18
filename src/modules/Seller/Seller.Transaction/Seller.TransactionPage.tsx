/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import DrawerComponent from '../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import './Seller.TransactionStyle.scss'
import SellerHeader from '../../../layouts/Header/Seller/SellerHeader'
import BoxContainer from '../../../component/Box/Box.Container'
import { Box, Button, Divider, List, ListItem, ListItemButton, Stack, Typography, FormControl, SelectChangeEvent, MenuItem, Select, TextField } from '@mui/material'
import { themeColors } from '../../../themes/schemes/PureLightTheme'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ArchiveOutlined } from '@mui/icons-material'
import SellerAllTransaction from './Seller.TransactionList/Seller.AllTransaction/Seller.AllTransaction'
import SellerCompletedTransaction from './Seller.TransactionList/Seller.CompletedTransaction/Seller.CompletedTransaction'
import SellerCancelTransaction from './Seller.TransactionList/Seller.CancelTransaction/Seller.CancelTransaction'
import SellerUnpaidTransaction from './Seller.TransactionList/Seller.UnpaidTransaction/Seller.UnpaidTransaction'
import SellerRefundTransaction from './Seller.TransactionList/Seller.RefundTransaction/Seller.RefundTransaction'
import { exportExcel, getTransactionByMonth } from '../Seller.Api'
import { API_BASE_URL, ApiUrl } from '../../../services/ApiUrl'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { filterTotalTransaction } from '../../../utils/sellerHelper'


const SellerTransactionPage: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const navItems = ['All', 'Unpaid', 'Completed', 'Cancellation', 'Return/Refund']

    const listTransaction = useSelector((state: any) => state.seller.listTransaction)

    const [isSelectNavItem, setSelectNavItem] = useState(0);
    const [isSelectedSearchItem, setSelectedSearchItem] = useState('');

    const handleNavItemsClick = (index: number) => {
        setSelectNavItem(index);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedSearchItem(event.target.value);
    };

    const handleChangeMonth = async (newMonth: any) => {
        localStorage.setItem("monthFilter", newMonth?.$M + 1);
        console.log(newMonth?.$M + 1);
        await getTransactionByMonth(newMonth?.$M + 1, localStorage.getItem("account-id"), dispatch)
    }

    const init = () => {

    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => { }, [isSelectNavItem, isSelectedSearchItem, listTransaction]);

    return (
        <div className='seller-order__container'>
            <DrawerComponent />
            <div className='seller-order-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-transaction__top'>
                    <Typography className='seller-transaction__title' sx={{ fontSize: '24px' }}>
                        Income Overview
                    </Typography>
                    <Box className='seller-transaction__data'>
                        <Box className='seller-transaction__pending'>
                            <Typography className='seller-transaction__pending-title' sx={{ fontSize: '22px' }}>
                                Pending
                            </Typography>
                            <Typography className='seller-transaction__pending-desc' sx={{ fontSize: '14px' }}>
                                Total
                            </Typography>
                            <Typography className='seller-transaction__pending-data' sx={{ fontSize: '20px' }}>
                                ${filterTotalTransaction('Pending', listTransaction)}
                            </Typography>
                        </Box>

                        <Divider orientation='vertical' sx={{ bgcolor: themeColors.borderDividerAndDecs }} />

                        <Box className='seller-transaction__released'>
                            <Box className='seller-transaction__released-left'>
                                <Typography className='seller-transaction__released-title' sx={{ fontSize: '22px' }}>
                                    Released
                                </Typography>
                                <Typography className='seller-transaction__released-desc' sx={{ fontSize: '14px' }}>
                                    Total
                                </Typography>
                                <Typography className='seller-transaction__released-data' sx={{ fontSize: '20px' }}>
                                    ${filterTotalTransaction('Released', listTransaction)}
                                </Typography>
                            </Box>

                        </Box>

                        <Divider orientation='vertical' sx={{ bgcolor: themeColors.borderDividerAndDecs }} />

                        <Box className='seller-transaction__cancel'>
                            <Box className='seller-transaction__cancel-left'>
                                <Typography className='seller-transaction__cancel-title' sx={{ fontSize: '22px' }}>
                                    Canceled
                                </Typography>
                                <Typography className='seller-transaction__cancel-desc' sx={{ fontSize: '14px' }}>
                                    Total
                                </Typography>
                                <Typography className='seller-transaction__cancel-data' sx={{ fontSize: '20px' }}>
                                    ${filterTotalTransaction('Canceled', listTransaction)}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </BoxContainer>

                <BoxContainer property="seller-transaction__bottom">
                    <List className='nav__items' disablePadding>
                        <Stack direction='row'>
                            {navItems.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemButton
                                        onClick={() => handleNavItemsClick(index)}
                                    >
                                        <Typography
                                            sx={{
                                                color: index === isSelectNavItem ? themeColors.sellerPrimary : 'inherit',
                                                fontWeight: index === isSelectNavItem ? 'bold' : 'inherit'
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Stack>
                    </List>

                    <Divider sx={{ mt: '-2rem', bgcolor: themeColors.borderDividerAndDecs }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.5rem', mt: '30px' }}>
                        <Typography sx={{ fontSize: '16px' }}>Order Date</Typography>
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DatePicker className="filterPicker" views={['month']} onChange={handleChangeMonth} />
                        </LocalizationProvider>


                        <Button href={`${API_BASE_URL}${ApiUrl.EXPORT_EXCEL}?month=${localStorage.getItem("monthFilter")}&accountID=${localStorage.getItem("account-id")}`} target="_blank" size='small' sx={{
                            border: '1px solid #BBBBBF',
                            marginRight: '30px',
                            padding: '1rem 2rem',
                            backgroundColor: themeColors.secondary,
                        }}>
                            Export
                        </Button>

                        {/* <Button size='small' sx={{ border: '1px solid #BBBBBF', mr: '30px' }}>
                            < ArchiveOutlined sx={{ width: '20px', height: '20px' }} />
                        </Button> */}
                    </Box>

                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}>
                        <FormControl
                            sx={{
                                minWidth: '120px',
                                ml: '30px',
                            }}>
                            <Select
                                value={isSelectedSearchItem}
                                onChange={handleChange}
                                displayEmpty
                                size='small'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Order Code'}>Order ID</MenuItem>
                                <MenuItem value={'Buyer Name'}>Buyer Name</MenuItem>
                                <MenuItem value={'Product'}>Product</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ width: '65%' }}>
                            <TextField variant='outlined' placeholder='Search...' size='small' sx={{ width: '100%' }} />
                        </Box>
                        <Button size='small' sx={{
                            border: '1px solid #BBBBBF',
                            mr: '30px',
                        }}>
                            Remove Filter Search
                        </Button>
                    </Box> */}

                    {isSelectNavItem === 0 ? <SellerAllTransaction /> : null}
                    {isSelectNavItem === 1 ? <SellerUnpaidTransaction /> : null}
                    {isSelectNavItem === 2 ? <SellerCompletedTransaction /> : null}
                    {isSelectNavItem === 3 ? <SellerCancelTransaction /> : null}
                    {isSelectNavItem === 4 ? <SellerRefundTransaction /> : null}
                </BoxContainer>
            </div>
        </div>
    )

}

export default SellerTransactionPage