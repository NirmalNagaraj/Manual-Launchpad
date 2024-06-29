import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentProfile.css';

const StudentProfile = () => {
  const { id } = useParams();
  
  
  const studentData = {
    1: {
      name: 'John Doe',
      email: 'john@example.com',
      completedTasks: 10,
      pendingTasks: 5,
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    2: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      completedTasks: 8,
      pendingTasks: 2,
      profile: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  };
  
  const student = studentData[id];
  
  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="student-profile">
      <h2>{student.name}</h2>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Completed Tasks:</strong> {student.completedTasks}</p>
      <p><strong>Pending Tasks:</strong> {student.pendingTasks}</p>
      <p><strong>Profile:</strong> {student.profile}</p>
    </div>
  );
};

export default StudentProfile;
