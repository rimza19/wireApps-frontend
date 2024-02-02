import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const MenPage = React.lazy(() => import("./pages/MenPage"));
const WomenPage = React.lazy(() => import("./pages/WomenPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-clothing" element={<MenPage />} />
          <Route path="/womens-clothing" element={<WomenPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

