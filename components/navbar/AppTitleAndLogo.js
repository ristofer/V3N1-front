import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";

function AppTitleAndLogo({ display, variant, flexGrow }) {
  return (
    <>
      <SchoolIcon sx={{ display, mr: 1 }} />
      <Typography
        variant={variant}
        noWrap
        component="a"
        href="/landing"
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
    </>
  );
}

export default AppTitleAndLogo;
