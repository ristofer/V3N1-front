import {Box, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem} from "@mui/material";

function UserBubble({sessionActions}) {
  return(
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
