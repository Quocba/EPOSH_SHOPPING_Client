// Define your API base URL
export const API_BASE_URL =
  "https://eposh-server-production.up.railway.app/api/v2/";
export const ApiUrl = {
  //================== END USER ================== //
  // PRODUCT
  GET_ALL_PRODUCT: 'user/product/get-all',
  GET_PRODUCT_BY_ID: 'user/product/get-by-id',
  SEARCH_PRODUCT_BY_NAME: 'user/product/search',
  GET_PRODUCT_BY_CATEGORY_NAME: 'user/product/search',
  // BANNER
  GET_ALL_BANNER: "user/banner/get-all",
  // CART
  GET_CART_BY_ACCOUNT_ID: "user/cart/get-cart-by-account-id",
  UPDATE_CART: "user/cart/update",
  CREATE_SUB_ORDER: "user/cart/create-sub-order",
  UPDATE_SUB_ORDER: "user/cart/update-sub-order",
  DELETE_SUB_ORDER: "user/sub-order/delete",
  CREATE_TRANSACTION: "user/transaction/create",
  UPDATE_QUANTITY: "user/sub-order/increaseanddecrease",
  // SHOP
  SEARCH_SHOP_BY_NAME: 'user/shop/search-by-name',
  GET_SHOP_BY_PRODUCT_ID: 'user/shop/get-by-product-id',
  GET_SHOP_BY_ID: 'user/shop/get-by-id',
  GET_ALL_CATEGORY: 'user/category/get-all',
  GET_CATEGORY_BY_SHOP_ID: 'user/category/get-by-shopId',
  ADD_PRODUCT_TO_CART: 'user/sub-order/create',
  //PROFILE
  GET_PROFILE_BY_ACCOUNT_ID: 'user/account-profile/get-profile-by-ID',
  UPDATE_PROFILE: 'user/account-profile/update',
  ADD_COLUMN: '/addColumn',
  USER_GET_ALL_TRANSACTION: "user/transaction/get-by-account",
  // VOUCHER
  GET_VOUCHER_BY_ID: "user/voucher/get-by-id",
  USER_GET_VOUCHER_BY_SHOP_ID: "user/voucher/get-by-shop-id",
  // ADDRESS
  CREATE_ADDRESS: 'user/address-deliver/create',


  //================== SELLER ================== //
  // TRANSACTION
  SEARCH_BY_SHOP_ID: "seller/transaction/get-by-shop-id",
  GET_ALL_TRANSACTION_BY_SHOP_ID: "seller/transaction/get-by-shop-id",
  GET_ALL_TRANSACTION_BY_MONTH: "seller/transaction/get-transaction-by-month",
  EXPORT_EXCEL: "seller/transaction/export-excel",
  GET_DATA_CHART: "seller/transaction/get-data-chart",
  // PRODUCT
  GET_ALL_PRODUCT_BY_SHOP_ID: "seller/product/get-by-shop-id",
  POST_CREATE_PRODUCT: "seller/product/create-product",
  SEARCH_PRODUCT_BY_NAME_SELLER: "seller/product/search-by-name",
  DELETE_PRODUCT: "seller/product/delete",
  // VOUCHER
  CREATE_VOUCHER: "seller/voucher/create-voucher",
  GET_ALL_VOUCHER_BY_SHOP_ID: "seller/voucher/get-by-shop-id",
  // SHOP
  GET_SHOP_PROFILE: "seller/shop/get-by-account-id",
  UPDATE_SHOP: "seller/shop/update",
  // CATEGORY
  GET_ALL_CATEGORIES: "seller/category/get-all",
  CREATE_CATEGORY: "seller/category/create",
  UPDATE_CATEGORY: "seller/category/update",

  //================== ADMIN ================== //
  // ===== ACCOUNT =====
  GET_ALL_ACCOUNT: "admin/account/get-all",
  FILTER_ACCOUNT: "admin/account/filter",
  SEARCH_ACCOUNT: "admin/account/search",
  // ===== CATEGORY =====
  GET_ALL_CATEGORY_ADMIN: "admin/category/get-all",
  GET_CATEGORY_BY_STATUS: "admin/category/get-by-status",
  GET_TOTAL_PRODUCT_IN_CATEGORY: "admin/category/get-total-product",
  GET_CATEGORY_RATE: "admin/category/get-rate",
  SET_CATEGORY_STATUS: "admin/category/comfirm-status",
  SEARCH_CATEGORY_NAME: "admin/category/get-by-name",
  // ===== SHOP =====
  GET_ALL_SHOP: "admin/shop/get-all",
  GET_VOUCHER_BY_SHOP_ID: "admin/voucher/get-by-shop-id",
  SET_VOUCHER_CONFIRM_STATUS: "admin/voucher/comfirm-voucher",
  SET_VOUCHER_REJECT_STATUS: "admin/voucher/reject",
  SEARCH_SHOP_NAME: "admin/shop/search-by-name",
  CONFIRM_VOUCHER: "admin/voucher",
  // ===== TRANSACTION =====
  GET_ALL_TRANSACTION: "admin/transaction/get-all",
  SET_TRANSACTION_STATUS: "admin/transaction/update-status",
  //================== AUTH ================== //
  SIGN_IN: "auth/sign-in",
  SIGN_UP: "auth/sign-up",
  SIGN_OUT: "auth/sign-out",
  CHANGE_PASSWORD: "auth/change-password",
};
