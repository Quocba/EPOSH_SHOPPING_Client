import { Box } from "@mui/material";
import "./Auth.Page.Style.scss";
import UserHeader from "../../../layouts/Header/User/UserHeader";
import FooterComponent from "../../../layouts/Footer/FooterComponent";
import BoxContainer from "../../../component/Box/Box.Container";




const AuthPage: React.FC<{}> = () => {

    return (
        <Box>
            <Box>
            <UserHeader />
            </Box>
            <BoxContainer property="sign_up">
        day la sign up
            </BoxContainer>

            <BoxContainer property="auth">
        <BoxContainer property="image_auth">
        day la image
        </BoxContainer>

        <BoxContainer property="sign_in">
            day la sign in
        </BoxContainer>
            </BoxContainer>


            <Box>
            <FooterComponent />
            </Box>


        </Box>
    )
}
export default AuthPage;