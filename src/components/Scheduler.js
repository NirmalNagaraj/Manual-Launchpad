import React, { useState } from 'react';
import './Scheduler.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Scheduler = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    purpose: ''
  });
  const [meetings, setMeetings] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      purpose: formData.purpose
    };
    setMeetings([...meetings, newMeeting]);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      purpose: ''
    });
    alert('Meeting scheduled successfully!');
  };

  const renderMeetingDetails = (date) => {
    const meetingsOnDate = meetings.filter((meeting) => meeting.date === formatDate(date));
    return meetingsOnDate.map((meeting, index) => (
      <div key={index} className="meeting-tooltip">
        <p><strong>{meeting.name}</strong></p>
        <p><strong>Time:</strong> {meeting.time}</p>
        <p><strong>Purpose:</strong> {meeting.purpose}</p>
      </div>
    ));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="scheduler-container">
      <div className="scheduler-form">
        <h2>Schedule a Meeting</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
                                <label htmlFor="phoneNo">Phone No</label>
                                <input type="tel" id="phoneNo" name="phoneNo" />
                            </div>
          <div className="form-group">
            <label htmlFor="purpose">Purpose:</label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Schedule Meeting</button>
        </form>
      </div>
      <div className="scheduler-details">
        <div className="upcoming-meetings">
          <h2>Upcoming Meetings</h2>
          <div className="meeting-list">
            {meetings.length > 0 ? (
              meetings.map((meeting, index) => (
                <div key={index} className="meeting">
                  <p><strong>{meeting.name}</strong></p>
                  <p><strong>Date:</strong> {meeting.date}</p>
                  <p><strong>Time:</strong> {meeting.time}</p>
                  <p><strong>Purpose:</strong> {meeting.purpose}</p>
                </div>
              ))
            ) : (
              <p>No upcoming meetings</p>
            )}
          </div>
        </div>
        <div className="past-meetings">
          <h2>Past Meetings</h2>
          <div className="meeting-list">
            {/* Dummy content for past meetings */}
            <div className="meeting">
              <p><strong>John Doe</strong></p>
              <p><strong>Date:</strong> 2024-06-30</p>
              <p><strong>Time:</strong> 10:00 AM</p>
              <p><strong>Purpose:</strong> Project discussion</p>
            </div>
            <div className="meeting">
              <p><strong>Jane Smith</strong></p>
              <p><strong>Date:</strong> 2024-06-29</p>
              <p><strong>Time:</strong> 3:00 PM</p>
              <p><strong>Purpose:</strong> Quarterly review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
