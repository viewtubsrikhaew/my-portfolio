import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart2, Palette, Shield, Building2, Briefcase, Bot, Globe, TrendingUp, Layers, Megaphone, Code2, Award, Asterisk, ArrowUpRight } from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────────
const PROJECT_CATEGORIES = [
  { label: 'RISK MODELING', count: 5, Icon: Shield, color: 'bg-primary', textColor: 'text-background' },
  { label: 'PORTFOLIO OPT.', count: 3, Icon: TrendingUp, color: 'bg-background', textColor: 'text-foreground', border: true },
  { label: 'OPERATIONS', count: 7, Icon: Building2, color: 'bg-primary', textColor: 'text-background' },
  { label: 'BRAND IDENTITY', count: 6, Icon: Layers, color: 'bg-background', textColor: 'text-foreground', border: true },
  { label: 'ANALYTICS / ML', count: 5, Icon: Bot, color: 'bg-primary', textColor: 'text-background' },
  { label: 'MARKETING', count: 4, Icon: Megaphone, color: 'bg-background', textColor: 'text-foreground', border: true },
  { label: 'PRODUCT MGMT', count: 3, Icon: Briefcase, color: 'bg-primary', textColor: 'text-background' },
  { label: 'WEB / CODE', count: 2, Icon: Globe, color: 'bg-background', textColor: 'text-foreground', border: true },
];

const SKILL_BARS = [
  { name: 'Excel / Solver', pct: 98, domain: 'FINANCE' },
  { name: 'Illustrator', pct: 98, domain: 'CREATIVE' },
  { name: 'Canva', pct: 99, domain: 'CREATIVE' },
  { name: 'Tableau', pct: 97, domain: 'DATA' },
  { name: 'Claude AI', pct: 95, domain: 'AI' },
  { name: 'Python', pct: 90, domain: 'DATA' },
  { name: 'Bloomberg', pct: 85, domain: 'FINANCE' },
  { name: 'SQL', pct: 85, domain: 'DATA' },
  { name: 'Power BI', pct: 82, domain: 'DATA' },
  { name: 'R Studio', pct: 80, domain: 'DATA' },
];

const DOMAIN_COLOR = {
  FINANCE: '#FF5F1F',
  CREATIVE: '#FFFFFF',
  DATA: '#FF5F1F',
  AI: '#8A8A8A',
};

const KEY_STATS = [
  { val: '35+', label: 'TOTAL PROJECTS', sub: 'across all domains', Icon: Briefcase },
  { val: '4.00', label: 'CURRENT GPA', sub: 'M.Sc. Insurance & Risk Mgmt.', Icon: Award },
  { val: '7', label: 'BUSINESS UNITS', sub: 'operations managed', Icon: Building2 },
  { val: 'THB 11.5M+', label: 'REVENUE DRIVEN', sub: 'tracked & optimized', Icon: TrendingUp },
  { val: '5×', label: 'CERTIFICATIONS', sub: 'Google ×3 · Bloomberg · TMO', Icon: Award },
  { val: '200+', label: 'TEAM SIZE', sub: 'employees managed', Icon: Building2 },
];

const SKILL_DOMAINS = [
  { label: 'FINANCE & RISK', Icon: BarChart2, skills: ['ALM / LDI', 'Loss Distribution', 'MPT Portfolio Opt.', 'Actuarial Science', 'Financial Modeling', 'Bloomberg Terminal'] },
  { label: 'DATA & ANALYTICS', Icon: Code2, skills: ['Python (sklearn, pandas)', 'R Studio', 'SQL Queries', 'Tableau Dashboards', 'Power BI Reports', 'Statistical Modeling'] },
  { label: 'CREATIVE & DESIGN', Icon: Palette, skills: ['Brand Identity', 'Adobe Illustrator', 'Photoshop', 'InDesign', 'Canva', 'Art Direction'] },
  { label: 'AI & PRODUCTIVITY', Icon: Bot, skills: ['Prompt Engineering', 'Claude · ChatGPT', 'Perplexity Research', 'NotebookLM (RAG)', 'Base44 App Builder', 'AI-Assisted Workflow'] },
];

// ─── Components ─────────────────────────────────────────────────────────────────
function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6, boxShadow: '8px 8px 0 #FF5F1F', borderColor: '#FF5F1F' }}
      className="border-2 border-primary/30 bg-card p-6 cursor-default transition-all"
    >
      <stat.Icon size={20} className="text-primary mb-3" />
      <div className="font-inter font-black text-2xl md:text-3xl text-primary tracking-tighter">{stat.val}</div>
      <div className="font-inter font-bold text-sm text-foreground mt-1">{stat.label}</div>
      <div className="font-mono text-[9px] tracking-widest text-muted-foreground mt-0.5">{stat.sub}</div>
    </motion.div>
  );
}

