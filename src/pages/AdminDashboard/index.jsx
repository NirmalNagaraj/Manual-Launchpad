import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const students = [
  { id: 1, name: 'John Doe', tasksCompleted: 15, tasksPending: 5 },
  { id: 2, name: 'Jane Smith', tasksCompleted: 10, tasksPending: 10 },
  { id: 3, name: 'Michael Johnson', tasksCompleted: 20, tasksPending: 2 },
];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="content-wrapper">
        <div className="header">
          <h1 className='text'>Admin Dashboard</h1>
          <p className='text'>Overview of student tasks and profiles</p>
        </div>
        <div className="stats-container">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{students.length}</h3>
              <p>Total Students</p>
            </div>
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
          </div>
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                {students.reduce((acc, student) => acc + student.tasksCompleted, 0)}
              </h3>
              <p>Tasks Completed</p>
            </div>
            <div className="icon">
              <i className="fas fa-check"></i>
            </div>
          </div>
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>
                {students.reduce((acc, student) => acc + student.tasksPending, 0)}
              </h3>
              <p>Tasks Pending</p>
            </div>
            <div className="icon">
              <i className="fas fa-tasks"></i>
            </div>
          </div>
        </div>
        <div className="student-table">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Tasks Completed</th>
                <th>Tasks Pending</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.tasksCompleted}</td>
                  <td>{student.tasksPending}</td>
                  <td>
                    <Link to={`/student/${student.id}`} className="btn btn-primary">View Profile</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
