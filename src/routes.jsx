import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Home'
import About from './pages/About'
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout.jsx'
export default function Router() {
  return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />

            {/* this group will contain the routes relted to onboarding and sigin-in */}
            <Route path='auth' element={<AuthLayout />}>

                <Route
                  path='sign-in'
                  element={<h1>Sign In</h1>}
                />
                {/* 				
                  <Route
                    path='forgot-password'
                    element={<ForgotPassword />}
                  /> */}

            </Route>

            {/* this will contain all the protacted routes related to the dashboard  */}
            <Route path='dashboard' element={<DashboardLayout />}>

              <Route path='home' element={<h1>Dashboard Home</h1>} />

            </Route>



        </Routes>
  )
}
