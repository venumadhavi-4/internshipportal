import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProfileCompletion from '../../components/ProfileCompletion';
import { mockInternships, mockApplications, initialStudentProfile } from '../../utils/mockData';
import { getStored } from '../../utils/localState';

function StudentDashboard() {
  const profile = useMemo(() => getStored('studentProfile', initialStudentProfile), []);
  const applications = useMemo(() => getStored('studentApplications', mockApplications), []);

  return (
    <main className="container">
      <h2>Student Dashboard</h2>
      <ProfileCompletion profile={profile} />
      <section className="grid">
        <div className="card">
          <h3>Available Internships</h3>
          <p>{mockInternships.filter((item) => item.status === 'Open').length}</p>
          <Link to="/student/internships">View Internships</Link>
        </div>
        <div className="card">
          <h3>Applied Internships</h3>
          <p>{applications.length}</p>
          <Link to="/student/applied">Track Status</Link>
        </div>
      </section>
    </main>
  );
}

export default StudentDashboard;
