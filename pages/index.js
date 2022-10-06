import Head from "next/head";
import HomeContent from "../components/home/HomeContent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paraffin by V3N1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent />

      <footer className={styles.footer}>
        <a
          href="https://fin.fintual.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ in Patagonia
        </a>
      </footer>
    </div>
  );
}
