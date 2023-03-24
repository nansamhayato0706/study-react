import Head from "next/head";
import { useCallback } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.href);
    alert(foo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <a
        href="/about"
        onClick={(e) => {
          handleClick(e, foo);
        }}
      >
        ボタン
      </a>
      <Main page="index" />

      <Footer />
    </div>
  );
}
