import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import SocialLinksBar from "./SocialLinksBar";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xgopqllg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <div className='xl:mt-12 grid grid-cols-1 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] gap-6 lg:gap-8 items-stretch'>
      
      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='contact-panel h-full p-6 sm:p-8 lg:p-10 rounded-[28px]'
      >
        <p className={`${styles.sectionSubText} theme-accent`}>
          start a conversation
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className='theme-soft-text mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[27px]'>
          If you want a portfolio, a web app, or a custom game system that feels clean and
          polished, you can reach out here or message me on my socials.
        </p>

        <SocialLinksBar className='mt-6' />

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-6 sm:gap-7'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='your name'
              required
              className='contact-input contact-input-bg py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='your email'
              required
              className='contact-input contact-input-bg py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='tell me about your project'
              required
              className='contact-input contact-input-bg min-h-[170px] resize-none py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium'
            />
          </label>

          {/* BUTTON */}
          <button
            type='submit'
            className='contact-submit py-3.5 px-8 rounded-xl outline-none w-full sm:w-fit theme-button-text font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-400 mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='contact-visual relative min-h-[280px] sm:min-h-[360px] md:min-h-[460px] xl:min-h-full rounded-[28px] overflow-hidden border border-white/8'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
