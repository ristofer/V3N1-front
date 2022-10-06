import { Skeleton, Box } from "@mui/material";
import styles from "../../styles/Home.module.css";

function WelcomeSkeleton() {
  return (
    <main className={styles.main}>
      <Box sx={{ width: 800 }}>
        <Skeleton variant="text" animation="wave" />
      </Box>
      <Box sx={{ width: 550 }}>
        <Skeleton variant="text" animation="wave" />
      </Box>
    </main>
  );
}

export default WelcomeSkeleton;
