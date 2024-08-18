import * as React from "react";
import * as Components from "../Components/Component";
import { Box } from "@mui/material";
import { heightScreen } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { signUp } from "../Auth.Api";
import { useDispatch } from "react-redux";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const goToSignIn = () => {
    navigate(routes.home.SignInPage);
  };

  const handleSignUp = async () => {
    const data = {
      username,
      email,
      password,
    };
    const signUpApi = await signUp(dispatch,data);
    if (signUpApi) {
      goToSignIn();
      console.log("success");
    } else {
      console.log("Sign in failed !!");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: heightScreen / 1.3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Components.Container>
        <Components.SignUpContainer>
          <Components.Form>
            <Box
              sx={{
                marginBottom: 1,
              }}
            >
              <Components.Title>Create Account</Components.Title>
            </Box>
            <Components.Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Components.Input
              type="text"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Box
              sx={{
                marginTop: 2,
              }}
              onClick={handleSignUp}
            >
              <Components.Button onClick={(e: any) => e.preventDefault()}>Sign Up</Components.Button>
            </Box>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.OverlayContainer>
          <Components.Overlay>
            <Components.LeftOverlayPanel>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Box onClick={goToSignIn}>
                <Components.GhostButton>Sign In</Components.GhostButton>
              </Box>
            </Components.LeftOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Box>
  );
}
