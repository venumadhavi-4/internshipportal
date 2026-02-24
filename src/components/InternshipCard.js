import React from 'react';

function InternshipCard({ internship, onApply }) {
  return (
    <article className="card">
      <h3>{internship.title}</h3>
      <p><strong>Company/Admin:</strong> {internship.companyName}</p>
      <p><strong>Required Skills:</strong> {internship.requiredSkills.join(', ')}</p>
      <p><strong>Experience Required:</strong> {internship.experienceRequired ? 'Yes' : 'No'}</p>
      <p><strong>Status:</strong> {internship.status}</p>
      <button type="button" onClick={() => onApply(internship)} disabled={internship.status !== 'Open'}>
        Apply
      </button>
    </article>
  );
}

export default InternshipCard;
