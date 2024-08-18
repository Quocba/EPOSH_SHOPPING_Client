import React from 'react'
import './Seller.FourStarsStyle.scss'
import BoxContainer from '../../../../../../component/Box/Box.Container'
import { Box, Typography } from '@mui/material'

const SellerFourStars: React.FC<{}> = () => {
    return (
        <BoxContainer property='seller-review__four-stars'>
            <Box className='four-stars__rows'>
                <Box className='left'>
                    <Box className='product-information'>
                        <img
                            className='product-img'
                            alt=""
                            src="https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg"
                        />
                        <Typography className='product-name'>
                            Mèo Méo Meo Con Mòe
                        </Typography>
                    </Box>
                    <Box className='rating'>
                        4 Stars
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        The product is excellent with its impressive features and reliable performance. It meets my expectations and serves its purpose well. I'm deducting one star due to the slightly high price. Overall, a great choice!
                    </Typography>
                </Box>
            </Box>
        </BoxContainer>
    )
}

export default SellerFourStars
