import styles from '../styles/TaskList.module.scss';

export default function TaskList({ tasks, onDelete }) {
  return (
    <div className={styles.taskList}>
      <h2>Suas tarefas de hoje</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={onDelete}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
