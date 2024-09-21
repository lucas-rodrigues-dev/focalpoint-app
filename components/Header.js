import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';

const Header = ({ userName }) => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(currentDate);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>FocalPoint</div>
      <div className={styles.welcomeMessage}>
        {userName ? `Bem-vindo de volta, ${userName}` : 'Bem-vindo!'}
      </div>
      <div className={styles.dateTime}>{date}</div>
    </div>
  );
};

export default Header;
