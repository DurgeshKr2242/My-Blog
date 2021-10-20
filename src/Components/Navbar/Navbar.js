import React from "react";
import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.left}>
        <NavbarMenu />
      </div>
      <div className={styles.center}>
        <p> Blog It</p>
      </div>
      <div className={styles.right}>
        <div className={styles.auth}>
          <p>Login/Register</p>
        </div>
        <div className={styles.newPost}>
          <p>CREATE YOUR POST!</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
