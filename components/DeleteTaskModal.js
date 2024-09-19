import styles from '../styles/DeleteTaskModal.module.scss';

export default function DeleteTaskModal({ onDelete, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Deletar tarefa</h3>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={onDelete}>Deletar</button>
      </div>
    </div>
  );
}
