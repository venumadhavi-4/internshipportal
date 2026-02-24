import React, { useState } from 'react';
import { initialStudentProfile } from '../../utils/mockData';
import { getStored, setStored } from '../../utils/localState';

function StudentProfilePage() {
  const [profile, setProfile] = useState(getStored('studentProfile', initialStudentProfile));
  const [message, setMessage] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    // Backend profile save API will be connected here.
    setStored('studentProfile', profile);
    setMessage('Profile saved locally. Ready for backend integration.');
  };

  return (
    <main className="container">
      <h2>Student Profile</h2>
      <form className="card" onSubmit={handleSave}>
        <label>Name<input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} /></label>
        <label>Email<input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} /></label>
        <label>Phone<input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} /></label>

        <label>Skills (comma separated broad skills)
          <input
            value={profile.skills.join(', ')}
            onChange={(e) => setProfile({ ...profile, skills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
          />
        </label>

        <label>Projects (format: title|description|tech ; separate by comma)
          <input
            value={profile.projects.map((p) => `${p.title}|${p.description}|${p.techUsed}`).join(', ')}
            onChange={(e) => {
              const projects = e.target.value.split(',').map((item) => {
                const [title = '', description = '', techUsed = ''] = item.split('|').map((x) => x.trim());
                return { title, description, techUsed };
              }).filter((p) => p.title);
              setProfile({ ...profile, projects });
            }}
          />
        </label>

        <label>Certifications (format: name|organization)
          <input
            value={profile.certifications.map((c) => `${c.name}|${c.organization}`).join(', ')}
            onChange={(e) => {
              const certifications = e.target.value.split(',').map((item) => {
                const [name = '', organization = ''] = item.split('|').map((x) => x.trim());
                return { name, organization };
              }).filter((c) => c.name);
              setProfile({ ...profile, certifications });
            }}
          />
        </label>

        <label>Experience (format: technology|years)
          <input
            value={profile.experience.map((exp) => `${exp.technology}|${exp.years}`).join(', ')}
            onChange={(e) => {
              const experience = e.target.value.split(',').map((item) => {
                const [technology = '', years = 0] = item.split('|').map((x) => x.trim());
                return { technology, years: Number(years) || 0 };
              }).filter((exp) => exp.technology);
              setProfile({ ...profile, experience });
            }}
          />
        </label>

        <button type="submit">Save Profile</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}

export default StudentProfilePage;
