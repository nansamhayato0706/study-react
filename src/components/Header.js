import styles from "../styles/Home.module.css";
import Link from "next/link";
export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="about" legacyBehavior>
        <a className={styles.anchor}>About</a>
      </Link>
    </header>
  );
}
