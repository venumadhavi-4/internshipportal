import React from 'react';
import { mockApplications } from '../../utils/mockData';
import { getStored } from '../../utils/localState';

function AppliedInternshipsPage() {
  const applications = getStored('studentApplications', mockApplications);

  return (
    <main className="container">
      <h2>Applied Internships Status</h2>
      <section className="grid">
        {applications.map((item) => (
          <article key={item.internshipId} className="card">
            <h3>{item.internshipTitle}</h3>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Admin Feedback:</strong> {item.feedback || 'No feedback yet.'}</p>
            {item.experienceAnswer !== null && item.experienceAnswer !== undefined ? (
              <p><strong>Experience Answer:</strong> {item.experienceAnswer} years</p>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}

export default AppliedInternshipsPage;
