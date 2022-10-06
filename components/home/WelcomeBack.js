import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import ActionAreaCard from "../common/ActionAreaCard";

function WelcomeBack({ userName }) {
  const titleStyle = {
    fontFamily: "helvetica",
    fontWeight: 600,
    color: "inherit",
    fontSize: 60,
    textAlign: "center",
  };
  return (
    <main className={styles.main}>
      <Typography sx={titleStyle}>Welcome back to Paraffin,</Typography>
      <Typography sx={titleStyle}>{userName}</Typography>

      <Typography
        sx={{
          fontFamily: "helvetica",
          color: "inherit",
          fontSize: 23,
          textAlign: "center",
          mt: 3,
          mb: 7,
        }}
      >
        Your path towards your next career as a software developer awaits
      </Typography>

      <div className={styles.grid}>
        <ActionAreaCard
          title="Resume"
          text="Ready to continue? Resume your learning journey here."
          url="/curriculums/1"
          imageurl="/images/continue.jpg"
          imagealt="open book"
        />
      </div>
    </main>
  );
}

export default WelcomeBack;
