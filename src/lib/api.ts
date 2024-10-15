import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (userData: any) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const getServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

export const getService = async (id: string) => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};

export const createService = async (serviceData: any, token: string) => {
  const response = await api.post('/services', serviceData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createBooking = async (bookingData: any, token: string) => {
  const response = await api.post('/bookings', bookingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getBookings = async (token: string) => {
  const response = await api.get('/bookings', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};