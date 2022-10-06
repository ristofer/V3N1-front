import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import ActionAreaCard from "../common/ActionAreaCard";

function WelcomeUnknown() {
  const titleStyle = {
    fontFamily: "helvetica",
    fontWeight: 600,
    color: "inherit",
    fontSize: 60,
    textAlign: "center",
  };
  return (
    <main>
      <Typography sx={titleStyle}>Welcome back to Paraffin,</Typography>
      <Typography sx={titleStyle}>by V3N1</Typography>

      <Typography
        sx={{
          fontFamily: "helvetica",
          color: "inherit",
          fontSize: 23,
          textAlign: "center",
          mt: 5,
          mb: 10,
        }}
      >
        Discover your next career as a software developer
      </Typography>

      <div className={styles.grid}>
        <ActionAreaCard
          title="Sign up"
          text="You couldn't have found a better place to start your career."
          url="/users/sign_up"
          imageurl="/images/signup.jpg"
          imagealt="open book"
        />

        <ActionAreaCard
          title="Log in"
          text="Already have an account? Continue your learning journey here."
          url="/users/sign_in"
          imageurl="/images/login.jpg"
          imagealt="open book"
        />
      </div>
    </main>
  );
}

export default WelcomeUnknown;
