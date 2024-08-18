import { HomeActions } from "../../redux/actions";

export interface SaveListProductAction {
  type: HomeActions.SAVE_LIST_PRODUCT;
  payload: any;
}

export interface SaveListCategoryAction {
  type: HomeActions.SAVE_LIST_CATEGORY;
  payload: any;
}

export interface SaveCartDataAction {
  type: HomeActions.SAVE_CART_DATA;
  payload: any;
}

export interface SaveSelectedProducts {
  type: HomeActions.SAVE_SELECTED_PRODUCTS;
  payload: any;
}

export type HomeAction =
  | SaveListProductAction
  | SaveListCategoryAction
  | SaveCartDataAction
  | SaveSelectedProducts;

export const saveListProduct = (listProduct: any): SaveListProductAction => {
  return {
    type: HomeActions.SAVE_LIST_PRODUCT,
    payload: listProduct,
  };
};

export const saveListCategory = (listCategory: any): SaveListCategoryAction => {
  return {
    type: HomeActions.SAVE_LIST_CATEGORY,
    payload: listCategory,
  };
};

export const saveCartData = (cartData: any): SaveCartDataAction => {
  return {
    type: HomeActions.SAVE_CART_DATA,
    payload: cartData,
  };
};

export const saveSelectedProducts = (selectedProducts: any): SaveSelectedProducts => ({
  type: HomeActions.SAVE_SELECTED_PRODUCTS,
  payload: selectedProducts,
});
