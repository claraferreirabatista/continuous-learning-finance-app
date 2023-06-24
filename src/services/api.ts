import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost3000/api',
  baseURL: "https://finance-app-ruby.vercel.app/api"
});
