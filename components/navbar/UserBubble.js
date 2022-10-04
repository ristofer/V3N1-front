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
} from "@mui/material";
import { useOperationMethod } from "react-openapi-client";

function UserBubble({ sessionActions, userName, userId }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [endSession] = useOperationMethod("endSession");

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
