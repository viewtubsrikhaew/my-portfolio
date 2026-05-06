import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

const SOCIAL = [
  {
    label: 'EMAIL',
    Icon: Mail,
    href: 'mailto:viewtubsikhaew@gmail.com?subject=Project Inquiry&body=Hi Chulachak,',
    color: 'bg-primary text-background',
    border: 'border-primary',
  },
  {
    label: 'LINKEDIN',
    Icon: Linkedin,
    href: 'https://linkedin.com/in/chulachak-tubsikhaew',
    color: 'bg-background text-primary',
    border: 'border-primary',
  },
  {
    label: 'FACEBOOK',
    Icon: Facebook,
    href: 'https://www.facebook.com/julajak.tusikhaew.3',
    color: 'bg-background text-primary',
    border: 'border-primary',
  },
  {
    label: 'INSTAGRAM',
    Icon: Instagram,
    href: 'https://www.instagram.com/view.cct?igsh=MTV1NzBlM2lmNG44eA%3D%3D&utm_source=qr',
    color: 'bg-background text-primary',
    border: 'border-primary',
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-2 items-end"
          >
            {SOCIAL.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.05, duration: 0.18, ease: 'easeOut' }}
                whileHover={{ x: -4, boxShadow: '-6px 6px 0 #FF5F1F' }}
                className={`flex items-center gap-3 border-2 ${s.border} ${s.color} px-4 py-2.5 font-inter font-black text-xs tracking-widest transition-colors hover:bg-primary hover:text-background hover:border-primary`}
                style={{ width: '180px' }}
              >
                <s.Icon size={14} className="shrink-0" />
                <span className="font-mono text-[10px] tracking-[0.2em] flex-1">{s.label}</span>
                <span className="font-mono text-xs shrink-0">↗</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05, boxShadow: '-8px 8px 0 rgba(255,255,255,0.2)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-14 h-14 bg-primary border-2 border-primary text-background flex items-center justify-center relative overflow-hidden"
        aria-label="Contact"
      >
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px)' }}
        />
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div key="mail"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Mail size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 border-2 border-primary pointer-events-none"
          />
        )}
      </motion.button>

      {/* Brutalist label */}
      {!open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-[7px] tracking-[0.25em] text-primary/60 text-right"
        >
          CONTACT
        </motion.div>
      )}
    </div>
  );
}