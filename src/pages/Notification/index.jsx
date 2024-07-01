import React from 'react';
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  console.log('Notification component rendered');

  const taskNotifications = [
    "Complete the frontend development task by 5 PM today.",
    "Submit the project report by the end of the week.",
    "Review the code for the new feature implementation."
  ];

  const companyUpdates = [
    "Company meeting scheduled for tomorrow at 10 AM.",
    "New policy updates have been released. Please review them.",
    "One year celebration."
  ];

  const eventInformation = [
    "Hackathon event on Saturday.",
    "Team building event next Friday.",
    "Web development workshop on the 20th."
  ];

  return (
    <div className="notification">
    <div className="notification-container">
      <div className="notification-column">
        <h2 className="topic-title"><FontAwesomeIcon icon={faTasks} /> Task Notifications</h2>
        <ul>
          {taskNotifications.map((notification, index) => (
            <li key={index}>
              {notification}
            </li>
          ))}
        </ul>
      </div>
      <div className="notification-column">
        <h2 className="topic-title"><FontAwesomeIcon icon={faBuilding} /> Company Updates</h2>
        <ul>
          {companyUpdates.map((update, index) => (
            <li key={index}>
              {update}
            </li>
          ))}
        </ul>
      </div>
      <div className="notification-column">
        <h2 className="topic-title"><FontAwesomeIcon icon={faCalendarAlt} /> Event Information</h2>
        <ul>
          {eventInformation.map((event, index) => (
            <li key={index}>
              {event}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Notification;
