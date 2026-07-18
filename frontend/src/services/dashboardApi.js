import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getStats = () => axios.get(`${API}/dashboard/stats`);

export const getCategories = () =>
  axios.get(`${API}/dashboard/categories`);

export const getStates = () =>
  axios.get(`${API}/dashboard/states`);

export const getLatest = () =>
  axios.get(`${API}/dashboard/latest`);

export const getMinistries = () =>
  axios.get(`${API}/dashboard/ministries`);