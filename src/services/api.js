import axios from 'axios';

// Axios instance for future backend integration.
const api = axios.create({
  baseURL: 'https://api.example.com'
});

// API placeholders to wire backend endpoints later.
export const authApi = {
  login: (payload) => api.post('/auth/login', payload),
  signup: (payload) => api.post('/auth/signup', payload)
};

export const internshipApi = {
  listInternships: () => api.get('/internships'),
  applyToInternship: (id, payload) => api.post(`/internships/${id}/apply`, payload)
};

export default api;
