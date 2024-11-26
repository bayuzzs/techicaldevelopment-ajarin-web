import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowUp from './icon/ArrowUp';

const SidebarLink = ({ name, to, Icon, haveMenu, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="flex justify-between items-center group">
        {haveMenu ? (
          <button
            onClick={onClick}
            to={to}
            className={`font-bold group-hover:text-primary flex grow flex-row items-center gap-3 ]}`}
          >
            <Icon className={'text-[#9696BB] group-hover:text-primary'} />
            <p className="text-[#9696BB] group-hover:text-primary">{name}</p>
          </button>
        ) : (
          <NavLink
            to={to}
            className={({ isActive }) =>
              `font-bold hover:text-primary flex grow flex-row items-center gap-3 
      ${isActive ? 'text-primary' : 'text-[#9696BB]'}`
            }
          >
            <Icon />
            {name}
          </NavLink>
        )}
        {haveMenu && (
          <ArrowUp
            className={`text-[#9696BB] cursor-pointer group-hover:text-primary hover:text-primary transition duration-100 ${
              showMenu ? 'rotate-180' : ''
            }`}
            onClick={onClick}
          />
        )}
      </div>
      <div
        className={`px-5 mt-2 transition-all duration-100 overflow-hidden ${
          showMenu ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-row gap-4">
          <div className="w-1 bg-gray-200 items-stretch rounded-full"></div>
          <div className="flex flex-col gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLink;
