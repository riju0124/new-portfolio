import { motion } from "framer-motion";

import { themeOptions } from "../constants";
import { styles } from "../styles";
import SocialLinksBar from "./SocialLinksBar";

const mobileHighlights = [
  { label: "Focus", value: "Full stack + RAGE:MP" },
  { label: "Style", value: "Clean UI and motion" },
  { label: "Builds", value: "Web, systems, gameplay" },
];

const heroContentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroLineVariants = {
  hidden: {
    y: "110%",
  },
  show: {
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const Hero = ({ currentTheme = "earth" }) => {
  const activeTheme =
    themeOptions.find((theme) => theme.id === currentTheme)?.name || "Riju Classic";

  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>
      <div className='hero-orb hero-orb-left' />
      <div className='hero-orb hero-orb-right' />
      <div className='hero-grid-card hidden lg:block'>
        <div className='hero-grid-content'>
          <div className='hero-panel-shell'>
            <div className='hero-panel-chip'>{activeTheme}</div>
            <div className='hero-panel-line hero-panel-line-lg' />
            <div className='hero-panel-line hero-panel-line-md' />
            <div className='hero-panel-line hero-panel-line-sm' />
            <div className='hero-panel-stack'>
              <span>React</span>
              <span>Node</span>
              <span>RAGE:MP</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={heroContentVariants}
        initial='hidden'
        animate='show'
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-[112px] sm:pt-[132px] pb-24 flex flex-col sm:flex-row items-start gap-5 sm:gap-6`}
      >
        <div className='hidden sm:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full theme-accent-bg hero-accent-dot' />
          <div className='w-1 sm:h-96 h-52 violet-gradient' />
        </div>

        <div className='w-full max-w-4xl'>
          <motion.div
            variants={heroItemVariants}
            className='hero-badge theme-badge-text inline-flex rounded-full px-4 py-2 text-[11px] sm:text-[12px] uppercase tracking-[0.24em] sm:tracking-[0.28em]'
          >
            Full stack developer, UI builder, and RAGE:MP systems creator
          </motion.div>
          <div className={`${styles.heroHeadText} text-white hero-title-glow`}>
            <div className='hero-line-mask'>
              <motion.div variants={heroLineVariants}>
                Hi, I&apos;m <span className='theme-accent'>Riju</span>.
              </motion.div>
            </div>
            <div className='hero-line-mask'>
              <motion.div variants={heroLineVariants}>
                I build websites and systems that feel sharp.
              </motion.div>
            </div>
          </div>
          <motion.p
            variants={heroItemVariants}
            className={`${styles.heroSubText} mt-4 text-white-100 max-w-3xl`}
          >
            I work on modern frontend experiences, scalable backend features, and custom
            RAGE:MP systems. I care a lot about clean design, smooth interaction, and
            building projects that actually feel finished.
          </motion.p>

          <motion.div variants={heroItemVariants} className='mt-7 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 w-full'>
            <a
              href='#contact'
              className='hero-cta-primary rounded-full px-6 py-3 text-center text-[15px] font-semibold text-[#07111f] w-full xs:w-auto'
            >
              Let&apos;s work together
            </a>
            <a
              href='#work'
              className='hero-cta-secondary rounded-full px-6 py-3 text-center text-[15px] font-semibold text-white w-full xs:w-auto'
            >
              See my journey
            </a>
          </motion.div>

          <motion.div
            variants={heroItemVariants}
            className='mt-6 grid grid-cols-1 gap-3 sm:hidden'
          >
            {mobileHighlights.map((item) => (
              <div key={item.label} className='mobile-hero-card rounded-2xl p-4'>
                <p className='theme-muted-text text-[11px] uppercase tracking-[0.24em]'>
                  {item.label}
                </p>
                <p className='mt-2 text-[15px] font-semibold text-white'>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={heroItemVariants}>
            <SocialLinksBar className='mt-8 sm:mt-10' />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
