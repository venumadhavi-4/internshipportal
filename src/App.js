import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfilePage from './pages/student/StudentProfilePage';
import InternshipListingPage from './pages/student/InternshipListingPage';
import AppliedInternshipsPage from './pages/student/AppliedInternshipsPage';
import StudentTasksPage from './pages/student/StudentTasksPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddInternshipPage from './pages/admin/AddInternshipPage';
import ApplicantManagementPage from './pages/admin/ApplicantManagementPage';
import AdminTasksPage from './pages/admin/AdminTasksPage';
import ProtectedRoute from './routes/ProtectedRoute';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/profile"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/internships"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <InternshipListingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/applied"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <AppliedInternshipsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/tasks"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentTasksPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/internships"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AddInternshipPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/applicants"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <ApplicantManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tasks"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminTasksPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
