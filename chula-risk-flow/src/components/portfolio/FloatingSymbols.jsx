import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function FloatingSymbol({ char, x, y, speed }) {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return (
    <motion.div
      style={{ left: x, top: y, y: yOffset, fontSize: '4rem' }}
      className="absolute font-mono text-primary/5 select-none"
    >
      {char}
    </motion.div>
  );
}

const symbols = [
  { char: '*', x: '10%', y: '20%', speed: 0.3 },
  { char: '#', x: '85%', y: '35%', speed: 0.5 },
  { char: '↗', x: '75%', y: '60%', speed: 0.2 },
  { char: '✳', x: '15%', y: '75%', speed: 0.4 },
  { char: '*', x: '90%', y: '85%', speed: 0.35 },
  { char: '#', x: '5%', y: '45%', speed: 0.25 },
];

export default function FloatingSymbols() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {symbols.map((sym, i) => (
        <FloatingSymbol key={i} {...sym} />
      ))}
    </div>
  );
}