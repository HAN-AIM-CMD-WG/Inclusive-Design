import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ProjectsPage from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
