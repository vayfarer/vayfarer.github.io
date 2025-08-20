import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Projects from "./pages/Projects"

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
)

export default AppRouter