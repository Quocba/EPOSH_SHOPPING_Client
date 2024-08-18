/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Box, Typography, TextField, Button, ButtonProps, FormControl, MenuItem, Select } from '@mui/material'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './Modal.EditProductStyle.scss';
import { themeColors } from '../../../../../themes/schemes/PureLightTheme';
import { updateProduct } from '../../../Seller.Api';

const style = {
    borderRadius: '5px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

type ModalData = {
    children: ReactNode;
    data: any;
};


const ModalEditProduct: React.FC<ModalData> = ({ children, data }) => {

    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageProduct, setImageProduct] = useState(null);
    const [name, nameChange] = useState('');
    const [discount, discountChange] = useState('');
    const [image, imageChange] = useState<string | ArrayBuffer | null>('');
    const [category, categoryChange] = useState('');
    const [desc, descChange] = useState('');
    const [price, priceChange] = useState('');
    const [stock, stockChange] = useState('');
    const id = data.id;

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

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

    const handleUpdateProduct = async (event: any) => {
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
            await updateProduct(id, productData, imageProduct);
            console.log(id);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => { }, [handleUpdateProduct, isOpen, fileInputRef, data])

    return (
        <div>
            {React.cloneElement(children as React.ReactElement<ButtonProps>, {
                onClick: handleOpen,
            })
            }
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: themeColors.black }}>
                        Edit Product
                    </Typography>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Description
                        </Typography>
                        <TextField className='modal-modal-input' variant='outlined' size='small' defaultValue={data.id || ''} />
                    </Box>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Image
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '3rem', mt: '20px' }}>
                            <img src={image as string} alt='product-img' style={{
                                width: '40px',
                                height: '40px'
                            }} />
                            <Button
                                onClick={handleBoxClick}
                                sx={{
                                    bgcolor: themeColors.dark_gray,
                                    color: themeColors.white,
                                    fontSize: '12px',
                                    '&:hover': {
                                        bgcolor: themeColors.primary
                                    }
                                }}>
                                Upload File
                                <input
                                    ref={fileInputRef}
                                    type='file'
                                    style={{ display: 'none' }}
                                    onChange={handleFileInputChange}
                                />
                            </Button>
                        </Box>
                    </Box>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Name
                        </Typography>
                        <TextField className='modal-modal-input' variant='outlined' size='small' defaultValue={data.name || ''} onChange={e => nameChange(e.target.value)} />
                    </Box>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Category
                        </Typography>
                        <FormControl className='modal-modal-input'>
                            <Select
                                value={category}
                                onChange={e => categoryChange(e.target.value)}
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
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Description
                        </Typography>
                        <TextField className='modal-modal-input' variant='outlined' size='small' defaultValue={data.description || ''} onChange={e => descChange(e.target.value)} />
                    </Box>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Discount
                        </Typography>
                        <TextField className='modal-modal-input' variant='outlined' size='small' defaultValue={data.discount || ''} onChange={e => discountChange(e.target.value)} />
                    </Box>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Price
                        </Typography>
                        <TextField className='modal-modal-input' variant='outlined' size='small' defaultValue={data.price || ''} onChange={e => priceChange(e.target.value)} />
                    </Box>
                    <Box className='modal-modal-infor'>
                        <Typography className="modal-modal-label">
                            Stock
                        </Typography>
                        <TextField className='modal-modal-input' variant='outlined' size='small' defaultValue={data.stock || ''} onChange={e => stockChange(e.target.value)} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', pt: '30px' }}>
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
                            onClick={handleUpdateProduct}
                            sx={{
                                color: themeColors.white,
                                bgcolor: themeColors.avatar,
                                '&:hover': {
                                    color: themeColors.black
                                }
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div >
    )
}

export default ModalEditProduct
