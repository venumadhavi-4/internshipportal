export const mockInternships = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    companyName: 'Mentor Labs',
    requiredSkills: ['Web Development', 'UI Design'],
    experienceRequired: true,
    minYears: 1,
    status: 'Open'
  },
  {
    id: 2,
    title: 'Python Automation Intern',
    companyName: 'RemoteOps',
    requiredSkills: ['Python'],
    experienceRequired: false,
    minYears: 0,
    status: 'Open'
  },
  {
    id: 3,
    title: 'Java Backend Intern',
    companyName: 'CloudSphere',
    requiredSkills: ['Java'],
    experienceRequired: true,
    minYears: 2,
    status: 'Closed'
  }
];

export const mockApplications = [
  {
    internshipId: 1,
    internshipTitle: 'Frontend Developer Intern',
    status: 'Submitted',
    feedback: 'Resume reviewed. Awaiting mentor interview.'
  },
  {
    internshipId: 2,
    internshipTitle: 'Python Automation Intern',
    status: 'Accepted',
    feedback: 'Great profile and project relevance.'
  },
  {
    internshipId: 3,
    internshipTitle: 'Java Backend Intern',
    status: 'Not Qualified',
    feedback: 'Experience requirement is not met.'
  }
];

export const initialStudentProfile = {
  name: 'Aarav Student',
  email: 'student@example.com',
  phone: '9999999999',
  skills: ['Web Development'],
  projects: [{ title: 'Portfolio Site', description: 'Personal portfolio', techUsed: 'React, CSS' }],
  certifications: [{ name: 'Frontend Basics', organization: 'Open Learning' }],
  experience: [{ technology: 'Web Development', years: 1 }]
};
