import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  Skeleton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import useCurriculums from "../../hooks/use-curriculums";

function MobileMenu({ loggedIn }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = useCurriculums();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (pages === undefined) {
    return (
      <Skeleton
        variant="rounded"
        width={40}
        height={30}
        sx={{ flexGrow: 1, display: { md: "none" }, mr: 20 }}
      />
    );
  }

  return (
    <Box sx={{ flexGrow: 1, display: { md: "none" } }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {pages.map((page) => (
            <Link href={page.url} passHref key={page.text}>
              <Button
                disabled={!loggedIn}
                onClick={handleCloseNavMenu}
                style={{ justifyContent: "flex-start" }}
              >
                <Typography textAlign="center">{page.text}</Typography>
              </Button>
            </Link>
          ))}
        </Box>
      </Menu>
    </Box>
  );
}

export default MobileMenu;
