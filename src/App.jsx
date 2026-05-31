import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, WelcomeScreen } from "./components";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_VERSION_KEY = "portfolio-theme-version";
const THEME_VERSION = "2";
const DEFAULT_THEME = "earth";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
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

  useEffect(() => {
    document.body.classList.toggle("welcome-active", showWelcome);

    return () => {
      document.body.classList.remove("welcome-active");
    };
  }, [showWelcome]);

  return (
    <BrowserRouter>
      <div className='relative z-0 text-white'>
        <AnimatePresence>
          {showWelcome && (
            <WelcomeScreen
              onStart={() => {
                setShowPortfolio(true);
                setShowWelcome(false);
              }}
            />
          )}
        </AnimatePresence>
        {showPortfolio && (
          <>
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
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
