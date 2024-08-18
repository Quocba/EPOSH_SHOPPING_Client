import React from 'react'
import './Seller.TwoStarsStyle.scss'
import BoxContainer from '../../../../../../component/Box/Box.Container'
import { Box, Typography } from '@mui/material'

const SellerTwoStars: React.FC<{}> = () => {
    return (
        <BoxContainer property='seller-review__two-stars'>
            <Box className='two-stars__rows'>
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
                        2 Stars
                    </Box>
                </Box>
                <Box className='right'>
                    <Typography className='user-review'>
                        The product was average; it had some useful features, but it also had its drawbacks. The performance was satisfactory, but the build quality seemed subpar. Overall, a mediocre experience.
                    </Typography>
                </Box>
            </Box>
        </BoxContainer>
    )
}

export default SellerTwoStars
