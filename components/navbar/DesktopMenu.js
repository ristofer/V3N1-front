import { Box, Button } from "@mui/material";
import Link from "next/link";

function DesktopMenu({ loggedIn, pages }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        component: "span",
      }}
    >
      {pages.map((page) => (
        <Link href={page.url} passHref key={page.text}>
          <Button
            disabled={!loggedIn}
            sx={{ my: 2, color: "white", display: "block", mx: 1 }}
          >
            {page.text}
          </Button>
        </Link>
      ))}
    </Box>
  );
}

export default DesktopMenu;
