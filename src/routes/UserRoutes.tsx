import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import HomeContainer from "../modules/Home/Home.Container";
import ShopPage from "../modules/Home/ShopPage/Shop.Page";
import ProductDetailPage from "../modules/Home/ProductDetailPage/ProductDetail.Page";
import SearchProductPage from "../modules/Home/SearchProductPage/SearchProduct.Page";
import CategoryProductPage from "../modules/Home/CategoryProductPage/CategoryProduct.Page";
import UnderDevelopment from "../modules/Error/UnderDevelopment/Error.UnderDevelopment";
import NotFound from "../modules/Error/NotFound/Error.NotFound";
import CartPage from "../modules/Home/CartPage/Cart.Page";
import PaymentPage from "../modules/Home/Payment/Payment.Page";
import ChangePasswordPage from "../modules/Home/ProfilePage/ChangePassword.Page";
import AddressDeliver from "../modules/Home/ProfilePage/AddressDeliver.Page";
import ViewOrdersPage from "../modules/Home/ProfilePage/ViewOrders.Page";
import UserProfilePage from "../modules/Home/ProfilePage/UserProfile.Page";
import AddColumn from "../modules/Home/Components/AddColumn";

function UserRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path={routes.home.Root} element={<HomeContainer />} />
      <Route path={routes.home.ShopDetailPage} element={<ShopPage />} />
      <Route path={routes.home.NotFoundPage} element={<NotFound />} />
      <Route path={routes.home.ProductDetailPage} element={<ProductDetailPage />} />
      <Route path={routes.home.SearchProductPage} element={<SearchProductPage />} />
      <Route path={routes.home.CartPage} element={<CartPage />} />
      <Route path={routes.home.PaymentPage} element={<PaymentPage />} />
      <Route path={routes.home.CategoryProductPage} element={<CategoryProductPage />} />
      <Route path={routes.home.ChangePasswordPage} element={<ChangePasswordPage />} />
      <Route path={routes.home.EditAddressDeliverPage} element={<AddressDeliver />} />
      <Route path={routes.home.ViewOrdersPage} element={<ViewOrdersPage />} />
      <Route path={routes.home.ProfilePage} element={<UserProfilePage />} />

      <Route path={routes.home.AddColumnPage} element={<AddColumn />} />

      {/* Under Development */}
      <Route path={routes.home.UnderDevPage} element={<UnderDevelopment />} />

      {/* Not found */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
export default UserRoutes;
