import React from 'react';
import styles from './style.module.css'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoAndNav}>
        <h1 className={styles.title}>Библиотека</h1>
        <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
      <div className={styles.contactInfo}>
        <p>Телефон: +123456789</p>
        <p>Электронная почта: info@library.com</p>
      </div>
    </header>
  );
};

export default Header;
