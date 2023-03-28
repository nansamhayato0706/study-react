import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  // let foo = 1;
  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
    // foo = foo + 1;
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
    //前回の値(isShow)がTruthyだったらFalsy
    //前回の値(isShow)がFalsyだったらTruthy
    //反転させて短く書くことができる。
    // return isShow ? false : true;
  }, []);

  useEffect(() => {
    console.log(`マウント時${count}`);
    document.body.style.backgroundColor = "lightblue";
    //countが変化したときはアンマウント時の方が先に呼ばれる。
    return () => {
      console.log(`アンマウント時${count}`);
      document.body.style.backgroundColor = "";
    };
  }, [count]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />

      <Footer />
    </div>
  );
}
