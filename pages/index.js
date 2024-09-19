import { useRouter } from 'next/router';
import { useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  const handleStart = () => {
    if (userName) {
      router.push(`/tasks?user=${userName}`);
    } else {
      alert("Por favor, insira seu nome.");
    }
  };

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <input 
        type="text" 
        placeholder="Digite seu nome" 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleStart}>Começar</button>
    </div>
  );
}
