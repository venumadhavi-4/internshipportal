import React from 'react';

function AdminTasksPage() {
  // UI-only structure for assigning tasks and monitoring progress.
  const assignedTasks = [
    { id: 1, intern: 'Aarav Student', task: 'Build Authentication Screens', status: 'Pending' },
    { id: 2, intern: 'Maya User', task: 'Create Internship Listing UI', status: 'In Progress' },
    { id: 3, intern: 'Ravi Learner', task: 'Document API Endpoints', status: 'Completed' }
  ];

  return (
    <main className="container">
      <h2>Task Assignment & Progress (UI Only)</h2>
      <section className="card">
        <h3>Assign New Task</h3>
        <label>Student Name<input placeholder="Select student" /></label>
        <label>Task Description<textarea rows={3} placeholder="Define task" /></label>
        <button type="button">Assign Task (API Placeholder)</button>
      </section>
      <section className="grid">
        {assignedTasks.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.task}</h3>
            <p><strong>Student:</strong> {item.intern}</p>
            <p><strong>Status:</strong> {item.status}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AdminTasksPage;
