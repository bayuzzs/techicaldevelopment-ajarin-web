import ajarin from '../assets/ajarin.png';
import { NavLink } from 'react-router-dom';
import Home from './icon/Home';
import Book from './icon/Book';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <div className="w-[250px] px-5 h-[100vh] top-0 fixed py-10 bg-white">
      <div className="px-5">
        <img src={ajarin} alt="ajarin" />
      </div>
      <div className="mt-10 px-5 space-y-5">
        <SidebarLink name={'Beranda'} to={'/dashboard'} Icon={Home} />
        <SidebarLink name={'Belajar'} to={'/home'} Icon={Book} haveMenu={true}>
          <NavLink
            to={'/kelasku'}
            className={({ isActive }) =>
              `font-bold hover:text-primary flex flex-row items-center gap-3 
      ${isActive ? 'text-primary' : 'text-[#9696BB]'}`
            }
          >
            KelasKu
          </NavLink>
          <NavLink
            to={'/carikelas'}
            className={({ isActive }) =>
              `font-bold hover:text-primary flex flex-row items-center gap-3 
      ${isActive ? 'text-primary' : 'text-[#9696BB]'}`
            }
          >
            Cari Kelas
          </NavLink>
        </SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
