import styles from "../../styles/Home.module.css";

function WelcomeUnknown() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Paraffin</h1>
      <h1 className={styles.title}>by V3N1</h1>
      <p className={styles.description}>
        Discover your next career as a software developer
      </p>

      <div className={styles.grid}>
        <a href="/users/sign_up" className={styles.card}>
          <h2>Sign up &rarr;</h2>
          <p>
            You couldn&apos;t have found a better place to start your career.
          </p>
        </a>

        <a href="/users/sign_in" className={styles.card}>
          <h2>Log in &rarr;</h2>
          <p>Already have an account? Continue your learning journey here.</p>
        </a>
      </div>
    </main>
  );
}

export default WelcomeUnknown;
