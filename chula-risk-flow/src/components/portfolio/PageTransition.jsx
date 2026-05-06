import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const symbols = ['✳', '#', '*', '✦', '→', '↗', '◆', '○'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function PageTransition() {
  const [sweeping, setSweeping] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setSweeping(true);
      setTimeout(() => setSweeping(false), 900);
    };

    window.addEventListener('hashchange', trigger);
    const handleClick = (e) => {
      const anchor = e.target.closest('button, a');
      if (anchor) trigger();
    };
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('hashchange', trigger);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {sweeping && (
          <motion.span
            key="sweep"
            initial={{ x: '-20vw', opacity: 0, y: '-50%' }}
            animate={{ x: ['−20vw', '110vw'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], times: [0, 0.1, 0.85, 1] }}
            className="absolute top-1/2 font-inter font-black text-primary select-none"
            style={{ fontSize: 'clamp(18rem, 55vw, 48rem)', lineHeight: 1, fontWeight: 900, left: 0 }}
          >
            ✳
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}