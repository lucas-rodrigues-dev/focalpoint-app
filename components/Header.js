import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';

const Header = ({ username }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('pt-BR');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./logo.png" alt="FocalPoint"/>
        <span>FocalPoint</span>
      </div>
      <div className={styles.username}>
        Bem-vindo de volta, {username}
      </div>
      <div className={styles.datetime}>
        {formattedDate}, {formattedTime}
      </div>
    </header>
  );
};

export default Header;
