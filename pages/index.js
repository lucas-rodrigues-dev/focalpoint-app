import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {''
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      router.push(`/tasks`);
    }
  }, [router]);

  const handleStart = () => {
    if (userName) {
      localStorage.setItem('userName', userName);
      router.push(`/tasks`);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.card}>
        <h1>Bem-vindo!</h1>
        <input 
          type="text" 
          placeholder="Digite seu nome"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="white-button" onClick={handleStart}>Começar</button>
      </div>
    </div>
  );
}
