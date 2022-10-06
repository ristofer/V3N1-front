import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function AppTitleAndLogo({ display, variant, flexGrow }) {
  return (
    <>
      <SchoolIcon sx={{ display, mr: 1 }} />
      <Link href="/" passHref>
        <Typography
          variant={variant}
          noWrap
          component="a"
          sx={{
            mr: 2,
            display,
            flexGrow,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          V3N1
        </Typography>
      </Link>
    </>
  );
}

export default AppTitleAndLogo;
