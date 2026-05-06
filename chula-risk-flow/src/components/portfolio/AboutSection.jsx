import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlockReveal from './BlockReveal';
import { BarChart2, Code2, TrendingUp, Building2, Palette, Megaphone, Camera, Monitor } from 'lucide-react';

const SIDES = ['FINANCE', 'CREATIVE'];

const financePoints = [
  { Icon: BarChart2, title: 'Risk & Actuarial', body: 'Loss distribution modeling, ALM portfolio construction, Nelson-Siegel yield curves, stress testing — grounded in real insurance coursework.' },
  { Icon: Code2, title: 'Data & Code', body: 'Python (pandas, sklearn), R, SQL, and Tableau for predictive modeling, classification, and interactive dashboards.' },
  { Icon: TrendingUp, title: 'Bloomberg Terminal', body: 'Bloomberg-certified. Comfortable pulling BDH/BDP data, running bond analytics, and interpreting fixed-income market screens.' },
  { Icon: Building2, title: 'Operations', body: 'Managed 7 business units with 200+ staff. Converted raw sales data into revenue insights — THB 11.5M+ in trackable revenue.' },
];

const creativePoints = [
  { Icon: Palette, title: 'Brand Identity', body: 'End-to-end identity projects from logo mark to full brand guideline systems. Clients include hospitality, nightlife, and startup sectors.' },
  { Icon: Megaphone, title: 'Marketing', body: 'Omni-channel marketing strategy from social campaigns to event activations. Data-driven campaign execution with strong design integration.' },
  { Icon: Camera, title: 'Art Direction', body: 'Creative direction for visual campaigns, photo editing, and event collateral for CU Startup League, White Rabbit Bar, and GASS.BKK.' },
  { Icon: Monitor, title: 'Adobe + Base44', body: 'Illustrator, Photoshop, InDesign, Lightroom — plus Base44 for building custom web platforms and design implementation.' },
];

const bioTexts = {
  FINANCE: "Master's student in Insurance and Risk Management with experience in large-scale operations and a proven track record in generating THB 11.5M+ in total revenue through data-driven business performance analysis. Skilled in statistical modeling and tools including Excel, Python, SQL, and Tableau, with hands-on experience in insurance product design, portfolio optimization, and predictive analytics. Strong foundation in quantitative analysis, risk modeling, and interpreting complex data to support business decisions. Seeking opportunities in actuarial science, risk management, or insurance analytics.",
  CREATIVE: "Creative strategist specializing in brand identity, marketing campaigns, and visual design. Experience in developing comprehensive brand systems for hospitality, nightlife, fashion, and startup sectors. Expertise in digital design, art direction, and campaign execution across multiple platforms.",
};

export default function AboutSection() {
  const [side, setSide] = useState('FINANCE');

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">01</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">ABOUT ME</span>
      </div>

      {/* Top: headline + toggle */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <BlockReveal delay={0.1}>
          <h2 className="font-inter font-black leading-none tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            THE ANALYTICAL<br />
            <span className="text-primary">CREATIVE</span>
          </h2>
        </BlockReveal>

        {/* Side toggle */}
        <div className="flex border border-primary/40">
          {SIDES.map((s) => (
            <motion.button
              key={s}
              onClick={() => setSide(s)}
              whileTap={{ scale: 0.95 }}
              className={`font-mono text-[10px] tracking-widest px-6 py-3 transition-colors border-r border-primary/40 last:border-r-0 flex items-center gap-1.5 ${
                side === s ? 'bg-primary text-background' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {s === 'FINANCE' ? <BarChart2 size={12} /> : <Palette size={12} />}{s}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bio */}
      <AnimatePresence mode="wait">
        <motion.div
          key={side}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mb-12 font-inter text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-6"
        >
          {side === 'FINANCE' ? bioTexts.FINANCE : bioTexts.CREATIVE}
        </motion.div>
      </AnimatePresence>

      {/* Skill cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={side}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {(side === 'FINANCE' ? financePoints : creativePoints).map((pt, i) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: '8px 8px 0 #FF5F1F', scale: 1.03 }}
              className="border border-primary/30 p-6 cursor-default hover:border-primary transition-colors"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <pt.Icon size={28} className="mb-3 text-primary" />
              <div className="font-inter font-bold text-base text-foreground mb-2">{pt.title}</div>
              <div className="font-inter text-xs text-muted-foreground leading-relaxed">{pt.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border border-primary/20 mt-10">
        {[
          { label: 'GPA', value: '4.00', sub: 'M.Sc. Insurance' },
          { label: 'REVENUE', value: '11.5M+', sub: 'THB Generated' },
          { label: 'WORKFORCE', value: '200+', sub: 'Employees Managed' },
          { label: 'CERTIFICATIONS', value: '5×', sub: 'Google + Bloomberg + TMO Olympiad' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ backgroundColor: 'rgba(255,95,31,0.08)' }}
            className="border-r border-primary/20 last:border-r-0 p-6 text-center cursor-default"
          >
            <div className="font-mono text-[9px] tracking-widest text-muted-foreground">{stat.label}</div>
            <div className="font-inter font-black text-2xl md:text-3xl text-primary mt-1">{stat.value}</div>
            <div className="font-mono text-[9px] text-muted-foreground mt-1">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}