function SkillBar({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group cursor-default"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[8px] tracking-widest px-1.5 py-0.5 border border-primary/20 text-primary/60">{skill.domain}</span>
          <span className="font-inter font-bold text-sm text-foreground">{skill.name}</span>
        </div>
        <span className="font-mono text-[10px] text-primary font-bold">{skill.pct}%</span>
      </div>
      <div className="h-2 bg-card border border-primary/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.pct}%` }}
          transition={{ duration: 0.8, delay: index * 0.04 + 0.3, ease: 'easeOut' }}
          style={{ backgroundColor: hovered ? '#FFFFFF' : DOMAIN_COLOR[skill.domain] }}
          className="h-full transition-colors duration-200"
        />
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────────
export default function Dashboard() {
  return (
    <div className="bg-background text-foreground min-h-screen font-inter">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30 flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="font-inter font-black text-xl tracking-tighter hover:text-primary transition-colors">
          CT<Asterisk size={18} className="text-primary inline" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/about" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors">ABOUT</Link>
          <Link to="/" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors">← PORTFOLIO</Link>
        </div>
      </nav>

      <main className="pt-24 pb-32 px-6 md:px-12 lg:px-20">

        {/* ── HEADER ── */}
        <section className="py-16 border-b border-primary/20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// DASHBOARD</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-inter font-black leading-none tracking-tighter" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
                OVERVIEW<span className="text-primary">.</span>
              </h1>
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground max-w-xs leading-relaxed">
                // SNAPSHOT OF PROJECTS · SKILLS · KEY METRICS — CHULACHAK TUBSIKHAEW
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── KEY STATS ── */}
        <section className="py-16 border-b border-primary/20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-8">// KEY_METRICS</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {KEY_STATS.map((stat, i) => <StatCard key={i} stat={stat} index={i} />)}
          </div>
        </section>

        {/* ── PROJECTS BY CATEGORY ── */}
        <section className="py-16 border-b border-primary/20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// PROJECT_BREAKDOWN</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter">
              PROJECTS <span className="text-primary">BY</span> DOMAIN
            </h2>
            <div className="font-mono text-[9px] tracking-widest text-muted-foreground">
              // TOTAL: {PROJECT_CATEGORIES.reduce((a, c) => a + c.count, 0)} PROJECTS ACROSS {PROJECT_CATEGORIES.length} DOMAINS
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-primary/30">
            {PROJECT_CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ backgroundColor: '#FF5F1F' }}
                className={`border-r border-b border-primary/20 last:border-r-0 p-8 cursor-default transition-all group ${i % 4 === 3 ? 'border-r-0' : ''}`}
              >
                <cat.Icon size={28} className="text-primary group-hover:text-background mb-4 transition-colors" />
                <div className="font-inter font-black text-4xl text-foreground group-hover:text-background transition-colors">{cat.count}</div>
                <div className="font-mono text-[9px] tracking-widest text-muted-foreground group-hover:text-background/70 mt-2 transition-colors">{cat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILL PROFICIENCY ── */}
        <section className="py-16 border-b border-primary/20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// SKILL_PROFICIENCY_INDEX</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter">
              TOP <span className="text-primary">TOOLS</span>
            </h2>
            <div className="font-mono text-[9px] tracking-widest text-muted-foreground">// HOVER BAR → CHANGES COLOR</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
            {SKILL_BARS.map((skill, i) => <SkillBar key={i} skill={skill} index={i} />)}
          </div>
        </section>

        {/* ── SKILL DOMAIN CARDS ── */}
        <section className="py-16">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// SKILL_DOMAINS</div>
          <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter mb-10">
            EXPERTISE <span className="text-primary">AREAS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_DOMAINS.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '8px 8px 0 #FF5F1F' }}
                className="border-2 border-primary/30 hover:border-primary bg-card p-8 cursor-default transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <domain.Icon size={24} className="text-primary" />
                  <div className="font-inter font-black text-lg tracking-tight">{domain.label}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((s) => (
                    <span key={s} className="font-mono text-[10px] tracking-widest border border-primary/40 text-primary px-3 py-1.5">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link to="/">
              <motion.div
                whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
                className="inline-flex items-center gap-2 bg-primary text-background font-inter font-black text-sm tracking-widest px-8 py-4 cursor-pointer border-2 border-primary hover:bg-background hover:text-primary transition-colors"
              >
                VIEW ALL PROJECTS →
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
                className="inline-flex items-center gap-2 border-2 border-primary/50 text-foreground font-inter font-black text-sm tracking-widest px-8 py-4 cursor-pointer hover:border-primary transition-colors"
              >
                ABOUT ME <ArrowUpRight size={16} className="inline" />
              </motion.div>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
