import React, { useState } from 'react';
import styles from '../styles/AddTaskModal.module.scss';

const AddTaskModal = ({ onClose, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAdd = () => {
    if (taskTitle.trim()) {
      onAddTask({ id: Date.now(), title: taskTitle, completed: false });
      setTaskTitle('');
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Nova tarefa</h2>
        <h3 className={styles.taskInputTitle}>Título</h3>
        <input
          type="text"
          className={styles.taskInput}
          placeholder="Digite o título da tarefa"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
          <button className={styles.addButton} onClick={handleAdd}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
