import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { insights } from "../constants";

const FeedbackCard = ({
  index,
  title,
  text,
  label,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='insight-card p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='theme-accent font-black text-[14px] uppercase tracking-[0.28em]'>
      {label}
    </p>

    <div className='mt-1'>
      <p className='mt-4 text-white font-semibold text-[26px]'>{title}</p>
      <p className='theme-soft-text mt-4 tracking-wide text-[17px] leading-[30px]'>{text}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='theme-badge-text font-medium text-[14px] uppercase tracking-[0.24em]'>
            personal note
          </p>
        </div>

        <img
          src={image}
          alt={title}
          className='w-12 h-12 rounded-full object-cover border border-white/10'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[rgba(17,25,23,0.72)] rounded-[20px] border border-white/5`}>
      <div
        className={`bg-[linear-gradient(135deg,rgba(23,32,29,0.96),rgba(31,44,39,0.9))] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} theme-accent`}>my mindset</p>
          <h2 className={styles.sectionHeadText}>What matters to me.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {insights.map((insight, index) => (
          <FeedbackCard key={`insight-${index}`} index={index} {...insight} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
