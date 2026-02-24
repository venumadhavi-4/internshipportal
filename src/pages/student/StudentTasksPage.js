import React from 'react';

function StudentTasksPage() {
  // UI-only task/progress structure. Backend task API will feed this list.
  const tasks = [
    { id: 1, title: 'Build Internship Landing Page', status: 'Pending', submission: '' },
    { id: 2, title: 'Create API Integration Plan', status: 'In Progress', submission: 'Draft ready.' },
    { id: 3, title: 'Submit Testing Report', status: 'Completed', submission: 'Submitted on portal.' }
  ];

  return (
    <main className="container">
      <h2>My Tasks & Progress</h2>
      <section className="grid">
        {tasks.map((task) => (
          <article key={task.id} className="card">
            <h3>{task.title}</h3>
            <p><strong>Status:</strong> {task.status}</p>
            <label>Submission (UI Placeholder)
              <textarea defaultValue={task.submission} rows={3} />
            </label>
            <button type="button">Submit Task (API Placeholder)</button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default StudentTasksPage;
