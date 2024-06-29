import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import './CalendarPage.css';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { date: '2024-06-25', title: 'Meeting with Team' },
    { date: '2024-07-01', title: 'Project Deadline' },
    { date: '2024-07-04', title: 'Client Presentation' },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const event = events.find((event) => event.date === date.toISOString().split('T')[0]);
    setSelectedEvent(event);
  };

  return (
    <div className="calendar-page">
      <h1 className="header">The Events</h1>
      <div className="content">
        <div className="calendar-sidebar">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={({ date, view }) => {
              const event = events.find((event) => event.date === date.toISOString().split('T')[0]);
              return event ? <div className="event-indicator" /> : null;
            }}
            tileClassName={({ date, view }) => {
              const event = events.find((event) => event.date === date.toISOString().split('T')[0]);
              return event ? 'event-date' : '';
            }}
          />
        </div>
        <div className="event-details-container">
          <div className="buttons-container">
            <Link to="/upcoming-events" className="events-button">Upcoming Events</Link>
            <Link to="/past-events" className="events-button">View All Past Events</Link>
          </div>
          <div className="events-content">
            <h2 className="section-header">Upcoming Events</h2>
            <p>No Events, Visit us Later</p>
            <h2 className="section-header">Past Events</h2>
            <div className="past-events">
              <div className="event-item">
                <img src="path/to/dummy/image1.jpg" alt="Event 1" />
                <div>
                  <h3>Event 1</h3>
                  <p>2024-05-11</p>
                </div>
              </div>
              <div className="event-item">
                <img src="path/to/dummy/image2.jpg" alt="Event 2" />
                <div>
                  <h3>Event 2</h3>
                  <p>2024-05-11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
