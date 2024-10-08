import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accommodation from "./pages/Accommodation/Accommodation";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import App from "./app";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <main>
      <App />
    </main>
    <Footer />
  </Router>
);
