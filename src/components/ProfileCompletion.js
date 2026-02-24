import React from 'react';

function ProfileCompletion({ profile }) {
  const checks = [
    profile.name,
    profile.email,
    profile.phone,
    profile.skills.length,
    profile.projects.length,
    profile.certifications.length,
    profile.experience.length
  ];

  const completed = checks.filter(Boolean).length;
  const percent = Math.round((completed / checks.length) * 100);

  return (
    <div className="card">
      <h3>Profile Completion</h3>
      <p>{percent}% complete</p>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProfileCompletion;
