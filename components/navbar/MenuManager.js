import { Skeleton } from "@mui/material";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function MenuManager({ version, loggedIn, pages }) {
  if (version === "desktop") {
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
    return <DesktopMenu loggedIn={loggedIn} pages={pages} />;
  }

  if (version === "mobile") {
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
    return <MobileMenu loggedIn={loggedIn} pages={pages} />;
  }
}

export default MenuManager;
