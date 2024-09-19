import React, { useState } from 'react';
import styles from '../styles/AddTaskModal.module.scss';

const AddTaskModal = ({ onClose, onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: Math.random(), // Apenas um id temporário
        title: newTaskTitle,
        completed: false,
      };
      onAddTask(newTask);
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Nova tarefa</h2>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Digite"
        />
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.addButton} onClick={handleAddTask}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
