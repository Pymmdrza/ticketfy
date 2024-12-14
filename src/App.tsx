import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { TicketDetails } from './pages/TicketDetails';
import { Settings } from './pages/Settings';
import { NewTicket } from './pages/NewTicket';

function App() {
  // For demo purposes, let's assume the user is logged in
  const isLoggedIn = true;
  const isAdmin = true;

  return (
    <Routes>
      <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/dashboard" />} />
      
      {/* Protected Routes */}
      {isLoggedIn && (
        <>
          <Route path="/dashboard" element={isAdmin ? <AdminDashboard /> : <Dashboard />} />
          <Route path="/tickets/new" element={<NewTicket />} />
          <Route path="/tickets/:id" element={<TicketDetails />} />
          <Route path="/settings" element={<Settings />} />
        </>
      )}
      
      {/* Redirect to login if not authenticated */}
      <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
    </Routes>
  );
}

export default App;