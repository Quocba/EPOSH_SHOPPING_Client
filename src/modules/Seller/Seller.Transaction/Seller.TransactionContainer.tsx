/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import SellerTransactionPage from './Seller.TransactionPage';
import { getAllTransactionByShopId } from '../Seller.Api';
import { useDispatch } from 'react-redux';

const SellerTransactionContainer: React.FC<{}> = () => {
    const dispatch = useDispatch()

    const transaction = async () => {
        await getAllTransactionByShopId(dispatch)
    }

    useEffect(() => {
        transaction()
    }, [])

    return (
        <SellerTransactionPage />
    );
};

export default SellerTransactionContainer;