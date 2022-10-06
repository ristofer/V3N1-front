import { Box, Button } from "@mui/material";

function DesktopMenu({ pages, loggedIn }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        component: "span",
      }}
    >
      {pages.map((page) => (
        <Button
          key={page.text}
          disabled={!loggedIn}
          href={page.url}
          sx={{ my: 2, color: "white", display: "block", mx: 1 }}
        >
          {page.text}
        </Button>
      ))}
    </Box>
  );
}

export default DesktopMenu;
