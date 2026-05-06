import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import WorkTimeline from '@/components/portfolio/WorkTimeline';
import { Asterisk, ArrowUpRight } from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Cell,
} from 'recharts';

// ─── AI Tools Data ───────────────────────────────────────────────────────────
const AI_TOOLS = [
  { name: 'Claude', value: 95, color: '#FF5F1F', snippet: 'Think step by step...', use: 'Analysis · Writing · Code Review' },
  { name: 'ChatGPT', value: 93, color: '#FF5F1F', snippet: 'GPT-4o: reason & generate', use: 'Brainstorm · Summarize · Translate' },
  { name: 'Perplexity', value: 90, color: '#FF5F1F', snippet: 'real-time research engine', use: 'Market Research · Fact-Check' },
  { name: 'Gemini', value: 88, color: '#FF5F1F', snippet: 'gemini.generateContent()', use: 'Docs · Slides · Sheets AI' },
  { name: 'NotebookLM', value: 87, color: '#FF5F1F', snippet: 'source-grounded RAG', use: 'Study · Report Synthesis' },
  { name: 'Base44 / Codex', value: 85, color: '#FF5F1F', snippet: 'generate: component', use: 'App Building · Automation' },
  { name: 'Midjourney', value: 78, color: '#8A8A8A', snippet: '/imagine prompt --ar 16:9', use: 'Visual Concepts · Moodboards' },
];

const AI_RADAR = [
  { subject: 'Prompting', A: 95 },
  { subject: 'Research', A: 92 },
  { subject: 'Data Extract', A: 88 },
  { subject: 'Multimodal', A: 88 },
  { subject: 'Automation', A: 85 },
  { subject: 'Code Gen', A: 82 },
];

// ─── Work Philosophy ─────────────────────────────────────────────────────────
const PRINCIPLES = [
  { num: '01', title: 'DATA BEFORE OPINION', body: 'Every decision I make is grounded in evidence. Whether it\'s a brand color choice or a pricing strategy — I build the analysis first, then decide.' },
  { num: '02', title: 'SYSTEMS THINKING', body: 'I see business as interconnected systems. Fixing one thing without considering downstream effects creates more problems. I map the whole before touching a part.' },
  { num: '03', title: 'CLARITY IN COMPLEXITY', body: 'My job is to translate complex numbers and strategies into clear, actionable visuals — whether that\'s a BI dashboard, a brand identity, or a product roadmap.' },
  { num: '04', title: 'AI AS LEVERAGE', body: 'I use AI tools daily — not to replace thinking, but to amplify it. Claude for reasoning, Perplexity for research, Gemini for docs. The bottleneck is the prompt, not the model.' },
];

// ─── Contact subjects ────────────────────────────────────────────────────────
const SUBJECTS = ['Finance / Risk Analytics', 'Product Management', 'Brand Design', 'Collaboration', 'Other'];

