import { Box, Button, Skeleton } from "@mui/material";
import Link from "next/link";
import useCurriculums from "../../hooks/use-curriculums";

function DesktopMenu({ loggedIn }) {
  const pages = useCurriculums();

  if (pages === undefined) {
    return (
      <Skeleton
        variant="rounded"
        width={10}
        height={30}
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          mr: 75,
        }}
      />
    );
  }

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
