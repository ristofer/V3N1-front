import styles from "../../styles/Home.module.css";
import ActionAreaCard from "../common/ActionAreaCard";

function WelcomeBack({ userName }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome back to Paraffin,</h1>
      <h1 className={styles.title}>{userName}</h1>
      <p className={styles.description}>
        Your path towards your next career as a software developer awaits
      </p>

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
