import axios from 'axios';

export const api = axios.create({
  baseURL: "https://finance-app-ruby.vercel.app/api"
});
