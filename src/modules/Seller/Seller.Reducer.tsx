import { SellerActions } from "../../redux/actions";
export interface SellerState {
  indexSidebar: any | 0;
  indexSubSidebar: any | 0;
  voucher: any | {};
  listProduct: any | [];
  listTransaction: any | [];
  listVoucher: any | [];
  listCategory: any | [];
  listProfile: any | [];
  listChart: any | [];
  listChartFilterMonth: any | [];
  listTransactionFilterMonth: any | [];
}
const initialState = {
  indexSidebar: 0,
  indexSubSidebar: 0,
  voucher: {},
  listProduct: [],
  listTransaction: [],
  listVoucher: [],
  listCategory: [],
  listProfile: [],
  listChart: [],
  listChartFilterMonth: [],
  listTransactionFilterMonth: [],
};
function sellerReducer(state = initialState, action: any) {
  switch (action.type) {
    case SellerActions.CHANGE_SIDEBAR:
      return {
        ...state,
        indexSidebar: action.payload,
      };
    case SellerActions.CHANGE_SUB_SIDEBAR:
      return {
        ...state,
        indexSubSidebar: action.payload,
      };
    case SellerActions.CHANGE_VOUCHER:
      return {
        ...state,
        voucher: action.payload,
      };
    case SellerActions.SAVE_LIST_PRODUCT:
      return {
        ...state,
        listProduct: action.payload,
      };
    case SellerActions.SAVE_LIST_TRANSACTION:
      return {
        ...state,
        listTransaction: action.payload,
      };
    case SellerActions.SAVE_LIST_VOUCHER:
      return {
        ...state,
        listVoucher: action.payload,
      };
    case SellerActions.SAVE_LIST_CATEGORY:
      return {
        ...state,
        listCategory: action.payload,
      };
    case SellerActions.SAVE_LIST_PROFILE:
      return {
        ...state,
        listProfile: action.payload,
      };
    case SellerActions.SAVE_LIST_CHART:
      return {
        ...state,
        listChart: action.payload,
      };
    case SellerActions.SAVE_LIST_CHART_FILTER_MONTH:
      return {
        ...state,
        listChartFilterMonth: action.payload,
      };
    case SellerActions.SAVE_LIST_TRANSACTION_FILTER_MONTH:
      return {
        ...state,
        listTransactionFilterMonth: action.payload,
      };
    default:
      return state;
  }
}

export default sellerReducer;
