import React from 'react';
import styles from '../styles/DeleteTaskModal.module.scss';

const DeleteTaskModal = ({ onClose, onDeleteTask }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Confirmação de exclusão</h2>
        <p>Tem certeza que deseja excluir esta tarefa?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>Cancelar</button>
          <button className={styles.deleteButton} onClick={onDeleteTask}>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
