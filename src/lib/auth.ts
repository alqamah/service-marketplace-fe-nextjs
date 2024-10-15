import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'customer' | 'provider' | 'admin';
}

export interface AuthResponse {
  success: boolean;
  user: User;
  token: string;
}

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'provider';
}): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', userData);
  return response.data;
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', { email, password });
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
  // Remove token from local storage
  localStorage.removeItem('token');
};

export const getProfile = async (): Promise<User> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await api.get<{ success: boolean; data: User }>('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
};

export const updateProfile = async (userData: {
  address?: string;
  phone?: string;
}): Promise<User> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await api.post<{ success: boolean; user: User }>('/auth/profile', userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.user;
};

export const setAuthToken = (token: string): void => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

