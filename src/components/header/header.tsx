import ThemeSwitch from "../themeSwitch/themeSwitch";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>devfinder</h1>
      <ThemeSwitch />
    </header>
  );
}
