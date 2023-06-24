import axios from 'axios';

export const api = axios.create({
  baseURL: "https://continuous-learning-finance-2x053jewr-claraferreirabatista.vercel.app/api"
});
