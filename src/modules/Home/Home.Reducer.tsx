import { HomeActions } from "../../redux/actions";

export interface HomeState {
  listProduct: any | [];
  listCategory: any | [];
  cartData: any | {};
   selectedProducts: any | [],
}

const initialState = {
  listProduct: [],
  listCategory: [],
  cartData: {
    id: 1,
    orders: [
      {
        id: 1,
        sub_orders: [
          {
            id: 1,
            product_id: 1
          }
        ]
      }
    ]
  },
  selectedProducts: [],
};

function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case HomeActions.SAVE_LIST_PRODUCT:
      return {
        ...state,
        listProduct: action.payload,
      };
    case HomeActions.SAVE_LIST_CATEGORY:
      return {
        ...state,
        listCategory: action.payload,
      };
    case HomeActions.SAVE_CART_DATA:
      return {
        ...state,
        cartData: action.payload,
      };
      case HomeActions.SAVE_SELECTED_PRODUCTS:
        return {
          ...state,
          selectedProducts: action.payload,
        };

    default:
      return state;
  }
}

export default homeReducer;
