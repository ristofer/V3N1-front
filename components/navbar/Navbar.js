import { AppBar, Toolbar, Container } from "@mui/material";
import AppTitleAndLogo from "./AppTitleAndLogo";
import UserBubble from "./UserBubble";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useCurrentUser from "../../modules/authentication/hooks/use-current-user";

function Navbar() {
  const currentUser = useCurrentUser();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppTitleAndLogo
            display={{ xs: "none", md: "flex" }}
            variant="h6"
            flexGrow={0}
          />
          <MobileMenu loggedIn={!!currentUser} />
          <AppTitleAndLogo
            display={{ xs: "flex", md: "none" }}
            variant="h5"
            flexGrow={1}
          />
          <DesktopMenu loggedIn={!!currentUser} />
          <UserBubble />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
