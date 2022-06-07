import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'

export default function MainRoutes() {
  return (
    <Routes>
        {/* static routes */}
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
