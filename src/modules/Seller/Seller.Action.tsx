import { SellerActions } from "../../redux/actions";
export interface ChangeSidebarAction {
  type: SellerActions.CHANGE_SIDEBAR;
  payload: any;
}

export interface ChangeSubSidebarAction {
  type: SellerActions.CHANGE_SUB_SIDEBAR;
  payload: any;
}

export interface ChangeVoucherAction {
  type: SellerActions.CHANGE_VOUCHER;
  payload: any;
}

export interface SaveListProductAction {
  type: SellerActions.SAVE_LIST_PRODUCT;
  payload: any;
}

export interface SaveListTransactionAction {
  type: SellerActions.SAVE_LIST_TRANSACTION;
  payload: any;
}

export interface SaveListVoucherAction {
  type: SellerActions.SAVE_LIST_VOUCHER;
  payload: any;
}

export interface SaveListCategoryAction {
  type: SellerActions.SAVE_LIST_CATEGORY;
  payload: any;
}

export interface SaveListProfileAction {
  type: SellerActions.SAVE_LIST_PROFILE;
  payload: any;
}

export interface SaveListChartAction {
  type: SellerActions.SAVE_LIST_CHART;
  payload: any;
}

export interface SaveListChartFilterMonthAction {
  type: SellerActions.SAVE_LIST_CHART_FILTER_MONTH;
  payload: any;
}

export interface SaveListTransactionFilterMonthAction {
  type: SellerActions.SAVE_LIST_TRANSACTION_FILTER_MONTH;
  payload: any;
}

export type SellerAction =
  | ChangeSidebarAction
  | ChangeSubSidebarAction
  | ChangeVoucherAction
  | SaveListProductAction
  | SaveListTransactionAction
  | SaveListVoucherAction
  | SaveListCategoryAction
  | SaveListProfileAction
  | SaveListChartAction
  | SaveListTransactionFilterMonthAction
  | SaveListChartFilterMonthAction;

export const changeSidebar = (index: any): ChangeSidebarAction => {
  return {
    type: SellerActions.CHANGE_SIDEBAR,
    payload: index,
  };
};

export const saveListChartFilterMonth = (index: any): SaveListChartFilterMonthAction => {
  return {
    type: SellerActions.SAVE_LIST_CHART_FILTER_MONTH,
    payload: index,
  };
};

export const changeSubSidebar = (index: any): ChangeSubSidebarAction => {
  return {
    type: SellerActions.CHANGE_SUB_SIDEBAR,
    payload: index,
  };
};

export const changeVoucher = (voucher: any): ChangeVoucherAction => {
  return {
    type: SellerActions.CHANGE_VOUCHER,
    payload: voucher,
  };
};

export const saveListProduct = (listProduct: any): SaveListProductAction => {
  return {
    type: SellerActions.SAVE_LIST_PRODUCT,
    payload: listProduct,
  };
};

export const saveListTransaction = (
  listTransaction: any
): SaveListTransactionAction => {
  return {
    type: SellerActions.SAVE_LIST_TRANSACTION,
    payload: listTransaction,
  };
};

export const saveListVoucher = (listVoucher: any): SaveListVoucherAction => {
  return {
    type: SellerActions.SAVE_LIST_VOUCHER,
    payload: listVoucher,
  };
};

export const saveListCategory = (listCategory: any): SaveListCategoryAction => {
  return {
    type: SellerActions.SAVE_LIST_CATEGORY,
    payload: listCategory,
  };
};

export const saveListProfile = (listProfile: any): SaveListProfileAction => {
  return {
    type: SellerActions.SAVE_LIST_PROFILE,
    payload: listProfile,
  };
};

export const saveListChart = (listChart: any): SaveListChartAction => {
  return {
    type: SellerActions.SAVE_LIST_CHART,
    payload: listChart,
  };
};

export const saveListTransactionFilterMonth = (index: any): SaveListTransactionFilterMonthAction => {
  return {
    type: SellerActions.SAVE_LIST_TRANSACTION_FILTER_MONTH,
    payload: index,
  };
};