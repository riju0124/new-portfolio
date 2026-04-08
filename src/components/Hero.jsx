import { motion } from "framer-motion";

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

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>
      <div className='hero-orb hero-orb-left' />
      <div className='hero-orb hero-orb-right' />
      <div className='hero-grid-card hidden lg:block' />

      <motion.div
        variants={heroContentVariants}
        initial='hidden'
        animate='show'
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-[112px] sm:pt-[132px] pb-24 flex flex-col sm:flex-row items-start gap-5 sm:gap-6`}
      >
        <motion.div
          variants={heroItemVariants}
          className='hidden sm:flex flex-col justify-center items-center mt-5'
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 24px rgba(210,166,121,0.45)",
                "0 0 38px rgba(210,166,121,0.75)",
                "0 0 24px rgba(210,166,121,0.45)",
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className='w-5 h-5 rounded-full bg-[#d2a679]'
          />
          <motion.div
            animate={{ height: ["0rem", "24rem"] }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className='w-1 sm:h-96 h-52 violet-gradient'
          />
        </motion.div>

        <div className='w-full max-w-4xl'>
          <motion.div
            variants={heroItemVariants}
            className='hero-badge inline-flex rounded-full px-4 py-2 text-[11px] sm:text-[12px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#efe4d6]'
          >
            Full stack developer, UI builder, and RAGE:MP systems creator
          </motion.div>
          <div className={`${styles.heroHeadText} text-white hero-title-glow`}>
            <div className='hero-line-mask'>
              <motion.div variants={heroLineVariants}>
                Hi, I&apos;m <span className='text-[#d2a679]'>Riju</span>.
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
              className='hero-cta-primary rounded-full px-6 py-3 text-center text-[15px] font-semibold text-[#0d1412] w-full xs:w-auto'
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
                <p className='text-[11px] uppercase tracking-[0.24em] text-[#c9b59d]'>
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

      <div className='absolute xs:bottom-10 bottom-16 sm:bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='hidden sm:flex w-[35px] h-[64px] rounded-3xl border-4 border-secondary justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
