/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import DrawerComponent from '../../../../layouts/Drawer/DrawerSeller/DrawerComponent'
import './Seller.CatalogStyle.scss'
import SellerHeader from '../../../../layouts/Header/Seller/SellerHeader'
import BoxContainer from '../../../../component/Box/Box.Container'
import { Box, Button, Grid, Modal, Pagination, Stack, TextField, Typography } from '@mui/material'
import { AddOutlined, EditOutlined } from '@mui/icons-material'
import { themeColors } from '../../../../themes/schemes/PureLightTheme'
import { addCategory, getAllCategory } from '../../Seller.Api'
import ModalEditCategory from '../../Modal/Modal.Category/Modal.EditCategory'
import { useSelector } from 'react-redux'
import { routes } from '../../../../routes'
import { useNavigate } from 'react-router-dom'
// import { filterProductWithCategoryId } from '../../../../utils/sellerHelper'

interface SellerTableProps {
    data: any[];
}

const style = {
    borderRadius: '5px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SellerCatalogPage: React.FC<SellerTableProps> = ({
    data: initialData
}) => {
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCategory, setTotalCategory] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [name, nameChange] = useState('');
    const [imageCategory, setImageCategory] = useState(null);
    const [image, imageChange] = useState<string | ArrayBuffer | null>('');
    const shop_id = localStorage.getItem('shop_id');
    // const listProduct = useSelector((state: any) => state.seller.listProduct);

    const categoryPerPage = 10;
    const indexOfLastCategory = currentPage * categoryPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoryPerPage;
    const currentCategory = data.slice(indexOfFirstCategory, indexOfLastCategory);
    const totalPageCategory = Math.ceil(data?.length / categoryPerPage);

    const [isOpenAdd, setOpenAdd] = useState(false);
    const [isOpenEdit, setOpenEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);

    const navigate = useNavigate();

    const getTotalCategory = async () => {
        try {
            const listCategoryAPI = await getAllCategory(shop_id);
            setTotalCategory(listCategoryAPI.length);
        } catch (error) {
            console.error('Error getting total Category:', error);
        }
    };

    const init = async () => {
        await getTotalCategory()
        const listCategoryAPI = await getAllCategory(shop_id)
        console.log(listCategoryAPI);
        setData(listCategoryAPI)
    }

    const paginate = (event: any, value: any) => {
        event.preventDefault();
        setCurrentPage(value);
        document.documentElement.scrollTop = 100;
    }

    const handleOpenEdit = (index: number) => {
        setEditIndex(index);
        setOpenEdit(true);
    };

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileInputChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageCategory(file)

            const reader = new FileReader();

            reader.onloadend = () => {
                imageChange(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleNameChange = (e: any) => {
        const categoryName = e.target.value;
        nameChange(categoryName);
    }

    const handleAddCategory = async (e: any) => {
        let data = {
            name: name,
            image: image,
        };
        try {
            await addCategory(data, imageCategory);
        } catch (error) {
            console.error(error);
        }
        navigate(routes.seller.Root);
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => { }, [isOpenAdd, data]);

    return (
        <div className='seller-catalog__container'>
            <DrawerComponent />
            <div className='seller-catalog-right__content'>
                <SellerHeader />
                <BoxContainer property='seller-catalog__top-content'>
                    <Box className='seller-catalog__top'>
                        <Typography className='seller-catalog__title'>Shop Categories</Typography>
                        <Button
                            onClick={handleOpenAdd}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '0 30px 0 1.4rem',
                                color: themeColors.black,
                                border: '1px solid rgba(0,0,0,0.2)',
                                fontSize: '14px',
                                paddingLeft: '6px',
                                paddingRight: '6px',
                                height: '40px',
                                width: '18%',
                                textAlign: 'center',
                            }}
                        >
                            <AddOutlined sx={{ mr: '10px' }} />
                            Add New Category
                        </Button>
                        <Modal
                            open={isOpenAdd}
                            onClose={handleCloseAdd}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: themeColors.black }}>
                                    Add Category
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: '30px', fontSize: '16px' }}>
                                    Category Image
                                </Typography>
                                <Box sx={{ display: 'flex', gap: '3rem', mt: '30px' }}>
                                    <img src={imageCategory || ''} alt='category-img' style={{
                                        width: '40px',
                                        height: '40px'
                                    }} />
                                    <Button
                                        onClick={handleBoxClick}
                                        sx={{
                                            bgcolor: themeColors.avatar,
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
                                <Typography id="modal-modal-description" sx={{ mt: '30px', fontSize: '16px' }}>
                                    Category Name
                                </Typography>
                                <TextField value={name || ''} onChange={handleNameChange} variant='outlined' size='small' sx={{ width: '100%', mt: '30px' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', pt: '30px' }}>
                                    <Button sx={{
                                        color: themeColors.white,
                                        bgcolor: themeColors.dark_gray,
                                        padding: '10px 30px',
                                        '&:hover': {
                                            color: themeColors.black
                                        }
                                    }}
                                        onClick={handleCloseAdd}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={handleAddCategory}
                                        sx={{
                                            color: themeColors.white,
                                            bgcolor: themeColors.primary,
                                            padding: '10px 30px',
                                            '&:hover': {
                                                color: themeColors.black
                                            }
                                        }}
                                    >
                                        Confirm
                                    </Button>
                                </Box>
                            </Box>
                        </Modal>
                    </Box>

                    <Typography sx={{ m: '0 0 30px 30px', color: 'black', fontSize: '20px', fontWeight: 'bold' }}>{totalCategory} Category</Typography>

                    <Box className='seller-catalog__bottom'>
                        <Box className='seller-list-catalog__top' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                            borderRadius: '5px 5px 0 0',
                        }}>
                            <Box className='list-catalog__left'>
                                <Typography sx={{ color: themeColors.black }}>Category Display Name</Typography>
                            </Box>
                            <Box className='list-catalog__right'>
                                <Typography sx={{ color: themeColors.black, width: '70px' }}>Product(s)</Typography>
                                <Typography sx={{ color: themeColors.black, width: '50px' }}>Status</Typography>
                                <Typography sx={{ color: themeColors.black, mr: '30px', width: '64px', textAlign: 'center' }}>Actions</Typography>
                            </Box>
                        </Box>

                        <Box className='seller-list-catalog__bottom' sx={{
                            border: '1px solid rgba(0,0,0,.2)',
                        }}>
                            {currentCategory?.map((data, index) => (
                                <Box className='list-catalog__rows' key={index}>
                                    <Box className='list-catalog__name-image'>
                                        <img className='img' src={data.image} alt='Category' />
                                        <Typography className='name'>{data?.name}</Typography>
                                    </Box>
                                    <Box className='list-catalog__product-action'>
                                        <Typography className='product'>
                                            {/* {filterProductWithCategoryId(listProduct?.length, data.category_id)} */}
                                            {data?.total}
                                        </Typography>
                                        <Typography className='status' sx={{
                                            color: data.status === '1' ? themeColors.primary : themeColors.red,
                                            fontWeight: 'bold'
                                        }}>
                                            {data.status === '1' ? 'Approved' : 'Refuse'}
                                        </Typography>
                                        <Box className='actions' sx={{ mr: '30px', display: 'flex', gap: '1rem' }}>
                                            <ModalEditCategory data={{ id: data.id, name: data.name }}>
                                                <Button onClick={() => handleOpenEdit(index)} size='small' sx={{
                                                    '&:hover': {
                                                        bgcolor: themeColors.warning
                                                    }
                                                }}>
                                                    <EditOutlined />
                                                </Button>
                                            </ModalEditCategory>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Stack mt="100px" pb="30px" alignItems="flex-end">
                        {data?.length > 1 && (
                            <Pagination
                                color="standard"
                                shape="rounded"
                                defaultPage={1}
                                count={totalPageCategory}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                            />
                        )}
                    </Stack>
                    <Grid item xs={6} sx={{ p: "0 0 30px 30px" }}>
                        <label>
                            <b>
                                Showing {currentPage} of {totalPageCategory}{" "}
                                {totalPageCategory > 1 ? "pages" : "page"}
                            </b>
                        </label>
                    </Grid>
                </BoxContainer>
            </div>
        </div>
    )
}

export default SellerCatalogPage
