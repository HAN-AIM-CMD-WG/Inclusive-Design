import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateProjectPage from './components/CreateProject'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
