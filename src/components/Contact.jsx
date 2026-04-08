import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import SocialLinksBar from "./SocialLinksBar";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Riju",
          from_email: form.email,
          to_email: "hello@riju.dev",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className='xl:mt-12 grid grid-cols-1 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] gap-6 lg:gap-8 items-stretch'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='contact-panel h-full p-6 sm:p-8 lg:p-10 rounded-[28px]'
      >
        <p className={`${styles.sectionSubText} text-[#d2a679]`}>start a conversation</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[27px] text-[#d8d0c4]'>
          If you want a portfolio, a web app, or a custom game system that feels clean and
          polished, you can reach out here or message me on my socials.
        </p>

        <SocialLinksBar className='mt-6' />

        <form
          ref={formRef}
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
              className='contact-input bg-[rgba(248,245,239,0.04)] py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium'
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
              className='contact-input bg-[rgba(248,245,239,0.04)] py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium'
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
              className='contact-input min-h-[170px] resize-none bg-[rgba(248,245,239,0.04)] py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium'
            />
          </label>

          <button
            type='submit'
            className='contact-submit bg-[linear-gradient(135deg,#d2a679,#8c5e3c)] py-3.5 px-8 rounded-xl outline-none w-full sm:w-fit text-[#0d1412] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

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
