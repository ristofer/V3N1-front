import { AppBar, Toolbar, Container } from "@mui/material";
import AppTitleAndLogo from "./AppTitleAndLogo";
import UserBubble from "./UserBubble";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useFetch from "../../hooks/use-fetch";
import Loader from "../common/Loader";

function Navbar() {
  const { data, error } = useFetch(`/api/curriculums`);
  if (error || !data) return <Loader />;
  const pages = data
    .map((curriculum) => ({
      text: curriculum.name,
      url: `/curriculums/${curriculum.id}`,
    }))
    .slice(0, 3);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppTitleAndLogo
            display={{ xs: "none", md: "flex" }}
            variant="h6"
            flexGrow={0}
          />
          <MobileMenu pages={pages} />
          <AppTitleAndLogo
            display={{ xs: "flex", md: "none" }}
            variant="h5"
            flexGrow={1}
          />
          <DesktopMenu pages={pages} />
          <UserBubble />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
