import React from 'react';
import { NavLink } from 'react-router-dom';
import BellFilled from './icon/BellFilled';
import userImg from '../assets/images/ibnu.png';

const TopBar = () => {
  return (
    <div className="bg-white p-5 rounded-xl flex fixed top-5 right-5 left-[270px] items-center">
      <div className="space-x-28 grow pl-20">
        <NavLink
          to={'/dashboard'}
          className={({ isActive }) =>
            `font-bold hover:tex  t-primary ${
              isActive ? 'text-primary' : 'text-[#9696BB]'
            }`
          }
        >
          AjarinAku
        </NavLink>
        <NavLink
          to={'/champion'}
          className={({ isActive }) =>
            `font-bold hover:text-red-500 ${
              isActive ? 'text-primary' : 'text-[#9696BB]'
            }`
          }
        >
          AjarinChampion
        </NavLink>
      </div>
      <div className="flex flex-row gap-7 items-center px-5">
        <BellFilled
          className={
            'size-6 cursor-pointer hover:text-orange-500 text-[#9696BB] transition duration-200'
          }
        />
        <img
          src={userImg}
          alt="user"
          className="size-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TopBar;
