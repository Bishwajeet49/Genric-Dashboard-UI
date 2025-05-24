import React from 'react';
import { Link } from 'react-router-dom';

const SidebarSubmenu = ({ item, isOpen, location }) => {
  return (
    <div className="relative mt-2 ml-7 space-y-1 pb-1">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-dark-200 rounded-full"></div>
      
      <div className="pl-6">
        {item.children.map((child, childIndex) => (
          <Link
            key={childIndex}
            to={child.path}
            className={`flex items-center px-3 py-2 rounded-md text-sm group/child relative ${
              location.pathname.includes(child.path)
                ? 'text-primary bg-primary bg-opacity-5 font-medium'
                : 'text-dark-500 hover:text-primary hover:bg-dark-100'
            }`}
          >
            {/* Horizontal connector */}
            <div className="absolute left-0 top-1/2 w-3 h-0.5 bg-dark-200 -translate-x-3 -translate-y-1/2"></div>
            
            <child.icon className={`w-4 h-4 mr-3 ${!location.pathname.includes(child.path) && 'group-hover/child:text-primary'}`} />
            <span className={`${!location.pathname.includes(child.path) && 'group-hover/child:text-primary'}`}>{child.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarSubmenu; 