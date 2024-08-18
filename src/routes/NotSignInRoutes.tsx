import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import SignInPage from "../modules/Auth/SignIn/SignIn.Page";
import SignUpPage from "../modules/Auth/SignUp/SignUp.Page";
import NotFound from "../modules/Error/NotFound/Error.NotFound";
import UnderDevelopment from "../modules/Error/UnderDevelopment/Error.UnderDevelopment";
import CategoryProductPage from "../modules/Home/CategoryProductPage/CategoryProduct.Page";
import HomeContainer from "../modules/Home/Home.Container";
import ProductDetailPage from "../modules/Home/ProductDetailPage/ProductDetail.Page";
import SearchProductPage from "../modules/Home/SearchProductPage/SearchProduct.Page";
import ShopPage from "../modules/Home/ShopPage/Shop.Page";

function NotSignInRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path={routes.home.Root} element={<HomeContainer />} />
      <Route path={routes.home.ShopDetailPage} element={<ShopPage />} />
      <Route path={routes.home.ProductDetailPage} element={<ProductDetailPage />} />
      <Route path={routes.home.SearchProductPage} element={<SearchProductPage />} />
      <Route path={routes.home.CategoryProductPage} element={<CategoryProductPage />} />



      {/* Under Development */}
      <Route path={routes.home.UnderDevPage} element={<UnderDevelopment />} />

      {/* Auth */}
      <Route path={routes.home.SignInPage} element={<SignInPage />} />
      <Route path={routes.home.SignUpPage} element={<SignUpPage />} />

      {/* Not found */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
export default NotSignInRoutes;
