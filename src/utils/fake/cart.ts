export const cartDataFake = {
    id: 1,
    account_id: 1,
    total: 0,
    orders: [
        {
            id: 1,
            shop_id: 1,
            cart_id: 1,
            total: 40,
            status: 0,
            sub_orders: [
                {
                    product_id: 1,
                    order_id: 1,
                    total: 40,
                    quantity: 1,
                    status: 0
                }
            ]
        },
        {
            id: 2,
            shop_id: 2,
            cart_id: 1,
            total: 80,
            status: 0,
            sub_orders: [
                {
                    product_id: 2,
                    order_id: 2,
                    total: 40,
                    quantity: 1,
                    status: 0
                },
                {
                    product_id: 3,
                    order_id: 2,
                    total: 40,
                    quantity: 1,
                    status: 0
                }
            ]
        },
        {
            id: 3,
            shop_id: 3,
            cart_id: 1,
            total: 120,
            status: 0,
            sub_orders: [
                {
                    product_id: 4,
                    order_id: 3,
                    total: 40,
                    quantity: 1,
                    status: 0
                },
                {
                    product_id: 5,
                    order_id: 3,
                    total: 40,
                    quantity: 1,
                    status: 0
                },
                {
                    product_id: 6,
                    order_id: 3,
                    total: 40,
                    quantity: 1,
                    status: 0
                }
            ]
        }
    ]
};
