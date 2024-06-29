import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import Settings from './components/Settings';
import Files from './components/Files';
import Investment from './components/Investment';
import Scheduler from './components/Scheduler';
import Tasks from './components/Tasks';
import Community from './components/Community';
import CustomerService from './components/CustomerService';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Subscription from './components/Subscription';
import Notification from './components/Notification';
import CalendarPage from './components/CalendarPage';
import AdminDashboard from './components/AdminDashboard';
import StudentProfile from './components/StudentProfile';
import Help from './components/Help';
import TermsAndPolicies from './components/TermsAndPolicies';
import Report from './components/Report';
import Security from './components/Security';
import Privacy from './components/Privacy';
import Logout from './components/Logout';
import FeedbackForm from './components/FeedbackForm';
import ServicePage from './components/ServicePage';
import Funding from './components/Funding';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'Kiruthika M',
        email: 'kiru@05.com',
        phone: '6382981249',
      });
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <SideMenu />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/student/:id" element={<StudentProfile />} />
            <Route path="/files" element={<Files />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/scheduler" element={<Scheduler />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/community" element={<Community />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/calendarpage" element={<CalendarPage />} />
            <Route path="/mysubscription" element={<Subscription />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/edit-profile" element={<EditProfile user={user} />} />
            <Route path="/help" element={<Help />} />
            <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
            <Route path="/report" element={<Report />} />
            <Route path="/security" element={<Security />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/feedbackform" element={<FeedbackForm />} />
            <Route path="/funding" element={<Funding />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
