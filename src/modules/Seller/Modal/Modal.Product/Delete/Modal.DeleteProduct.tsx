import { Modal, Box, Typography, Button, ButtonProps } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import { deleteProduct } from '../../../Seller.Api';
import { themeColors } from '../../../../../themes/schemes/PureLightTheme';

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
    productID: 0
};


const ModalDeleteProduct: React.FC<ModalData> = ({ children, productID }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleDelete = async () => {
        const deleteStatusResponse = await deleteProduct(productID)
        if (deleteStatusResponse) {
            console.log("delete success");
        } else {
            console.log("delete fail");
        }
        setIsOpen(false)
    }

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
                    <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ color: themeColors.warning }}>
                        Attention
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '16px' }}>
                        Are you sure to delete this product ?
                    </Typography>
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
                            onClick={handleDelete}
                            sx={{
                                color: themeColors.white,
                                bgcolor: themeColors.avatar,
                                '&:hover': {
                                    color: themeColors.black
                                }
                            }}
                        >
                            Yes
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalDeleteProduct