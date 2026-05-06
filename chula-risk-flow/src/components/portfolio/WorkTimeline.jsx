import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, GraduationCap, Briefcase, ChevronDown } from 'lucide-react';

const TIMELINE = [
  {
    period: '2015 — 2020',
    role: 'Science, Math & English Program',
    org: 'Boonwattana High School',
    type: 'EDUCATION',
    Icon: GraduationCap,
    gpa: 'GPA 3.99',
    highlights: [
      'National Mathematics Olympiad (TMO) — National Level Competitor',
      'Intensive focus on advanced mathematics, science, and English',
      'Built rigorous analytical foundation that underpins all current work',
    ],
  },
  {
    period: '2020 — 2025',
    role: 'B.Ed. Secondary Education (Mathematics)',
    org: 'Chulalongkorn University',
    type: 'EDUCATION',
    Icon: GraduationCap,
    gpa: 'GPA 3.72',
    highlights: [
      'Core curriculum: pedagogy, advanced mathematics, curriculum design',
      'Developed ability to break complex concepts into teachable, logical steps',
      'Active in student-run startup and innovation ecosystems',
    ],
  },
  {
    period: '2020 — 2025',
    role: 'Project & Marketing Coordinator',
    org: 'CU Startup Thailand League · CU Innovation Hub',
    type: 'CAREER',
    Icon: Briefcase,
    highlights: [
      'Organized 3+ consecutive large-scale hackathons — 100+ participants each',
      'Designed full brand identity and visual systems for multiple events',
      'Built omni-channel marketing strategies: social, email, on-campus campaigns',
      'Cross-institutional partnerships: YEAH, Zero to One, USWC2021, YSEALI, US Embassy, SET',
    ],
  },
  {
    period: '2024 (MAY — OCT)',
    role: 'Mathematics Teaching Intern',
    org: 'Suankularb Wittayalai School',
    type: 'CAREER',
    Icon: GraduationCap,
    highlights: [
      'Developed data-driven lesson plans for Basic & Additional Mathematics',
      'Designed and analyzed student assessments to track learning outcomes',
      'Applied teaching philosophy: clarity in complexity, systems thinking',
    ],
  },
  {
    period: '2025 — PRESENT',
    role: 'Manager, Operations · Product · Project Coordination',
    org: 'Bangkok Great Future Service',
    type: 'CAREER',
    Icon: Building2,
    highlights: [
      'Managed 7 business units across wellness, hospitality & nightlife — 200+ staff',
      'Product Owner for BGFS web platform (TH/ZH/EN booking system)',
      'Built real-time KPI dashboards using Google Sheets · SQL · Power BI',
      'Generated THB 11.5M+ in total revenue via data-driven pricing & ops',
      'Directed HR pipeline: recruitment, performance reviews, payroll for 200+ staff',
    ],
  },
  {
    period: '2025 — PRESENT',
    role: 'M.Sc. Insurance and Risk Management',
    org: 'Chulalongkorn University',
    type: 'EDUCATION',
    Icon: GraduationCap,
    gpa: 'GPA 4.00',
    highlights: [
      'ALM Portfolio Construction — LDI bond modeling, Nelson-Siegel yield curve, stress testing',
      'Loss Distribution Modeling — MLE estimation, KS/chi-square tests, BIC model selection',
      'Insurance Product Design & Pricing — benefit structure, actuarial pricing, OIC compliance',
      'Retirement Portfolio (MPT) — efficient frontier, DCA backtesting, risk-return optimization',
      'Employee Attrition Prediction — logistic regression + random forest, Tableau dashboard',
    ],
  },
];

const TYPE_STYLE = {
  EDUCATION: { bar: 'bg-primary', tag: 'bg-primary text-background', dot: 'bg-primary' },
  CAREER: { bar: 'bg-foreground', tag: 'border border-primary/50 text-primary', dot: 'bg-foreground' },
};

export default function WorkTimeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-16 border-t border-primary/20">
      <div className="font-mono text-[10px] tracking-[0.4em] text-primary mb-4">// WORK_EXPERIENCE</div>
      <h2 className="font-inter font-black text-4xl md:text-5xl tracking-tighter mb-12">
        WORK <span className="text-primary">TIMELINE</span>
      </h2>

      {/* Legend */}
      <div className="flex gap-6 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary" />
          <span className="font-mono text-[9px] tracking-widest text-muted-foreground">EDUCATION</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-foreground" />
          <span className="font-mono text-[9px] tracking-widest text-muted-foreground">CAREER</span>
        </div>
      </div>

      {/* Timeline entries */}
      <div className="relative">
        {/* Vertical thick line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 hidden md:block" />

        <div className="space-y-0">
          {TIMELINE.map((item, i) => {
            const styles = TYPE_STYLE[item.type];
            const isOpen = expanded === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="relative md:pl-10"
              >
                {/* Thick colored left bar (type indicator) */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 hidden md:block ${styles.bar} transition-all duration-300 ${isOpen ? 'w-2' : ''}`} />

                {/* Dot on the vertical line */}
                <div className={`absolute left-[-5px] top-8 w-3 h-3 border-2 border-background hidden md:block ${styles.dot}`} />

                <div
                  className="border-t border-primary/15 py-6 cursor-pointer group"
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">

                    {/* Period */}
                    <div className="shrink-0 md:w-44">
                      <div className="font-mono text-[10px] tracking-widest text-primary font-bold">{item.period}</div>
                      {item.gpa && (
                        <div className="font-inter font-black text-primary text-sm mt-1">{item.gpa}</div>
                      )}
                    </div>

                    {/* Main content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-3 mb-1">
                        <item.Icon size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="font-inter font-black text-base md:text-lg text-foreground leading-tight">{item.role}</div>
                          <div className="font-mono text-[10px] tracking-widest text-muted-foreground mt-0.5">{item.org}</div>
                        </div>
                      </div>
                    </div>

                    {/* Tag + toggle */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`font-mono text-[8px] tracking-widest px-2 py-0.5 ${styles.tag}`}>{item.type}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={14} className="text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded highlights */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 md:ml-[calc(11rem+1rem)] border-l-4 border-primary pl-4 space-y-2">
                          {item.highlights.map((h, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.04 }}
                              className="flex gap-2 items-start"
                            >
                              <span className="text-primary font-mono text-xs mt-0.5 shrink-0">→</span>
                              <span className="font-inter text-sm text-muted-foreground leading-relaxed">{h}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: isOpen ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}