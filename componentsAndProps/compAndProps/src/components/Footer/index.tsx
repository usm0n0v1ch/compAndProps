import React from 'react';
import styles from './style.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Библиотека</h3>
        <p>Следите за нами в социальных сетях:</p>
        <ul className={styles.socialMedia}>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
