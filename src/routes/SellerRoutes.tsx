import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import SellerProductContainer from "../modules/Seller/Seller.Product/Seller.ContainerProduct";
import SellerCatalogContainer from "../modules/Seller/Seller.ShopManager/Seller.Catalog/Seller.CatalogContainer";
import SellerPerformanceContainer from "../modules/Seller/Seller.Performance/Seller.PerformanceContainer";
import SellerReviewContainer from "../modules/Seller/Seller.ShopManager/Seller.ShopReview/Seller.ReviewContainer";
import SellerProfileContainer from "../modules/Seller/Seller.ShopManager/Seller.ShopProfile/Seller.ProfileContainer";
import SellerSetUpShopContainer from "../modules/Seller/Seller.SetUpShop/Seller.SetUpShop.Container";
import SellerCreateNewVoucherContainer from "../modules/Seller/Seller.CreateNewVoucher/Seller.CreateNewVoucherContainer";
import SellerAddProductContainer from "../modules/Seller/Seller.Product/Seller.AddProduct/Seller.AddProductContainer";
import SellerDashboardContainer from "../modules/Seller/Seller.Dashboard/Seller.DashboardContainer";
import SellerTransactionContainer from "../modules/Seller/Seller.Transaction/Seller.TransactionContainer";
import NotFound from "../modules/Error/NotFound/Error.NotFound";
import UserProfilePage from "../modules/Home/ProfilePage/UserProfile.Page";
import ShopPage from "../modules/Home/ShopPage/Shop.Page";
import HomeContainer from "../modules/Home/Home.Container";
import ProductDetailPage from "../modules/Home/ProductDetailPage/ProductDetail.Page";
import SearchProductPage from "../modules/Home/SearchProductPage/SearchProduct.Page";
import CategoryProductPage from "../modules/Home/CategoryProductPage/CategoryProduct.Page";
import ChangePasswordPage from "../modules/Home/ProfilePage/ChangePassword.Page";
import AddressDeliver from "../modules/Home/ProfilePage/AddressDeliver.Page";
import CartPage from "../modules/Home/CartPage/Cart.Page";
import PaymentPage from "../modules/Home/Payment/Payment.Page";
import ViewOrdersPage from "../modules/Home/ProfilePage/ViewOrders.Page";

function SellerRoutes() {

  return (
    <Routes>
      <Route path={routes.seller.Home} element={<HomeContainer />} />
      <Route path={routes.seller.Root} element={<SellerDashboardContainer />} />
      <Route path={routes.seller.CreateVoucherPage} element={<SellerCreateNewVoucherContainer />} />
      <Route path={routes.seller.TransactionPage} element={<SellerTransactionContainer />} />
      <Route path={routes.seller.ProductPage} element={<SellerProductContainer />} />
      <Route path={routes.seller.AddProductPage} element={<SellerAddProductContainer />} />
      <Route path={routes.seller.PerformancePage} element={<SellerPerformanceContainer />} />
      <Route path={routes.seller.ShopReviewsPage} element={<SellerReviewContainer />} />
      <Route path={routes.seller.ShopProfilePage} element={<SellerProfileContainer />} />
      <Route path={routes.seller.CatalogShopPage} element={<SellerCatalogContainer />} />
      <Route path={routes.seller.ShopSetupPage} element={<SellerSetUpShopContainer />} />
      <Route path={routes.home.ProfilePage} element={<UserProfilePage />} />

      <Route path={routes.home.ShopDetailPage} element={<ShopPage />} />
      <Route path={routes.home.NotFoundPage} element={<NotFound />} />
      <Route path={routes.home.ProductDetailPage} element={<ProductDetailPage />} />
      <Route path={routes.home.SearchProductPage} element={<SearchProductPage />} />
      <Route path={routes.home.CategoryProductPage} element={<CategoryProductPage />} />
      <Route path={routes.home.ChangePasswordPage} element={<ChangePasswordPage />} />
      <Route path={routes.home.EditAddressDeliverPage} element={<AddressDeliver />} />
      <Route path={routes.home.CartPage} element={<CartPage />} />
      <Route path={routes.home.PaymentPage} element={<PaymentPage />} />
      <Route path={routes.home.ViewOrdersPage} element={<ViewOrdersPage />} />

      {/* Not found */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
export default SellerRoutes;
