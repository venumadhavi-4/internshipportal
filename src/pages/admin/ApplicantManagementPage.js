import React, { useState } from 'react';

function ApplicantManagementPage() {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      internshipTitle: 'Frontend Developer Intern',
      studentName: 'Aarav Student',
      skills: ['Web Development', 'UI Design'],
      projects: ['Portfolio Site'],
      certifications: ['Frontend Basics'],
      experienceAnswer: '1 year',
      status: 'Submitted',
      feedback: ''
    }
  ]);

  const updateStatus = (id, status) => {
    // Backend accept/reject applicant API will be integrated here.
    setApplicants(applicants.map((item) => item.id === id ? { ...item, status } : item));
  };

  const updateFeedback = (id, feedback) => {
    // Backend feedback API will be integrated here.
    setApplicants(applicants.map((item) => item.id === id ? { ...item, feedback } : item));
  };

  return (
    <main className="container">
      <h2>Applicant Management</h2>
      <section className="grid">
        {applicants.map((applicant) => (
          <article key={applicant.id} className="card">
            <h3>{applicant.studentName}</h3>
            <p><strong>Internship:</strong> {applicant.internshipTitle}</p>
            <p><strong>Skills:</strong> {applicant.skills.join(', ')}</p>
            <p><strong>Projects:</strong> {applicant.projects.join(', ')}</p>
            <p><strong>Certifications:</strong> {applicant.certifications.join(', ')}</p>
            <p><strong>Experience Answer:</strong> {applicant.experienceAnswer}</p>
            <p><strong>Status:</strong> {applicant.status}</p>
            <label>Feedback
              <textarea
                rows={3}
                value={applicant.feedback}
                onChange={(e) => updateFeedback(applicant.id, e.target.value)}
              />
            </label>
            <div>
              <button type="button" onClick={() => updateStatus(applicant.id, 'Accepted')}>Accept</button>
              <button type="button" onClick={() => updateStatus(applicant.id, 'Rejected')}>Reject</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ApplicantManagementPage;
