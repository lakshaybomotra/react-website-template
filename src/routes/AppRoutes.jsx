import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import ProtectedRoute from './ProtectedRoute'

import Login from '../features/auth/pages/Login'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
