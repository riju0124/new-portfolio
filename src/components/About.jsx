import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const serviceDescriptions = [
  "I build complete frontend and backend experiences that feel clean, fast, and production ready.",
  "I create custom gameplay systems, logic flows, and player-facing features, with past RAGE:MP experience and a current focus on FiveM development.",
  "I focus on structure, APIs, data flow, and backend features that stay maintainable as a project grows.",
  "I care about layout, animation, spacing, and the small details that make interfaces feel finished.",
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    scale={1.01}
    transitionSpeed={400}
    className={`${index === 0 ? "md:col-span-2" : ""} w-full`}
  >
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="service-tile h-full rounded-[28px] p-[1px]"
      whileHover={{ y: -6 }}
    >
      <div className="service-tile-inner h-full rounded-[27px] p-7 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div className="max-w-[420px]">
            <p className="theme-muted-text text-[11px] uppercase tracking-[0.3em]">
              0{index + 1}
            </p>
            <h3 className="mt-4 text-white text-[26px] sm:text-[30px] font-semibold leading-[1.1]">
              {title}
            </h3>
            <p className="mt-4 text-[15px] leading-[28px] text-[#cfc8bc]">
              {serviceDescriptions[index]}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: 0.16 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="service-icon-wrap shrink-0"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} theme-accent tracking-wider`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          About me.
        </h2>
      </motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="theme-soft-text mt-6 text-[17px] max-w-3xl leading-[32px] font-light"
>
  I&apos;m a full stack developer and ex RAGE:MP developer who enjoys building modern web experiences, polished interfaces, and custom game systems with equal attention to design and engineering.

  <br /><br />

  My focus is simple: clean visuals, strong structure, responsive interaction, and products that feel intentionally crafted instead of copied from a template.

  <br /><br />

  Alongside full stack work, I&apos;ve learned Unreal Engine and I&apos;m now learning FiveM development because I want to grow beyond websites and build stronger multi-platform experiences.
</motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-10 flex flex-wrap gap-4"
      >
        {["3+ years building", "full stack systems", "learning FiveM", "ex RAGE:MP developer", "clean UI direction", "performance minded"].map((tag, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm rounded-full bg-[rgba(248,245,239,0.05)] text-white border border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
