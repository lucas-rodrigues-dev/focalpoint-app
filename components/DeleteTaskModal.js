import styles from '../styles/DeleteTaskModal.module.scss';

const DeleteTaskModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h3>Deletar tarefa</h3>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.buttons}>
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onConfirm} className={styles.deleteButton}>Deletar</button>
        </div>
      </div>
    </div>
  );
}
export default DeleteTaskModal;