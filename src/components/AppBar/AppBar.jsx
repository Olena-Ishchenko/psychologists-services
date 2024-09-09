import { NavLink, Link } from "react-router-dom";
import styles from "./AppBar.module.css";
import HeaderBtn from "../HeaderBtn/HeaderBtn";

const AppBar = () => {
  return (
    <div className={styles.header}>
      <Link to={`/`} className={styles.logoColor}>
        psychologists.<span className={styles.logo}>services</span>
      </Link>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/psychologists" className={styles.navLink}>
          Psychologists
        </NavLink>
        <NavLink to="/favorites" className={styles.navLink}>
          Favorites
        </NavLink>
      </nav>

      <HeaderBtn />
    </div>
  );
};

export default AppBar;
