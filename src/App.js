import React, { Suspense } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import PrivacyPolicy from "./routes/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/privacy-policy" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
