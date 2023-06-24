import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://continuous-learning-finance-app.vercel.app/'
})