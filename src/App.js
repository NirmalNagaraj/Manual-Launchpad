import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import Files from './pages/Files/Index';
import Investment from './pages/Investment';
import Scheduler from './pages/Scheduler';
import Tasks from './pages/Tasks';
import Community from './pages/Community';
import CustomerService from './pages/CustomerService';
import Navbar from './components/Navbar/Navbar';
import EditProfile from './pages/EditProfile';
import Subscription from './pages/Subscription';
import Notification from './pages/Notification';
import CalendarPage from './pages/CalendarPage';
import AdminDashboard from './pages/AdminDashboard';
import StudentProfile from './pages/StudentProfile';
import Help from './pages/Help';
import TermsAndPolicies from './pages/TermsAndPolicies';
import Report from './pages/Report';
import Security from './pages/Security';
import Privacy from './pages/Privacy';
import Logout from './pages/Logout';
import FeedbackForm from './pages/FeedbackForm';
import Settings from './pages/Settings';
import Funding from './pages/Funding';

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
