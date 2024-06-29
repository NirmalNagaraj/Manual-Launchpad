import React from 'react';
import './Dashboard2.css';

const Dashboard2 = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard2">
      <h2>Dashboard</h2>
      <div className="card">
        <h3>Completed Tasks</h3>
        <p>{completedTasks}</p>
      </div>
      <div className="card">
        <h3>Remaining Tasks</h3>
        <p>{remainingTasks}</p>
      </div>
      <div className="card">
        <h3>Total Tasks</h3>
        <p>{totalTasks}</p>
      </div>
    </div>
  );
};

export default Dashboard2;
