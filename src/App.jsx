import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_VERSION_KEY = "portfolio-theme-version";
const THEME_VERSION = "2";
const DEFAULT_THEME = "earth";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedVersion = localStorage.getItem(THEME_VERSION_KEY);
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedVersion !== THEME_VERSION) {
      localStorage.setItem(THEME_VERSION_KEY, THEME_VERSION);
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
      return DEFAULT_THEME;
    }

    return savedTheme || DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    localStorage.setItem(THEME_VERSION_KEY, THEME_VERSION);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className='relative z-0 text-white'>
        <div className='hero-shell bg-cover bg-no-repeat bg-center'>
          <Navbar currentTheme={theme} setCurrentTheme={setTheme} />
          <Hero currentTheme={theme} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0 section-wash'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
