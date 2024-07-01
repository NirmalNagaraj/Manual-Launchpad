import React, { useState } from 'react';
import './Tasks.css';
import Levels from '../../components/Levels';
import Dashboard from '../../components/DashBoard2';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Stage-1', levels: Array(10).fill(false), completed: false },
    { id: 2, title: 'Stage-2', levels: Array(10).fill(false), completed: false },
    { id: 3, title: 'Stage-3', levels: Array(10).fill(false), completed: false },
    { id: 4, title: 'Stage-4', levels: Array(10).fill(false), completed: false },
    { id: 5, title: 'Stage-5', levels: Array(10).fill(false), completed: false },
    { id: 6, title: 'Stage-6', levels: Array(10).fill(false), completed: false },
    { id: 7, title: 'Stage-7', levels: Array(10).fill(false), completed: false },
    { id: 8, title: 'Stage-8', levels: Array(10).fill(false), completed: false },
    { id: 9, title: 'Stage-9', levels: Array(10).fill(false), completed: false },
    { id: 10, title: 'Stage-10', levels: Array(10).fill(false), completed: false },
    { id: 11, title: 'Stage-11', levels: Array(10).fill(false), completed: false },
    { id: 12, title: 'Stage-12', levels: Array(10).fill(false), completed: false },
  ]);

  const [currentTask, setCurrentTask] = useState(null);

  const handleTaskComplete = (taskId, levels) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, levels, completed: levels.every(level => level) } : task
    ));
  };

  const handleTaskClick = (task) => {
    setCurrentTask(task);
  };

  const handleBack = () => {
    setCurrentTask(null);
  };

  return (
    <div className="tasks-container">
      <div className="tasks">
        <h2>My Tasks</h2>
        {currentTask ? (
          <Levels task={currentTask} onComplete={handleTaskComplete} onBack={handleBack} />
        ) : (
          <div className="tasks-grid">
            {tasks.map((task, index) => (
              <div key={task.id} className="task">
                <div className="progress-circle" onClick={() => handleTaskClick(task)}>
                  <div className="progress">
                    {task.completed ? '100%' : `${(task.levels.filter(level => level).length / (task.levels.length || 1)) * 100}%`}
                  </div>
                </div>
                <div className="task-info">
                  <h3>{task.title}</h3>
                  <p>levels: <span className="units">{task.levels.length}</span></p>
                  <button 
                    className="view-button"
                    onClick={() => handleTaskClick(task)}
                    disabled={index !== 0 && !tasks[index - 1].completed}
                  >
                    {task.completed ? 'Completed' : 'View'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {!currentTask && <Dashboard tasks={tasks} />}
    </div>
  );
};

export default Tasks;
