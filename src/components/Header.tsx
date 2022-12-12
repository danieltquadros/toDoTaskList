import rocket from "../assets/rocket.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Rocket" />
      <span>to</span>
      <span className={styles.do}>do</span>
    </header>
  );
}

export default Header;
