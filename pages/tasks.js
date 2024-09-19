import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import DeleteTaskModal from '../components/DeleteTaskModal';
import styles from '../styles/TaskList.module.scss'

export default function TasksPage() {
    useEffect(() => {
        const formatDateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            return now.toLocaleDateString('pt-BR', options);
        };
    
        setCurrentDateTime(formatDateTime());
    }, []);

  const router = useRouter();
  const { user } = router.query;
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tasks, setTasks] = useState([
    "Lavar as mãos", "Fazer um bolo", "Lavar a louça"
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
    setShowDeleteModal(false);
  };

  return (
    <div>
      <h1>Bem-vindo de volta, {user}</h1>
      <span className={styles.dateTime}>{currentDateTime}</span>
      <TaskList tasks={tasks} onDelete={() => setShowDeleteModal(true)} />
      <button onClick={() => setShowAddModal(true)}>Adicionar nova tarefa</button>

      {showAddModal && (
        <AddTaskModal onAdd={addTask} onCancel={() => setShowAddModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteTaskModal onDelete={() => deleteTask(1)} onCancel={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
}
