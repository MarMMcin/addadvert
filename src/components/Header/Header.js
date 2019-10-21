import React from "react";
import Button from "../Button/Button";
import BurgerNav from "../Header/BurgerNav.js";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo2.jpg";

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt=" logo" />
    <BurgerNav />
    <Button onClick={openModalFn} secondary>
      new add
    </Button>
  </header>
);

export default Header;
