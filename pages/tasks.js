import React, { useEffect, useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';
import DeleteTaskModal from '../components/DeleteTaskModal';
import Header from '../components/Header';
import styles from '../styles/TaskList.module.scss';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Lavar as mãos', completed: false },
    { id: 2, title: 'Fazer um bolo', completed: false },
    { id: 3, title: 'Lavar a louça', completed: false },
    { id: 4, title: 'Levar o lixo para fora', completed: true },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null)
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    setIsDeleteModalOpen(false);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  const openDeleteModal = (task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className={isModalOpen || isDeleteModalOpen ? styles.blurBackground : ''}>
      <Header userName={userName} />
      <div className={styles.tasksContainer}>
        <h2>Suas tarefas de hoje</h2>
        <ul className={styles.taskList}>
          {tasks.filter(task => !task.completed).map((task) => (
            <li key={task.id} className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span>{task.title}</span>
              <button className={styles.deleteButton} onClick={() => openDeleteModal(task)}>
                  🗑️
              </button>
            </li>
          ))}
        </ul>
        <h3>Tarefas finalizadas</h3>
        <ul className={styles.taskList}>
          {tasks.filter(task => task.completed).map((task) => (
            <li key={task.id} className={`${styles.taskItem} ${styles.completed}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span>{task.title}</span>
              <button className={styles.deleteButton} onClick={() => onClick=() => openDeleteModal(task)}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
        <button 
          className={styles.addTaskButton} 
          onClick={() => setIsModalOpen(true)}>
          Adicionar nova tarefa
        </button>
        {isModalOpen && (
          <AddTaskModal 
            onClose={() => setIsModalOpen(false)}
            onAddTask={handleAddTask}
          />
        )}

        {isDeleteModalOpen && (
          <DeleteTaskModal
            onClose={() => setIsDeleteModalOpen(false)}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
};
export default Tasks;