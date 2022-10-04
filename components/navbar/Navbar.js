import * as React from "react";
import {AppBar, CircularProgress, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useOperation, useOperationMethod } from "react-openapi-client";
import AppTitleAndLogo from "./AppTitleAndLogo";
import UserBubble from "./UserBubble";
import DesktopMenu from "./DesktopMenu";

const pages = [{ text: "Home", url: "/" }];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { loading, data, error } = useOperation("getSession");

  let userName = null;
  let userId = 0;
  let settings = {};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (loading) {
    return <div><CircularProgress /></div>;
  }

  if (error) {
    userName = null;
    userId = 0;
    settings = [
      { text: "Login", url: "users/sign_in" },
      { text: "Signup", url: "users/sign_up" },
    ];
  } else {
    userName = data.name;
    userId = data.id;
    settings = [{ text: "Logout", url: null }];
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppTitleAndLogo display={{ xs: "none", md: "flex" }} variant="h6" flexGrow={0} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  href={page.url}
                >
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AppTitleAndLogo display={{ xs: "flex", md: "none" }} variant ="h5" flexGrow={1}/>
          <DesktopMenu pages={pages}/>
          <UserBubble sessionActions={settings} userName={userName} userId={userId}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
