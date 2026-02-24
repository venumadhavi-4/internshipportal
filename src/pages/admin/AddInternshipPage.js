import React, { useState } from 'react';
import { mockInternships } from '../../utils/mockData';

function AddInternshipPage() {
  const [internships, setInternships] = useState(mockInternships);
  const [form, setForm] = useState({
    title: '',
    description: '',
    requiredSkills: '',
    experienceRequired: 'No',
    minYears: 0
  });

  const handleAdd = (event) => {
    event.preventDefault();
    const newInternship = {
      id: Date.now(),
      title: form.title,
      companyName: 'Current Admin',
      requiredSkills: form.requiredSkills.split(',').map((s) => s.trim()).filter(Boolean),
      experienceRequired: form.experienceRequired === 'Yes',
      minYears: Number(form.minYears) || 0,
      status: 'Open'
    };
    // Backend create internship API call goes here.
    setInternships([newInternship, ...internships]);
    setForm({ title: '', description: '', requiredSkills: '', experienceRequired: 'No', minYears: 0 });
  };

  const handleDelete = (id) => {
    // Backend delete internship API call goes here.
    setInternships(internships.filter((item) => item.id !== id));
  };

  const toggleStatus = (id) => {
    // Backend update internship API call goes here.
    setInternships(internships.map((item) => item.id === id ? { ...item, status: item.status === 'Open' ? 'Closed' : 'Open' } : item));
  };

  return (
    <main className="container">
      <h2>Add / Edit / Delete Internship</h2>
      <form className="card" onSubmit={handleAdd}>
        <label>Title<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></label>
        <label>Description<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></label>
        <label>Required Skills (comma separated)<input value={form.requiredSkills} onChange={(e) => setForm({ ...form, requiredSkills: e.target.value })} required /></label>
        <label>Experience Required
          <select value={form.experienceRequired} onChange={(e) => setForm({ ...form, experienceRequired: e.target.value })}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>
        {form.experienceRequired === 'Yes' && (
          <label>Minimum Years<input type="number" value={form.minYears} onChange={(e) => setForm({ ...form, minYears: e.target.value })} /></label>
        )}
        <button type="submit">Add Internship</button>
      </form>

      <section className="grid">
        {internships.map((internship) => (
          <article key={internship.id} className="card">
            <h3>{internship.title}</h3>
            <p>{internship.requiredSkills.join(', ')}</p>
            <p>Status: {internship.status}</p>
            <button type="button" onClick={() => toggleStatus(internship.id)}>Edit Status</button>
            <button type="button" onClick={() => handleDelete(internship.id)}>Delete</button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AddInternshipPage;
