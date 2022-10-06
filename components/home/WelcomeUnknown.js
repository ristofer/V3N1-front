import styles from "../../styles/Home.module.css";
import ActionAreaCard from "../common/ActionAreaCard";

function WelcomeUnknown() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Paraffin</h1>
      <h1 className={styles.title}>by V3N1</h1>
      <p className={styles.description}>
        Discover your next career as a software developer
      </p>

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
