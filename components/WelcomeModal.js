import React, { useState, useEffect } from 'react';
import styles from '../styles/WelcomeModal.module.scss';

const WelcomeModal = ({ onClose }) => {
    const [name, setName] = useState('');

    const handleSave = () => {
        if (name.trim()) {
            localStorage.setItem('userName', name);
            onClose(name);
        }
    };

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h2>Bem-vindo!</h2>
                <p>Por favor, insira seu nome:</p>
                <input
                    className={styles.modalInput}
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Seu Nome'
                />
                <div className={styles.buttons}>
                    <button onClick={handleSave}>Salvar</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;