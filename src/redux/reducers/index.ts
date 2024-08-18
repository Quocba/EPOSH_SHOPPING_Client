import { combineReducers } from "redux";
import homeReducer, { HomeState } from "../../modules/Home/Home.Reducer";
import sellerReducer, { SellerState } from "../../modules/Seller/Seller.Reducer";
import authReducer, { AuthState } from "../../modules/Auth/Auth.Reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  seller: sellerReducer,
  auth: authReducer,
});

export default rootReducer;

export interface RootState {
  home: HomeState;
  seller: SellerState;
  auth: AuthState;
}
