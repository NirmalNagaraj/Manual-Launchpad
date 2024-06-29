import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';

function Dashboard({ tasks = [] }) {
  if (!tasks || !Array.isArray(tasks)) {
    return <div>Loading...</div>;
  }

  const totalStages = tasks.length;
  const completedStages = tasks.filter(task => task.completed).length;
  const pendingStages = totalStages - completedStages;
  const completionPercentage = totalStages > 0 ? (completedStages / totalStages) * 100 : 0;
  const pendingPercentage = totalStages > 0 ? (pendingStages / totalStages) * 100 : 0;

  const currentLevel = tasks.find(task => !task.completed) || tasks[tasks.length - 1];
  const nextLevelIndex = tasks.indexOf(currentLevel) + 1;
  const nextLevel = nextLevelIndex < tasks.length ? tasks[nextLevelIndex] : { title: "None" };

  const upcomingTasks = tasks.filter(task => !task.completed).slice(0, 5);
  const recentActivity = tasks.filter(task => task.completed).slice(-5).reverse();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="date-and-notification">
          <div className="date-picker">
            <Calendar />
          </div>
          <div className="notification-box">
            <h3>Notifications</h3>
            <p>No new meetings</p>
          </div>
        </div>
      </header>

      <div className="progress-bars">
        <div className="progress-bar">
          <h3>Total no of Stages</h3>
          <CircularProgressbar 
            value={100} 
            text={`${totalStages}`} 
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#2196f3",
              trailColor: "#d6d6d6",
            })} 
          />
        </div>
        <div className="progress-bar">
          <h3>Work in Progress</h3>
          <CircularProgressbar 
            value={completionPercentage} 
            text={`${completionPercentage.toFixed(2)}%`} 
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#4caf50",
              trailColor: "#d6d6d6",
            })} 
          />
        </div>
        <div className="progress-bar">
          <h3>Work in Pending</h3>
          <CircularProgressbar 
            value={pendingPercentage} 
            text={`${pendingPercentage.toFixed(2)}%`} 
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#f44336",
              trailColor: "#d6d6d6",
            })} 
          />
        </div>
        <div className="progress-bar">
          <h3>Tasks Completed</h3>
          <CircularProgressbar 
            value={completedStages} 
            text={`${completedStages} / ${totalStages}`} 
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#ff9800",
              trailColor: "#d6d6d6",
            })} 
          />
        </div>
        <div className="progress-bar">
          <h3>Levels Completed</h3>
          <CircularProgressbar 
            value={completedStages} 
            text={`${completedStages} / ${totalStages}`} 
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#9c27b0",
              trailColor: "#d6d6d6",
            })} 
          />
        </div>
      </div>

      <div className="level-info">
        <div className="level-box">
          <h3>Current Level</h3>
          <p>{currentLevel ? currentLevel.title : "None"}</p>
        </div>
        <div className="level-box">
          <h3>Next Level</h3>
          <p>{nextLevel ? nextLevel.title : "None"}</p>
        </div>
      </div>

      <div className="bottom-section">
        <div className="event-box">
          <h3>Event Details</h3>
          <p>No upcoming events</p>
        </div>
        <div className="tips-and-tricks">
          <h3></h3>
          <ul>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="bottom-section">
        <div className="task-list">
          <h3>Upcoming Tasks</h3>
          <ul>
            {upcomingTasks.map(task => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            {recentActivity.map(task => (
              <li key={task.id}>{task.title} - Completed</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
