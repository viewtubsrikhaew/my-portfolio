import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlockReveal from './BlockReveal';

const experiences = [
  {
    period: 'OCT 2025 — PRESENT',
    role: 'Manager, Operations, Product & Project Coordination',
    company: 'Bangkok Great Future Service',
    tags: ['Product Management', 'Operations', 'Finance', 'BI', 'Web Dev'],
    highlights: [
      'Orchestrated end-to-end operations for 7 business units across wellness, hospitality, and nightlife, managing 200+ employees',
      'Served as Product Owner for internal digital platforms — defined product vision, owned feature backlog, ran sprint planning, and coordinated cross-functional rollout with developers and operations teams',
      'Designed and built the Bangkok Great Future Service client-facing web app — full-stack booking and branch management system supporting real-time seat availability, branch selection, and multi-language UI (TH/ZH/EN)',
      'Led P&L analysis and business intelligence reporting — built dashboards tracking KPIs across all units using Google Sheets + SQL + Power BI',
      'Leveraged sales and operational data for performance analysis, identifying key revenue drivers and seasonal pricing strategy',
      'Directed HR functions: recruitment pipeline, performance evaluation frameworks, and payroll optimization for 200+ staff',
      'Generated THB 11.5M+ total revenue across major seasonal peaks through data-driven pricing and ops decisions',
    ],
  },
  {
    period: 'NOV 2020 — MAY 2025',
    role: 'Project & Marketing Coordinator',
    company: 'CU Startup Thailand League & CU Innovation Hub',
    tags: ['Marketing', 'Project Mgmt', 'Branding', 'Events'],
    highlights: [
      'Organized and coordinated CU Startup hackathons — full event lifecycle from planning to 100+ participant execution',
      'Developed omni-channel marketing strategies (social, email, on-campus) to drive student and startup engagement',
      'Created brand identity and design assets for events, including banners, pitch deck templates, and digital campaigns',
      'Supported startup incubation and university spin-offs, facilitating mentorship connections and investor relations',
      'Produced post-event reports with performance metrics and recommendations for future iterations',
    ],
  },
  {
    period: 'MAY 2024 — OCT 2024',
    role: 'Mathematics Teaching Intern',
    company: 'Suankularb Wittayalai School',
    tags: ['Education', 'Analytics'],
    highlights: [
      'Developed data-driven lesson plans for Basic and Additional Mathematics at secondary level',
      'Designed and analyzed student assessments to measure learning outcomes and adjust teaching strategy',
    ],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">02</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">EXPERIENCE</span>
      </div>

      <BlockReveal delay={0.1}>
        <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter mb-16">
          WORK <span className="text-primary">TIMELINE</span>
        </h2>
      </BlockReveal>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="border-t border-primary/20"
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 cursor-pointer hover:bg-primary/5 px-4 -mx-4 transition-colors"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="lg:col-span-3">
                <div className="font-mono text-xs tracking-widest text-primary">{exp.period}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{exp.company}</div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] tracking-widest border border-primary/25 text-primary/70 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8">
                <h3 className="font-inter font-bold text-xl text-foreground">{exp.role}</h3>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 mt-4 overflow-hidden"
                    >
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <span className="text-primary font-mono text-sm mt-0.5 shrink-0">→</span>
                          <span className="font-inter text-sm text-muted-foreground leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div className="lg:col-span-1 flex items-start justify-end pt-1">
                <motion.span
                  animate={{ rotate: expanded === i ? 90 : 0 }}
                  className="font-mono text-primary text-lg"
                >→</motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}