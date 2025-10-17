// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppleStageChecker from "./pages/AppleVisualizer";
import Navbar from "./pages/Navbar";
import Viewer from "./pages/Viewer";
// import Footer from "./pages/Footer";
import AppleAR from "./pages/AppleAR";
import Stage0 from "./pages/stage0";
import Stage1 from "./pages/stage1";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visualizer" element={<Viewer />} />
            <Route path="/ar" element={<AppleAR />} />
            <Route path="/stage/0" element={<Stage0 />} />
            <Route path="/stage/1" element={<Stage1 />} />
            <Route path="/apple-visualizer" element={<AppleStageChecker />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
