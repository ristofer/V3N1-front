import { useState } from "react";
import { Box, Button } from "@mui/material";

function DesktopMenu({ pages }) {
  const [setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.text}
          onClick={handleCloseNavMenu}
          href={page.url}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.text}
        </Button>
      ))}
    </Box>
  );
}

export default DesktopMenu;
