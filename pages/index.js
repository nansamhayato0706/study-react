import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index" />

      <Footer />
    </div>
  );
}
