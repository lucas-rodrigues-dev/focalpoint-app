import { useState } from 'react';
import styles from '../styles/AddTaskModal.module.scss';

export default function AddTaskModal({ onAdd, onCancel }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAdd = () => {
    if (taskTitle) {
      onAdd(taskTitle);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Nova tarefa</h3>
        <input 
          type="text" 
          placeholder="Digite" 
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={handleAdd}>Adicionar</button>
      </div>
    </div>
  );
}
