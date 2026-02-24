import React, { useState } from 'react';
import InternshipCard from '../../components/InternshipCard';
import { mockInternships, mockApplications, initialStudentProfile } from '../../utils/mockData';
import { getStored, setStored } from '../../utils/localState';

function InternshipListingPage() {
  const [internships] = useState(mockInternships);
  const [message, setMessage] = useState('');

  const applyToInternship = (internship) => {
    const profile = getStored('studentProfile', initialStudentProfile);
    const applications = getStored('studentApplications', mockApplications);

    const normalizedSkills = profile.skills.map((skill) => skill.toLowerCase());
    const allSkillsMatch = internship.requiredSkills.every((skill) => normalizedSkills.includes(skill.toLowerCase()));

    if (!allSkillsMatch) {
      setMessage('Skills not matched. Please update your profile skills.');
      return;
    }

    let experienceAnswer = null;
    if (internship.experienceRequired) {
      const answer = window.prompt('How many years of experience do you have in this technology?');
      experienceAnswer = Number(answer) || 0;
    }

    const existing = applications.find((item) => item.internshipId === internship.id);
    if (existing) {
      setMessage('You already applied to this internship.');
      return;
    }

    const nextApplications = [
      ...applications,
      {
        internshipId: internship.id,
        internshipTitle: internship.title,
        status: 'Submitted',
        feedback: 'Application submitted successfully.',
        experienceAnswer
      }
    ];

    // Backend apply internship API will be integrated here.
    setStored('studentApplications', nextApplications);
    setMessage('Application submitted. Track status in Applied page.');
  };

  return (
    <main className="container">
      <h2>Internship Listings</h2>
      {message && <p>{message}</p>}
      <section className="grid">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} onApply={applyToInternship} />
        ))}
      </section>
    </main>
  );
}

export default InternshipListingPage;
