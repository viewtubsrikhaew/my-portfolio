import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import BlockReveal from './BlockReveal';
import { Asterisk, ArrowUpRight, Sparkles } from 'lucide-react';

const subjects = [
  'Finance / Risk Analytics',
  'Graphic Design / Branding',
  'Operations / Project',
  'Collaboration',
  'Other',
];

const glitchVariants = {
  idle: { x: 0 },
  glitch: {
    x: [-2, 2, -1, 1, 0],
    transition: { duration: 0.3 },
  },
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('FILL_ALL_FIELDS');
      return;
    }
    setLoading(true);
    setError('');
    await base44.entities.ContactInquiry.create({ ...form, status: 'new' });
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">08</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">CONTACT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left – copy */}
        <div className="space-y-8">
          <BlockReveal delay={0.1}>
            <h2 className="font-inter font-black leading-none tracking-tighter" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              LET'S<br />
              <span className="text-primary">TALK</span><br />
              <span className="text-muted-foreground/40 text-3xl">// SERIOUSLY</span>
            </h2>
          </BlockReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-base text-muted-foreground leading-relaxed max-w-sm"
          >
            Drop your details below — whether it's a risk-modeling brief, a branding project, or just a coffee chat.
            I read every message.
          </motion.p>

          {/* Quick links */}
          <div className="space-y-0">
            {[
              { label: 'EMAIL', value: 'viewtubsikhaew@gmail.com', href: 'mailto:viewtubsikhaew@gmail.com' },
              { label: 'PHONE', value: '094-362-8554', href: 'tel:0943628554' },
              { label: 'LINKEDIN', value: '/in/chulachak-tubsikhaew', href: 'https://linkedin.com/in/chulachak-tubsikhaew' },
              { label: 'LOCATION', value: 'Bangkok, Thailand', href: null },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-t border-primary/20 py-4 flex justify-between items-center"
              >
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{item.label}</span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-inter font-bold text-sm text-foreground hover:text-primary transition-colors">
                    <span className="inline-flex items-center gap-1">{item.value} <ArrowUpRight size={14} className="text-primary inline" /></span>
                  </a>
                ) : (
                  <span className="font-inter font-bold text-sm text-foreground">{item.value}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right – form */}
        <div>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-2 border-primary p-10 text-center relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, 20, -20, 10, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center mb-6 text-primary"
                >
                  <Asterisk size={64} />
                </motion.div>
                <div className="font-inter font-black text-3xl text-primary tracking-tighter">MESSAGE SENT!</div>
                <div className="font-mono text-xs text-muted-foreground mt-3">I'll get back to you ASAP.</div>
                <motion.div
                  animate={{ x: [0, 8, 0], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 text-primary opacity-10 select-none"
                >
                  <Sparkles size={80} />
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="space-y-0 border border-primary/30"
              >
                {/* Name */}
                <BrutalField
                  label="NAME *"
                  id="name"
                  value={form.name}
                  onChange={(v) => handleChange('name', v)}
                  focused={focused === 'name'}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your full name"
                />

                {/* Email */}
                <BrutalField
                  label="EMAIL *"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange('email', v)}
                  focused={focused === 'email'}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                />

                {/* Subject */}
                <div className={`border-b border-primary/30 transition-colors ${focused === 'subject' ? 'bg-primary/5' : ''}`}>
                  <label className="font-mono text-[9px] tracking-widest text-primary px-6 pt-4 block">{'>>'} INQUIRY TYPE</label>
                  <div className="flex flex-wrap gap-2 px-6 pb-4 pt-2">
                    {subjects.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleChange('subject', s)}
                        className={`font-mono text-[10px] tracking-wide px-3 py-1.5 border transition-all duration-150 ${
                          form.subject === s
                            ? 'bg-primary text-background border-primary'
                            : 'border-primary/30 text-muted-foreground hover:border-primary hover:text-primary'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={`border-b border-primary/30 transition-colors ${focused === 'message' ? 'bg-primary/5' : ''}`}>
                  <label className="font-mono text-[9px] tracking-widest text-primary px-6 pt-4 block">{'>>'} MESSAGE *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-transparent px-6 pb-4 pt-2 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-none"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-3 bg-destructive/10 font-mono text-[10px] text-destructive tracking-widest"
                    >
                      !! ERROR: FILL ALL REQUIRED FIELDS
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }}
                  whileTap={{ scale: 0.97 }}
                  variants={glitchVariants}
                  animate={loading ? 'glitch' : 'idle'}
                  className="w-full bg-primary text-background font-inter font-black text-base tracking-widest py-5 transition-colors disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }} className="inline-flex">
                        <Asterisk size={18} />
                      </motion.span>
                      SENDING...
                    </>
                  ) : (
                    'SEND MESSAGE →'
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── BRUTALIST FOOTER ── */}
      <div className="mt-24 border-4 border-primary bg-background">
        {/* Top accent bar */}
        <div className="bg-primary h-2 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Identity block */}
          <div className="border-r border-primary/30 p-8 md:p-10">
            <div className="font-inter font-black text-3xl text-foreground tracking-tighter leading-none mb-1">
              CHULA<span className="text-primary">CHAK</span><span className="text-primary">.</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground mt-2 mb-6">
              RISK ANALYST · DESIGNER · BUILDER
            </div>
            <div className="font-mono text-[9px] tracking-widest text-muted-foreground leading-relaxed">
              M.Sc. Insurance & Risk Management<br />
              Chulalongkorn University · 2025<br />
              Bangkok, Thailand 🇹🇭
            </div>
          </div>

          {/* Contact block */}
          <div className="border-r border-primary/30 p-8 md:p-10">
            <div className="font-mono text-[9px] tracking-[0.3em] text-primary mb-6">// CONTACT</div>
            <div className="space-y-3">
              {[
                { label: 'EMAIL', value: 'viewtubsikhaew@gmail.com', href: 'mailto:viewtubsikhaew@gmail.com' },
                { label: 'PHONE', value: '094-362-8554', href: 'tel:0943628554' },
                { label: 'LOCATION', value: 'Bangkok, Thailand', href: null },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[8px] tracking-widest text-primary/60">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className="font-inter font-bold text-xs text-foreground hover:text-primary transition-colors">{item.value} ↗</a>
                    : <span className="font-inter font-bold text-xs text-foreground">{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* LinkedIn + CTA block */}
          <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
            <div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-primary mb-6">// CONNECT</div>
              <div className="flex flex-col gap-2">
                <motion.a
                  href="https://linkedin.com/in/chulachak-tubsikhaew"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-3 border-2 border-primary px-5 py-3 text-primary hover:bg-primary hover:text-background transition-colors group"
                >
                  <span className="font-inter font-black text-xl select-none group-hover:scale-110 transition-transform">in</span>
                  <div>
                    <div className="font-inter font-black text-sm tracking-tight">LINKEDIN</div>
                    <div className="font-mono text-[8px] tracking-widest text-primary/70 group-hover:text-background/70">/in/chulachak-tubsikhaew</div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/julajak.tusikhaew.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-3 border border-primary/50 px-5 py-3 text-primary hover:border-primary hover:bg-primary/10 transition-colors group"
                >
                  <span className="font-inter font-black text-xl select-none group-hover:scale-110 transition-transform">f</span>
                  <div>
                    <div className="font-inter font-black text-sm tracking-tight">FACEBOOK</div>
                    <div className="font-mono text-[8px] tracking-widest text-primary/70">julajak.tusikhaew</div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/view.cct?igsh=MTV1NzBlM2lmNG44eA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-3 border border-primary/50 px-5 py-3 text-primary hover:border-primary hover:bg-primary/10 transition-colors group"
                >
                  <span className="font-inter font-black text-xl select-none group-hover:scale-110 transition-transform">◎</span>
                  <div>
                    <div className="font-inter font-black text-sm tracking-tight">INSTAGRAM</div>
                    <div className="font-mono text-[8px] tracking-widest text-primary/70">@view.cct</div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto" />
                </motion.a>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 4, boxShadow: '6px 6px 0 rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-primary text-background font-inter font-black text-sm tracking-widest py-4 border-2 border-primary hover:bg-background hover:text-primary transition-colors text-center"
            >
              HIRE ME NOW →
            </motion.button>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-primary/30 px-8 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="font-mono text-[9px] tracking-widest text-muted-foreground">
            © 2025 CHULACHAK TUBSIKHAEW — ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[9px] tracking-widest text-muted-foreground">
            BUILT WITH <Sparkles size={12} className="text-primary inline mx-1" /> NEO-BRUTALIST PRECISION
          </div>
        </div>
      </div>
    </section>
  );
}

function BrutalField({ label, id, value, onChange, focused, onFocus, onBlur, placeholder, type = 'text' }) {
  return (
    <div className={`border-b border-primary/30 transition-colors ${focused ? 'bg-primary/5' : ''}`}>
      <label htmlFor={id} className="font-mono text-[9px] tracking-widest text-primary px-6 pt-4 block">
        {'>>'} {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full bg-transparent px-6 pb-4 pt-2 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
      />
    </div>
  );
}