export default function About() {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await base44.entities.ContactInquiry.create({ ...form, status: 'new' });
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="bg-background text-foreground min-h-screen font-inter">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30 flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="font-inter font-black text-xl tracking-tighter hover:text-primary transition-colors">
          CT<Asterisk size={18} className="text-primary inline" />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors">← BACK TO PORTFOLIO</Link>
        </div>
      </nav>

      <main className="pt-24 pb-32">

        {/* ── HERO ── */}
        <section className="px-6 md:px-12 lg:px-20 py-24 border-b border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-px h-full bg-primary/8" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-6">// ABOUT ME</div>
            <h1 className="font-inter font-black leading-none tracking-tighter mb-6"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
              THE BRIEF
            </h1>
            <div className="max-w-2xl border-l-4 border-primary pl-8">
              <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-bold">Chulachak Tubsikhaew</span> — a Master's student in Insurance & Risk Management at Chulalongkorn University (GPA 4.00), former Operations Manager, product builder, and graphic designer. I live at the intersection of <span className="text-primary font-bold">rigorous quantitative analysis</span> and <span className="text-primary font-bold">bold visual communication</span>.
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mt-4">
                My background spans actuarial modeling, P&L management across 7 business units, designing brand identities for Bangkok nightlife venues, and building full-stack web platforms. I think in systems, communicate in visuals, and execute with data.
              </p>
            </div>
          </motion.div>

          {/* Quick stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-primary/20 mt-14">
            {[
              { v: '4.00', l: 'GPA — M.Sc.' },
              { v: 'THB 11.5M+', l: 'Revenue Driven' },
              { v: '200+', l: 'Staff Managed' },
              { v: '5×', l: 'Certifications' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255,95,31,0.08)' }}
                className="border-r border-primary/20 last:border-r-0 p-6 text-center cursor-default"
              >
                <div className="font-inter font-black text-2xl md:text-3xl text-primary">{s.v}</div>
                <div className="font-mono text-[9px] tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="px-6 md:px-12 lg:px-20 py-24 border-b border-primary/20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-12">// MY STORY</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-6">
              <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter">
                HOW I GOT <span className="text-primary">HERE</span>
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                It started with mathematics. I studied Secondary Education (Math) at Chulalongkorn — which taught me how to break down complexity into teachable, logical steps. That skill never left me.
              </p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Alongside academia, I ran operations for Bangkok Great Future Service — a multi-unit wellness and hospitality business. I managed 200+ staff, built the company's internal BI systems from scratch, and eventually designed and shipped the entire client-facing web platform.
              </p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Graphic design started as a side interest and grew into a serious discipline. I developed brand identities for White Rabbit Bar (Silom Soi 2) and GASS.BKK, learning that visual design and data analysis are fundamentally the same — both are about communicating truth clearly.
              </p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                Now I'm completing my M.Sc. in Insurance & Risk Management, applying quantitative methods — ALM modeling, loss distribution, portfolio optimization — to real insurance and investment problems.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {[
                { year: '2015–2020', title: 'Science & Math Program', sub: 'Boonwattana High School · GPA 3.99', tag: 'FOUNDATION' },
                { year: '2020–2025', title: 'B.Ed. Mathematics (Secondary)', sub: 'Chulalongkorn University · GPA 3.72', tag: 'EDUCATION' },
                { year: '2020–2024', title: 'Project & Marketing Coordinator', sub: 'CU Startup Thailand League', tag: 'CAREER' },
                { year: '2024', title: 'Teaching Intern — Mathematics', sub: 'Suankularb Wittayalai School', tag: 'CAREER' },
                { year: '2025–NOW', title: 'Manager, Operations & Product', sub: 'Bangkok Great Future Service', tag: 'CAREER' },
                { year: '2025–NOW', title: 'M.Sc. Insurance & Risk Management', sub: 'Chulalongkorn University · GPA 4.00', tag: 'EDUCATION' },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  whileHover={{ backgroundColor: 'rgba(255,95,31,0.05)' }}
                  className="flex gap-4 border-t border-primary/15 py-5 cursor-default transition-colors"
                >
                  <div className="w-24 shrink-0 font-mono text-[9px] tracking-widest text-primary pt-0.5">{item.year}</div>
                  <div className="flex-1">
                    <div className="font-inter font-bold text-sm text-foreground">{item.title}</div>
                    <div className="font-mono text-[9px] text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                  <div className={`font-mono text-[8px] tracking-widest px-2 py-0.5 h-fit self-start shrink-0 ${item.tag === 'EDUCATION' ? 'bg-primary text-background' : item.tag === 'FOUNDATION' ? 'border border-primary/40 text-primary' : 'border border-primary/20 text-muted-foreground'}`}>
                    {item.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORK TIMELINE ── */}
        <section className="px-6 md:px-12 lg:px-20">
          <WorkTimeline />
        </section>

        {/* ── WORK PHILOSOPHY ── */}
        <section className="px-6 md:px-12 lg:px-20 py-24 border-b border-primary/20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-12">// HOW I THINK</div>
          <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter mb-14">
            WORKING <span className="text-primary">PRINCIPLES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10">
            {PRINCIPLES.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ backgroundColor: 'rgba(255,95,31,0.07)', boxShadow: 'inset 4px 0 0 #FF5F1F' }}
                className="bg-background p-10 cursor-default transition-all"
              >
                <div className="font-mono text-[9px] tracking-widest text-primary/40 mb-3">{p.num}</div>
                <div className="font-inter font-black text-lg text-foreground tracking-tight mb-3">{p.title}</div>
                <div className="font-inter text-sm text-muted-foreground leading-relaxed">{p.body}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── AI TOOLS DASHBOARD ── */}
        <section className="px-6 md:px-12 lg:px-20 py-24 border-b border-primary/20">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// AI POWER USER</div>
          <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter mb-2">
            AI <span className="text-primary">TOOLKIT</span>
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-12">
            daily-use tools · hover bar to inspect use-case
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar chart */}
            <div className="border border-primary/20 p-6 relative overflow-hidden">
              <div className="font-mono text-[10px] tracking-widest text-primary mb-4">// PROFICIENCY_INDEX</div>
              <ResponsiveContainer width="100%" height={AI_TOOLS.length * 42}>
                <BarChart data={AI_TOOLS} layout="vertical" barCategoryGap={6}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#8A8A8A', fontSize: 9, fontFamily: 'JetBrains Mono' }} axisLine={{ stroke: '#FF5F1F', strokeWidth: 0.5 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#FFFFFF', fontSize: 10, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} width={100} />
                  <Bar dataKey="value" radius={0} animationDuration={800}>
                    {AI_TOOLS.map((_, i) => (
                      <Cell key={i}
                        fill={hoveredBar === i ? '#FFFFFF' : '#FF5F1F'}
                        onMouseEnter={() => setHoveredBar(i)}
                        onMouseLeave={() => setHoveredBar(null)}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <AnimatePresence>
                {hoveredBar !== null && (
                  <motion.div
                    key={hoveredBar}
                    initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="absolute bottom-5 right-5 font-mono text-[10px] text-primary border border-primary/40 bg-background px-3 py-2 max-w-[200px]"
                  >
                    <div className="text-muted-foreground text-[9px] mb-1">$ {AI_TOOLS[hoveredBar]?.snippet}</div>
                    <div className="text-foreground text-[9px]">{AI_TOOLS[hoveredBar]?.use}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Radar + use-case tags */}
            <div className="flex flex-col gap-6">
              <div className="border border-primary/20 p-6">
                <div className="font-mono text-[10px] tracking-widest text-primary mb-4">// COMPETENCY_RADAR</div>
                <ResponsiveContainer width="100%" height={220}>
                  <RadarChart data={AI_RADAR}>
                    <PolarGrid stroke="#FF5F1F" strokeWidth={0.4} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#8A8A8A', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
                    <Radar name="AI" dataKey="A" stroke="#FF5F1F" fill="#FF5F1F" fillOpacity={0.18} strokeWidth={2} animationDuration={800} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Tool cards */}
              <div className="grid grid-cols-2 gap-2">
                {AI_TOOLS.slice(0, 4).map((tool, i) => (
                  <motion.div key={i}
                    whileHover={{ y: -3, boxShadow: '4px 4px 0 #FF5F1F' }}
                    className="border border-primary/20 p-4 cursor-default transition-all"
                  >
                    <div className="font-inter font-black text-primary text-xl mb-1">{tool.value}%</div>
                    <div className="font-mono text-[9px] tracking-widest text-foreground">{tool.name}</div>
                    <div className="font-mono text-[8px] text-muted-foreground mt-1 leading-relaxed">{tool.use}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section className="px-6 md:px-12 lg:px-20 py-24">
          <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// GET IN TOUCH</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left copy */}
            <div>
              <h2 className="font-inter font-black leading-none tracking-tighter mb-6"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                LET'S<br /><span className="text-primary">TALK</span>
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
                Whether it's a risk-modeling brief, a branding project, a product opportunity, or just a coffee chat — I read every message.
              </p>
              <div className="space-y-0">
                {[
                  { l: 'EMAIL', v: 'viewtubsikhaew@gmail.com', href: 'mailto:viewtubsikhaew@gmail.com' },
                  { l: 'PHONE', v: '094-362-8554', href: 'tel:0943628554' },
                  { l: 'LINKEDIN', v: '/in/chulachak-tubsikhaew', href: 'https://linkedin.com/in/chulachak-tubsikhaew' },
                  { l: 'LOCATION', v: 'Bangkok, Thailand', href: null },
                ].map((item, i) => (
                  <div key={i} className="border-t border-primary/20 py-4 flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{item.l}</span>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          className="font-inter font-bold text-sm text-foreground hover:text-primary transition-colors">
                          <span className="inline-flex items-center gap-1">{item.v} <ArrowUpRight size={14} className="text-primary inline" /></span>
                        </a>
                      : <span className="font-inter font-bold text-sm text-foreground">{item.v}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="border-2 border-primary p-10 text-center">
                  <div className="flex justify-center mb-4 text-primary"><Asterisk size={56} /></div>
                  <div className="font-inter font-black text-3xl text-primary tracking-tighter">MESSAGE SENT!</div>
                  <div className="font-mono text-xs text-muted-foreground mt-2">I'll get back to you ASAP.</div>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit} className="border border-primary/30">

                  {[
                    { id: 'name', label: 'NAME *', type: 'text', placeholder: 'Your full name' },
                    { id: 'email', label: 'EMAIL *', type: 'email', placeholder: 'your@email.com' },
                  ].map((f) => (
                    <div key={f.id} className="border-b border-primary/30">
                      <label className="font-mono text-[9px] tracking-widest text-primary px-6 pt-4 block">{'>>'} {f.label}</label>
                      <input type={f.type} value={form[f.id]} onChange={(e) => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                        placeholder={f.placeholder} autoComplete="off"
                        className="w-full bg-transparent px-6 pb-4 pt-2 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none" />
                    </div>
                  ))}

                  <div className="border-b border-primary/30 px-6 py-4">
                    <div className="font-mono text-[9px] tracking-widest text-primary mb-3">{'>>'} INQUIRY TYPE</div>
                    <div className="flex flex-wrap gap-2">
                      {SUBJECTS.map((s) => (
                        <button key={s} type="button" onClick={() => setForm(p => ({ ...p, subject: s }))}
                          className={`font-mono text-[9px] tracking-wide px-3 py-1.5 border transition-all ${form.subject === s ? 'bg-primary text-background border-primary' : 'border-primary/30 text-muted-foreground hover:border-primary hover:text-primary'}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-b border-primary/30">
                    <label className="font-mono text-[9px] tracking-widest text-primary px-6 pt-4 block">{'>>'} MESSAGE *</label>
                    <textarea value={form.message} onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell me about your project..." rows={4}
                      className="w-full bg-transparent px-6 pb-4 pt-2 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-none" />
                  </div>

                  <motion.button type="submit" disabled={loading}
                    whileHover={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }} whileTap={{ scale: 0.97 }}
                    className="w-full bg-primary text-background font-inter font-black text-sm tracking-widest py-5 transition-colors disabled:opacity-60">
                    {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
