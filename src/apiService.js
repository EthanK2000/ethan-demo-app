import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    
  },
});

export default {
  postProject(body) {
    return apiClient.post('/projects',body);
  },
  getProjects() {
    return apiClient.get('/projects');
  },
  getProject(id) {
    return apiClient.get(`/projects/${id}`);
  },
  putProject(id, body) {
    return apiClient.put(`/projects/${id}`,body);
  }
};
