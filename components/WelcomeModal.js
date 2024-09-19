import { useState } from 'react';
import styles from '../styles/WelcomeModal.module.scss';

const WelcomeModal = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        if(name) {
            onSubmit(name);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>Bem-vindo!</h3>
                <p>Por favor, insira seu nome para continuar:</p>
                <input
                    type='text'
                    placeholder='Digite Seu Nome'
                    value='{name}'
                    onChange={handleNameChange}
                />
                <div className={styles.actions}>
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    )
};
export default WelcomeModal;