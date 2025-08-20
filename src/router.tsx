import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Resume from "./pages/Resume"

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
)

export default AppRouter