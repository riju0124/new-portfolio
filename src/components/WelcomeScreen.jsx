import { motion } from "framer-motion";

const WelcomeScreen = ({ onStart }) => {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="welcome-grid" />
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="welcome-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
        >
          Riju Naskar Portfolio
        </motion.p>
        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
Building Beyond Code
        </motion.h1>
        <motion.p
          className="welcome-copy"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.65 }}
        >
          From web applications to game server systems, I build experiences that perform, scale, and engage.
        </motion.p>
        <motion.button
          type="button"
          className="welcome-start"
          onClick={onStart}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.62 }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Exploring
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
