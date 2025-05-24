import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'
import DashboardSidebarBelowXl from './DashboardSidebarBelowXl.jsx'
export default function DashboardLayout() {
  const [showMiniSidebar, setShowMiniSidebar] = useState(false)
  return (
   <main className='h-screen w-full flex flex-col relative'>

    <nav className='h-16 w-full'>
        <DashboardNavbar showMiniSidebar={showMiniSidebar} setShowMiniSidebar={setShowMiniSidebar} />
    </nav>

    <div className='flex w-full flex-1 overflow-hidden '>

        {/* Sidebar working on xl screen size and above */}
        <aside className={`${showMiniSidebar ? 'w-24' : 'w-64'} h-full transition-all duration-300 xl:block hidden`}>
            <DashboardSidebar showMiniSidebar={showMiniSidebar} />
        </aside>

        {/* Sidebar working on  screen size below xl */}
        <aside className={`${showMiniSidebar ? ' md:w-24' : 'w-auto'} h-full transition-all duration-300  xl:hidden block`}>
            <DashboardSidebarBelowXl showMiniSidebar={showMiniSidebar} setShowMiniSidebar={setShowMiniSidebar} />
        </aside>

        <div className='flex-1 p-4  rounded-tl-2xl rounded-2xl  bg-primaryBg m-2 md:m-0 md:mr-2 md:mb-2'>
            <h1>Main Content Goes Here</h1>
            <Outlet />
        </div>

    </div>

    {/* overlay for the sidebar  below xl screen size */}

    {!showMiniSidebar?
        <div onClick={() => setShowMiniSidebar(true)} className="block xl:hidden fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-[2]"></div>
    :null}
   </main>
  )
}
