import * as React from "react";
import axios from "axios";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { useOperationMethod } from "react-openapi-client";
import useCurrentUser from "../../modules/authentication/hooks/use-current-user";
import useAuthError from "../../modules/authentication/hooks/use-error";
import useAuthLoading from "../../modules/authentication/hooks/use-loading";

function UserBubble() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [endSession] = useOperationMethod("endSession");
  const currentUser = useCurrentUser();
  const error = useAuthError();
  const loading = useAuthLoading();

  let userName = null;
  let userId = 0;
  let sessionActions = {};

  if (loading) {
    return (
      <div>
        <Skeleton variant="circular" width={40} height={40} />
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
    userName = currentUser.name;
    userId = currentUser.id;
    sessionActions = [{ text: "Logout", url: null }];
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const HandleSignOut = async () => {
    await endSession();
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      axios.get("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Manage session">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userName} src={`/avatar/${userId}.jpg`} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {sessionActions.map((setionAction) => (
          <MenuItem key={setionAction.text} onClick={handleCloseUserMenu}>
            {setionAction.url == null ? (
              <Button onClick={HandleSignOut}>
                <Typography textAlign="center">{setionAction.text}</Typography>
              </Button>
            ) : (
              <Button href={setionAction.url}>
                <Typography textAlign="center">{setionAction.text}</Typography>
              </Button>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserBubble;
