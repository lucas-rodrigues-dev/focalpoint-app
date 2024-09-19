import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';

const Header = ({ username }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleTimeString('pt-BR');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
                <span>FocalPoint</span>
            </div>

            <div className={styles.username}>
                <h1>Bem-vindo de volta, {username}</h1>
            </div>

            <div className={styles.datetime}>
                <p>{formatDate(currentDate)}</p>
                <p>{formatTime(currentTime)}</p>
            </div>
        </header>
    );
};

export default Header;