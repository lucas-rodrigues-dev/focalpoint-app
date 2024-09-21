import React from 'react';
import styles from '../styles/DeleteTaskModal.module.scss';

const DeleteTaskModal = ({ onClose, onDeleteTask }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Deletar tarefa</h2>
        <p className={styles.ModalSubTitle}>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton} onClick={onDeleteTask}>Deletar</button>
          <button className={styles.cancelButton} onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
