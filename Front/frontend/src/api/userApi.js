
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/';

export const fetchUsers = async (page = 1) => {
  const response = await axios.get(`${API_URL}?page=${page}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}${id}/`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}${id}/`);
  return response.data;
};
