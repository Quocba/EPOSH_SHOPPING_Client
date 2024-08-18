/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Box, Typography, TextField, Button, ButtonProps } from '@mui/material'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { themeColors } from '../../../../themes/schemes/PureLightTheme'
import { updateCategory } from '../../Seller.Api';

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

type ModalData = {
    children: ReactNode;
    data: any;
};


const ModalEditCategory: React.FC<ModalData> = ({ children, data }) => {

    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageCategory, setImageCategory] = useState(null);
    const [image, imageChange] = useState<string | ArrayBuffer | null>('');
    const [name, nameChange] = useState('');
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
            setImageCategory(file)

            const reader = new FileReader();

            reader.onloadend = () => {
                imageChange(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleUpdateCategory = async (e: any) => {
        let data = {
            name: name,
            image: image,
        };
        try {
            await updateCategory(id, data, imageCategory);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { }, [handleUpdateCategory, isOpen, fileInputRef, data])

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
                        Edit Category
                    </Typography>
                    <Typography id="modal-modal-name" sx={{ mt: '30px', fontSize: '16px' }}>
                        Category Image
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '3rem', mt: '30px' }}>
                        <img src={image as string} alt='category-img' style={{
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
                    <Typography id="modal-modal-name" sx={{ mt: '30px', fontSize: '16px' }}>
                        Category Name
                    </Typography>
                    <TextField variant='outlined' size='small' sx={{ width: '100%', m: '30px 0' }} defaultValue={data.name || ''} onChange={e => nameChange(e.target.value)} />
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
                            onClick={handleUpdateCategory}
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

export default ModalEditCategory
