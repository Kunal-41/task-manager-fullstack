// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  BASE: API_BASE_URL,
  AUTH: {
    REGISTER: `${API_BASE_URL}/api/register`,
    LOGIN: `${API_BASE_URL}/api/login`,
  },
  TASKS: {
    BASE: `${API_BASE_URL}/api/tasks`,
    CREATE: `${API_BASE_URL}/api/tasks`,
    GET_ALL: `${API_BASE_URL}/api/tasks`,
    UPDATE: (id) => `${API_BASE_URL}/api/tasks/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/tasks/${id}`,
  }
};

// HTTP client configuration
export const createAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default API_ENDPOINTS;
