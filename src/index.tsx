import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from 'miragejs';


createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => [
      {
        id: 1,
        title: 'Freelance de website',
        amount: 100,
        type: "deposit",
        category: "dev",
        date: new Date(),
      },
      {
        id: 2,
        title: "Shopping",
        amount: 200,
        type: "withdraw",
        category: "clothings",
        date: new Date(),
      },
      {
        id: 3,
        title: "Shopping",
        amount: 300,
        type: "withdraw",
        category: "shoes",
        date: new Date(),
      },
    ]);
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
