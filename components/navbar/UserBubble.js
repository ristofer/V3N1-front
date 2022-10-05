import { useState } from "react";
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
import Link from "next/link";
import useCurrentUser from "../../modules/authentication/hooks/use-current-user";
import useAuthError from "../../modules/authentication/hooks/use-error";
import useSignOut from "../../modules/authentication/hooks/use-sign-out";

function UserBubble() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const currentUser = useCurrentUser();
  const error = useAuthError();
  const signOut = useSignOut();

  let userName = null;
  let userId = 0;
  let sessionActions = {};

  if (currentUser === undefined && error === undefined) {
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
      { text: "Login", url: "/users/sign_in" },
      { text: "Signup", url: "/users/sign_up" },
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
        {sessionActions.map((sessionAction) => (
          <MenuItem key={sessionAction.text} onClick={handleCloseUserMenu}>
            {sessionAction.url == null ? (
              <Button onClick={signOut} color="error">
                <Typography textAlign="center">{sessionAction.text}</Typography>
              </Button>
            ) : (
              <Link href={sessionAction.url}>
                <Typography textAlign="center">{sessionAction.text}</Typography>
              </Link>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserBubble;
