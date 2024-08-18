/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import BoxContainer from "../../component/Box/Box.Container";
import ContainerPage from "./Container/Container.Page";
import UserHeader from "../../layouts/Header/User/UserHeader";
import FooterComponent from "../../layouts/Footer/FooterComponent";

const HomePage: React.FC<{}> = () => {

  return (
    <BoxContainer property="all">
      {/* header */}
      <UserHeader />
      {/* container */}
      <ContainerPage />
      {/* Footer */}
      <FooterComponent />
    </BoxContainer>
  );
};

export default HomePage;
