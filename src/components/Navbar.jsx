import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, themeOptions } from "../constants";
import { logo, menu, close } from "../assets";

const ThemeButton = ({ theme, isActive, onClick }) => (
  <button
    type='button'
    onClick={() => onClick(theme.id)}
    className={`theme-option ${isActive ? "theme-option-active" : ""}`}
    title={theme.name}
  >
    <span className='theme-option-swatch' style={{ background: theme.swatch }} />
    <span>{theme.name}</span>
  </button>
);

const Navbar = ({ currentTheme, setCurrentTheme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "nav-shell-scrolled" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex tracking-[-0.02em]'>
            Riju &nbsp;
            <span className='sm:block hidden theme-soft-text'> | developer portfolio</span>
          </p>
        </Link>

        <div className='hidden sm:flex items-center gap-4'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='relative'>
            <button
              type='button'
              onClick={() => setThemeOpen((prev) => !prev)}
              className='theme-trigger'
            >
              <span className='theme-trigger-dot' />
              <span>Theme</span>
            </button>

            <div className={`${themeOpen ? "flex" : "hidden"} theme-popover`}>
              {themeOptions.map((theme) => (
                <ThemeButton
                  key={theme.id}
                  theme={theme}
                  isActive={currentTheme === theme.id}
                  onClick={(themeId) => {
                    setCurrentTheme(themeId);
                    setThemeOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-3'>
          <button
            type='button'
            onClick={() => setThemeOpen((prev) => !prev)}
            className='theme-trigger theme-trigger-mobile'
          >
            <span className='theme-trigger-dot' />
          </button>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className='sm:hidden'>
          <div
            className={`${
              !themeOpen ? "hidden" : "grid"
            } theme-popover-mobile`}
          >
            {themeOptions.map((theme) => (
              <ThemeButton
                key={theme.id}
                theme={theme}
                isActive={currentTheme === theme.id}
                onClick={(themeId) => {
                  setCurrentTheme(themeId);
                  setThemeOpen(false);
                }}
              />
            ))}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 glass-panel absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
