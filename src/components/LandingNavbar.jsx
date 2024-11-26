import { useState } from 'react';
import { Link } from 'react-router-dom';
import ajarin from '../assets/ajarin.png';

const HamburgerLine = ({ showMenu, origin, action }) => {
  return (
    <span
      className={`hamburger-item top my-2 block h-0.5 w-[30px] ${origin} bg-black duration-300 ${
        showMenu ? action : ''
      }`}
    ></span>
  );
};

const NavItem = ({ href, name }) => {
  return (
    <li className="mx-5 my-4 block md:mx-5 md:my-0 md:inline-block">
      <a href={href} className="hover:text-main">
        {name}
      </a>
    </li>
  );
};
const LandingNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky inset-0 z-[9999] bg-white px-5 shadow-[0_0_15px_15px_white]">
      <div className="mx-auto flex items-center justify-between px-5">
        <div className="py-[10px]">
          <Link to="/signin">
            <img
              className="w-[50px] md:w-[180px]"
              src={ajarin}
              alt="Ajarin"
              title="Home"
            />
          </Link>
        </div>
        <nav>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HamburgerLine
              showMenu={showMenu}
              origin="origin-top-left"
              action="rotate-45"
            />
            <HamburgerLine
              showMenu={showMenu}
              origin="origin-center"
              action="scale-0"
            />
            <HamburgerLine
              showMenu={showMenu}
              origin="origin-bottom-left"
              action="-rotate-45"
            />
          </div>
          <ul
            className={`absolute right-0 top-20 origin-top-right scale-0 rounded-xl border-2 border-solid border-base bg-white shadow-md duration-300 md:scale-100 ${
              showMenu ? 'scale-100' : ''
            } border-none md:static md:shadow-none `}
          >
            <NavItem href="#home" name="Beranda" />
            <NavItem href="#features" name="Fitur" />
            <NavItem href="#team" name="Tim" />
            <NavItem href="#contact" name="Kontak" />
            <li className="mx-5 my-4 block md:mx-5 md:my-0 md:inline-block">
              <Link
                to="/auth"
                className="login rounded-[20px] bg-primary px-[35px] py-[6px] font-bold text-white duration-300 hover:opacity-70"
              >
                Masuk
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default LandingNavbar;
