import React from 'react'
import AuthHeader from './AuthHeader';
import AuthFooter from './AuthFooter';
import { Outlet } from 'react-router-dom';


export default function AuthLayout() {
  return (
    <div>
        <AuthHeader />
        <Outlet />
        <AuthFooter />
    </div>
  )
}
