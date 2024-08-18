import React, { useEffect, useState } from 'react'
import './Seller.ProductStyle.scss'
import DrawerComponent from '../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import SellerHeader from '../../../layouts/Header/Seller/SellerHeader'
import BoxContainer from '../../../component/Box/Box.Container'
import { Box, Button, Divider, FormControl, List, ListItem, ListItemButton, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import { themeColors } from '../../../themes/schemes/PureLightTheme'
import SellerAllProduct from './Seller.ProductList/Seller.AllProducts/Seller.AllProduct'
import SellerLiveProduct from './Seller.ProductList/Seller.LiveProducts/Seller.LiveProduct'
import SellerSoldOutProduct from './Seller.ProductList/Seller.SoldOutProducts/Seller.SoldOutProduct'
import { SearchOutlined } from '@mui/icons-material'
import SellerHiddenProduct from './Seller.ProductList/Seller.HiddenProduct/Seller.HiddenProduct'
import { getAllProductByShopId, searchProduct } from '../Seller.Api'
import { useDispatch, useSelector } from 'react-redux'
import { saveListProduct } from '../Seller.Action'

const SellerProductPage: React.FC<{}> = () => {
    const dispatch = useDispatch()
    const navItems = ['All', 'Live', 'Sold Out', 'Hidden']
    const listProduct = useSelector((state: any) => state.seller.listProduct)

    const [isSelectNavItem, setSelectNavItem] = useState(0);
    const [isSelectedSearchItem, setSelectedSearchItem] = useState('');
    const [searchKey, setSearchKey] = useState('');

    const handleNavItemsClick = (index: number) => {
        setSelectNavItem(index);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedSearchItem(event.target.value);
    };

    const handleSearchProduct = async () => {
        const listProductAfterSearch = await searchProduct(searchKey)
        dispatch(saveListProduct(listProductAfterSearch))
    };

    const handleResetFiler = async () => {
        setSearchKey("")
        await getAllProductByShopId("1", dispatch)
    }

    useEffect(() => { }, [isSelectNavItem, isSelectedSearchItem, searchKey, listProduct]);
    return (
        <div className='seller-product__container'>
            <DrawerComponent />
            <div className='seller-product-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-product__top-content'>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', p: '30px 0' }}>
                        <FormControl
                            sx={{
                                minWidth: '135px',
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
                                <MenuItem value={'Product Name'}>Product Name</MenuItem>
                                <MenuItem value={'Category'}>Category</MenuItem>
                                <MenuItem value={'Item ID'}>Item ID</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField variant='outlined' placeholder='Search...' size='small' sx={{ width: '65%', position: 'relative' }} value={searchKey} onChange={e => setSearchKey(e.target.value)} />
                        <Button className='seller-shop-review__btn-search' onClick={handleSearchProduct} size='small' sx={{
                            position: 'absolute',
                            right: '15.2rem',
                            margin: '0 2px 0 30px',
                            color: themeColors.white,
                            backgroundColor: themeColors.primary,
                            border: '1px solid rgba(0,0,0,0.2)',
                            fontSize: '15px',
                            padding: '6px 12px',
                            // borderRadius: '10px',
                            "&:hover": {
                                backgroundColor: themeColors.sellerPrimary,
                            },
                        }}>
                            <SearchOutlined />
                        </Button>
                        <Button size='small' onClick={handleResetFiler} sx={{
                            border: '1px solid rgba(0,0,0,0.2)',
                            mr: '30px',
                            ml: '8px',
                            fontSize: '13px'
                        }}>
                            Remove Filter Search
                        </Button>
                    </Box>

                </BoxContainer>

                <BoxContainer property='seller-product__bottom-content'>
                    <List className='seller-product__nav--items' disablePadding>
                        <Stack direction='row'>
                            {navItems.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemButton
                                        onClick={() => handleNavItemsClick(index)}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '14px', width: '4rem', lineHeight: '30px', textAlign: 'center',
                                                color: index === isSelectNavItem ? themeColors.primary : 'inherit',
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

                    <Divider sx={{ mt: '-1rem' }} />

                    {isSelectNavItem === 0 ? <SellerAllProduct /> : null}
                    {isSelectNavItem === 1 ? <SellerLiveProduct /> : null}
                    {isSelectNavItem === 2 ? <SellerSoldOutProduct /> : null}
                    {isSelectNavItem === 3 ? <SellerHiddenProduct /> : null}
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerProductPage