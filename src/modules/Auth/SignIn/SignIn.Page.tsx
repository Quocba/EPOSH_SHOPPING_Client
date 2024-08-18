import * as React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { heightScreen } from "../../../utils/constant";
import * as Components from "../Components/Component";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { signIn } from "../Auth.Api";
import { useDispatch } from "react-redux";
import { checkPermission } from "../../../utils/helper";

export default function SignInPage() {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    const data = {
      username,
      password,
    };
    const signInApi = await signIn(dispath, data);
    if (signInApi) {
      checkPermission(navigate);
    } else {
      console.log("Sign in failed !!");
    }
  }

  const goToSignUp = () => {
    navigate(routes.home.SignUpPage);
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
        <Components.SignInContainer>
          <Components.Form>
            <Box
              sx={{
                marginTop: 3,
                marginBottom: 1,
              }}
            >
              <Components.Title>Sign in to Eposh</Components.Title>
            </Box>
            <Components.Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <Components.Input
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                />
              }
              label="show password"
            />
            <Box
              sx={{
                paddingTop: 3,
              }}
            >
              <Box onClick={handleSubmit}>
                <Components.Button onClick={(e: any) => e.preventDefault()}>
                  Sigin In
                </Components.Button>
              </Box>
            </Box>
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer>
          <Components.Overlay>
            <Components.LeftOverlayPanel>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Box onClick={goToSignUp}>
                <Components.GhostButton>Sigin Up</Components.GhostButton>
              </Box>
            </Components.LeftOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Box>
  );
}
