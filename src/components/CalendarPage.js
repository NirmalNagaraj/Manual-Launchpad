

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
    <div className="body-calendar">
    <div className="calendar-page">
      <h1 className="header">Event Schedule</h1>
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
            <Link to="/past-events" className="events-button">Past Events</Link>
            <Link to="/host-event" className="events-button">Host Event</Link>
          </div>
          <div className="events-content">
            <h2 className="section-header">Upcoming Events</h2>
            {selectedEvent ? (
              <div className="event-detail">
                <h3>{selectedEvent.title}</h3>
                <p>{selectedDate.toDateString()}</p>
              </div>
            ) : (
              <p>No Events, Visit Us Later</p>
            )}
            <h2 className="section-header">Past Events</h2>
            <div className="past-events">
              {events.map((event, index) => (
                <div className="event-item" key={index}>
                  <img src="https://via.placeholder.com/150" alt={`Event ${index + 1}`} />
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CalendarPage;
