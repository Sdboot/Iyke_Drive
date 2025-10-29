import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx"; 
import EssentialCarMaintenance from "./blog/essential-car-maintenance";
import CurrentAutoMarketTrends from "./blog/current-auto-market-trends";
import TopCarsOf2025 from "./blog/top-cars-of-2025";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/essential-car-maintenance" element={<EssentialCarMaintenance />} />
          <Route path="/blog/current-auto-market-trends" element={<CurrentAutoMarketTrends />} />
          <Route path="/blog/top-cars-of-2025" element={<TopCarsOf2025 />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);