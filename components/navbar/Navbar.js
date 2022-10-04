import * as React from "react";
import { AppBar, CircularProgress, Toolbar, Container } from "@mui/material";
import { useOperation } from "react-openapi-client";
import AppTitleAndLogo from "./AppTitleAndLogo";
import UserBubble from "./UserBubble";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const pages = [{ text: "Home", url: "/" }];

function ResponsiveAppBar() {
  const { loading, data, error } = useOperation("getSession");

  let userName = null;
  let userId = 0;
  let sessionActions = {};

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    userName = null;
    userId = 0;
    sessionActions = [
      { text: "Login", url: "users/sign_in" },
      { text: "Signup", url: "users/sign_up" },
    ];
  } else {
    userName = data.name;
    userId = data.id;
    sessionActions = [{ text: "Logout", url: null }];
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppTitleAndLogo
            display={{ xs: "none", md: "flex" }}
            variant="h6"
            flexGrow={0}
          />
          <MobileMenu pages={pages} />
          <AppTitleAndLogo
            display={{ xs: "flex", md: "none" }}
            variant="h5"
            flexGrow={1}
          />
          <DesktopMenu pages={pages} />
          <UserBubble
            sessionActions={sessionActions}
            userName={userName}
            userId={userId}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
