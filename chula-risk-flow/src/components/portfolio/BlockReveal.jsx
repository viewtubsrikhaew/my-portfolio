import React from 'react';
import { motion } from 'framer-motion';

export default function BlockReveal({ children, delay = 0, color = 'bg-primary' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative overflow-hidden"
    >
      <motion.div
        variants={{
          hidden: { scaleX: 0, originX: 0 },
          visible: {
            scaleX: [0, 1, 1, 0],
            originX: [0, 0, 1, 1],
            transition: {
              duration: 0.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.4, 0.6, 1],
            },
          },
        }}
        className={`absolute inset-0 ${color} z-10`}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.01, delay: delay + 0.4 } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}