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

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="top-boxes">
          <div className="meeting-details">
            <h3>Meeting Details</h3>
            <p>No upcoming meetings</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            
          </div>
          <div className="subscription-details">
            <h3>Subscription Details</h3>
            <p>No active subscriptions</p>
          </div>
          <div className="additional-box">
            <h3>Upcoming tasks</h3>
            <p>Details here</p>
            
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="additional-box">
            <h3>Pending tasks</h3>
            <p>Details here</p>
          </div>
        </div>
        <div className="date-and-notification">
          <div className="notification-box">
            <h3>Notifications</h3>
            <p>No new notifications</p>
          </div>
          <div className="date-picker">
            <Calendar />
          </div>
        </div>
      </header>

      <div className="progress-bars">
        {/* Progress bar sections */}
        <div className="progress-bar">
          <h3>Total <br/>Stages</h3>
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
          <h3>Pending <br/>Works</h3>
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
          <h3>Achievments</h3>
          <ul>
            {upcomingTasks.map(task => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
        <div className="tips-and-tricks">
          <h3>Collabration</h3>
          <ul>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li>.</li>
            <li>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
