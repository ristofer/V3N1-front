import { AppBar, Toolbar, Container } from "@mui/material";
import AppTitleAndLogo from "./AppTitleAndLogo";
import UserBubble from "./UserBubble";
import useCurrentUser from "../../modules/authentication/hooks/use-current-user";
import useCurriculums from "../../hooks/use-curriculums";
import MenuManager from "./MenuManager";

function Navbar() {
  const currentUser = useCurrentUser();
  const pages = useCurriculums();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppTitleAndLogo
            display={{ xs: "none", md: "flex" }}
            variant="h6"
            flexGrow={0}
          />
          <MenuManager
            version="mobile"
            loggedIn={!!currentUser}
            pages={pages}
          />
          <AppTitleAndLogo
            display={{ xs: "flex", md: "none" }}
            variant="h5"
            flexGrow={1}
          />
          <MenuManager
            version="desktop"
            loggedIn={!!currentUser}
            pages={pages}
          />
          <UserBubble />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
