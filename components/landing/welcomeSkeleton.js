import { Skeleton, Box } from "@mui/material";
import styles from "../../styles/Home.module.css";

function WelcomeSkeleton() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <Box sx={{ width: 800 }}>
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ bgcolor: "grey.900" }}
          />
        </Box>
      </h1>
      <p className={styles.description}>
        <Box sx={{ width: 550 }}>
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ bgcolor: "grey.900" }}
          />
        </Box>
      </p>
    </main>
  );
}

export default WelcomeSkeleton;
