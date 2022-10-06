import styles from "../../styles/Home.module.css";

function WelcomeBack({ userName }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome back to Paraffin,</h1>
      <h1 className={styles.title}>{userName}</h1>
      <p className={styles.description}>
        Your path towards your next career as a software developer awaits
      </p>

      <div className={styles.grid}>
        <a href="/curriculums/1" className={styles.card}>
          <h2>Resume &rarr;</h2>
          <p>Ready to continue? Resume your learning journey here.</p>
        </a>
      </div>
    </main>
  );
}

export default WelcomeBack;
