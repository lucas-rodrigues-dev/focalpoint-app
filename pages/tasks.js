import React, { useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';
import styles from '../styles/TaskList.module.scss';
import Header from '../components/header';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Lavar as mãos', completed: false },
    { id: 2, title: 'Fazer um bolo', completed: false, hover: true },
    { id: 3, title: 'Lavar a louça', completed: false },
    { id: 4, title: 'Levar o lixo para fora', completed: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  return (
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
            <button className={styles.deleteButton} onClick={() => handleDeleteTask(task.id)}>
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
            <button className={styles.deleteButton} onClick={() => handleDeleteTask(task.id)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <button 
        className={styles.addTaskButton} 
        onClick={() => setIsModalOpen(true)} // Abrir o modal ao clicar
      >
        Adicionar nova tarefa
      </button>

      {/* Renderiza o modal quando o estado estiver "true" */}
      {isModalOpen && (
        <AddTaskModal 
          onClose={() => setIsModalOpen(false)} // Função para fechar o modal
          onAddTask={handleAddTask} // Função para adicionar a tarefa
        />
      )}
    </div>
  );
};
export default Tasks;