/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import SellerProductPage from './Seller.ProductPage';
import { getAllProductByShopId } from '../Seller.Api';
import { useDispatch } from 'react-redux';

const SellerProductContainer: React.FC<{}> = () => {
    const dispatch = useDispatch()
    const shopID = localStorage.getItem("shop_id")

    // ========== get all product by shopid ========== //
    const init = async () => {
        await getAllProductByShopId(shopID, dispatch)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <SellerProductPage />
    );
};

export default SellerProductContainer;
