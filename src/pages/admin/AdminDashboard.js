import React from 'react';
import { Link } from 'react-router-dom';
import { mockInternships } from '../../utils/mockData';

function AdminDashboard() {
  return (
    <main className="container">
      <h2>Admin Dashboard</h2>
      <section className="grid">
        <article className="card">
          <h3>Posted Internships</h3>
          <p>{mockInternships.length}</p>
          <Link to="/admin/internships">Add / Edit Internships</Link>
        </article>
        <article className="card">
          <h3>Applicant Management</h3>
          <p>Review applicants by internship</p>
          <Link to="/admin/applicants">Open Applicant Panel</Link>
        </article>
      </section>
    </main>
  );
}

export default AdminDashboard;
