/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Avatar, Typography, TextField, FormControl, MenuItem, Select, SelectChangeEvent, Button, Modal } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import BoxContainer from '../../../../component/Box/Box.Container'
import SellerHeader from '../../../../layouts/Header/Seller/SellerHeader'
import { AssetImages } from '../../../../utils/images'
import './Seller.AddProductStyle.scss'
import { themeColors } from '../../../../themes/schemes/PureLightTheme'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../../../routes'
import { useSelector } from 'react-redux'
import { createProduct } from '../../Seller.Api'

const style = {
    borderRadius: '5px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const SellerAddProductPage: React.FC<{}> = () => {
    const [open, setOpen] = useState(false);
    const listProduct = useSelector((state: any) => state.seller.listProduct)
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [name, nameChange] = useState('');
    const [discount, discountChange] = useState('');
    const [image, imageChange] = useState<string | ArrayBuffer | null>('');
    const [category, categoryChange] = useState('');
    const [desc, descChange] = useState('');
    const [price, priceChange] = useState('');
    const [stock, stockChange] = useState('');
    const [imageProduct, setImageProduct] = useState(null);

    const handleLeaveButtonClick = () => {
        navigate(routes.seller.ProductPage, {
            state: {
                productList: listProduct,
            },
        });
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: SelectChangeEvent) => {
        categoryChange(event.target.value);
    };

    const handleBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileInputChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageProduct(file)

            const reader = new FileReader();

            reader.onloadend = () => {
                imageChange(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };



    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let productData = {
            image: image,
            desc: desc,
            name: name,
            discount: discount,
            category: category,
            price: price,
            stock: stock,
        };
        try {
            await createProduct(productData, imageProduct);
        } catch (error) {
            console.error(error);
        }
        navigate(routes.seller.Root);
    };

    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify(listProduct));
    }, [listProduct])

    useEffect(() => { }, [open, categoryChange, fileInputRef, handleSubmit]);

    return (
        <BoxContainer property='seller-add-product__content'>
            <form onSubmit={handleSubmit}>
                <Box className='seller-add-product__top'>
                    <Box sx={{ position: 'relative' }}>
                        <SellerHeader />
                    </Box>
                    <Link to={routes.seller.Root}>
                        <Avatar
                            src={AssetImages.LOGO}
                            sx={{
                                position: 'absolute',
                                width: '80px',
                                height: '80px',
                                top: '.7rem',
                                left: '45px'
                            }}
                        />
                    </Link>
                </Box>
                <Box className='seller-add-product__container'>
                    <Typography className='seller-add-product__title'>Basic Information</Typography>
                    <Box className='seller-add-product__basic-infor'>
                        <Box className='seller-basic-infor__product-img'>
                            <Box className='seller-basic-infor__title'>
                                <Typography>Product Image</Typography>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>1:1 Image</Typography>
                            </Box>
                            <div onClick={handleBoxClick} className='seller-basic-infor__upload-img' style={{ width: '90px', height: '90px', border: '1px dashed #bbbbbf' }}>
                                {image ? (
                                    <img src={image as string} alt='Uploaded' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <>
                                        <AddPhotoAlternateOutlinedIcon />
                                        <Typography sx={{ fontSize: '14px' }}>Add Image</Typography>
                                    </>
                                )}
                                <input
                                    ref={fileInputRef}
                                    type='file'
                                    style={{ display: 'none' }}
                                    onChange={handleFileInputChange}
                                />
                            </div>
                        </Box>

                        <Box className='seller-basic-infor__product-name'>
                            <Box className='seller-basic-infor__title'>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>Product Name</Typography>
                            </Box>
                            <TextField value={name} onChange={e => nameChange(e.target.value)}
                                className='seller-basic-infor__input' variant='outlined' size='small' required />
                        </Box>

                        <Box className='seller-basic-infor__category'>
                            <Box className='seller-basic-infor__title'>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>Category</Typography>
                            </Box>
                            <FormControl
                                className='seller-basic-infor__input'
                                sx={{
                                    minWidth: '120px',
                                }}>
                                <Select
                                    value={category}
                                    onChange={handleChange}
                                    displayEmpty
                                    size='small'
                                >
                                    <MenuItem value="">
                                        <em onClick={() => categoryChange('')}>None</em>
                                    </MenuItem>
                                    <MenuItem value={`Men's Fashion`}>Men's Fashion</MenuItem>
                                    <MenuItem value={'Electronic Device'}>Electronic Device</MenuItem>
                                    <MenuItem value={'Clock'}>Clock</MenuItem>
                                    <MenuItem value={`Men's shoes`}>Men's shoes</MenuItem>
                                    <MenuItem value={'Household Electrical Appliances'}>Household Electrical Appliances</MenuItem>
                                    <MenuItem value={`Women's Fashion`}>Women's Fashion</MenuItem>
                                    <MenuItem value={'Home & Life'}>Home & Life</MenuItem>
                                    <MenuItem value={'Beauty'}>Beauty</MenuItem>
                                    <MenuItem value={'Health'}>Health</MenuItem>
                                    <MenuItem value={`Women's Accessories & Jewelry`}>Women's Accessories & Jewelry</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box className='seller-basic-infor__discount'>
                            <Box className='seller-basic-infor__title'>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>Discount</Typography>
                            </Box>
                            <TextField value={discount} onChange={e => discountChange(e.target.value)} className='seller-basic-infor__input' variant='outlined' size='small' required />
                        </Box>

                        <Box className='seller-basic-infor__product-desc'>
                            <Box className='seller-basic-infor__title'>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>Product Description</Typography>
                            </Box>
                            <TextField value={desc} onChange={e => descChange(e.target.value)} className='seller-basic-infor__input' variant='outlined' size='small' required />
                        </Box>

                        <Box className='seller-basic-infor__price'>
                            <Box className='seller-basic-infor__title'>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>Price</Typography>
                            </Box>
                            <TextField value={price} onChange={e => priceChange(e.target.value)} className='seller-basic-infor__input' variant='outlined' size='small' required />
                        </Box>

                        <Box className='seller-basic-infor__stock'>
                            <Box className='seller-basic-infor__title'>
                                <Typography sx={{ color: themeColors.red }}>*</Typography>
                                <Typography>Stock</Typography>
                            </Box>
                            <TextField value={stock} onChange={e => stockChange(e.target.value)} className='seller-basic-infor__input' variant='outlined' size='small' required />
                        </Box>
                    </Box>
                    <Box className='seller-add-product__btn'>
                        <Button
                            onClick={handleOpen}
                            sx={{
                                width: '12%',
                                color: themeColors.white,
                                bgcolor: themeColors.dark_gray,
                                '&:hover': {
                                    color: themeColors.black
                                }
                            }}>
                            Cancel
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: themeColors.warning }}>
                                    Attention
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '16px' }}>
                                    Are you sure want to leave?
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', pt: '20px' }}>
                                    <Button sx={{
                                        color: themeColors.white,
                                        bgcolor: themeColors.dark_gray,
                                        '&:hover': {
                                            color: themeColors.black
                                        }
                                    }}
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        sx={{
                                            color: themeColors.white,
                                            bgcolor: themeColors.avatar,
                                            '&:hover': {
                                                color: themeColors.black
                                            }
                                        }}
                                        onClick={handleLeaveButtonClick}
                                    >
                                        Leave
                                    </Button>
                                </Box>
                            </Box>
                        </Modal>
                        <Button
                            type="submit"
                            sx={{
                                width: '12%',
                                color: themeColors.white,
                                bgcolor: themeColors.primary,
                                mr: '30px',
                                '&:hover': {
                                    color: themeColors.black
                                }
                            }}
                        >
                            Add
                        </Button>

                    </Box>
                </Box>
            </form>
        </BoxContainer>
    )
}

export default SellerAddProductPage