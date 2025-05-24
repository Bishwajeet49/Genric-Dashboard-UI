import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function DashboardNavbar({ showMiniSidebar, setShowMiniSidebar }) {
    return (
        <div className='h-full w-full bg-white py-1'>
            <div className='flex h-full w-full items-center gap-1'>

                <div className='w-12 md:w-24 h-full flex items-center justify-center  z-[4]  '>
                    {/* this button will be used to toggle the sidebar */}
                    <button
                        className='group text-xl p-1 rounded-full hover:bg-dark-200 transition-all duration-200 active:bg-dark-400 transform hover:scale-105 bg-dark-100 border border-dark-300'
                        onClick={() => setShowMiniSidebar(!showMiniSidebar)}
                    >
                        {!showMiniSidebar ?
                            <MdOutlineKeyboardDoubleArrowLeft className='text-dark-400 group-hover:text-dark-600 transition-colors h-5 w-5' /> :
                            <MdOutlineKeyboardDoubleArrowRight className='text-dark-400 group-hover:text-dark-600 transition-colors h-5 w-5' />
                        }
                    </button>
                </div>

                <div className="flex-1 h-full flex justify-between pr-4">
                    {/* logo */}
                    <div className='h-full w-auto py-2 z-[4] '>
                        <img src={"/full-logo.png"} alt="logo" className='h-full w-auto' />
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center">
                        <button className="xxsm:hidden relative p-2 text-dark-600 hover:text-primary focus:outline-none">
                            <FiBell size={20} />
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
                        </button>
                        <div className="ml-4 flex items-center">
                            <div className="text-right mr-3 hidden sm:block">
                                <p className="text-sm font-medium text-dark-700">John Doe</p>
                                <p className="text-xs text-dark-500">Event Organizer</p>
                            </div>
                            <FaUserCircle size={32} className="text-primary" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}