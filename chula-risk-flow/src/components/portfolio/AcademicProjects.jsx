import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlockReveal from './BlockReveal';

const projects = [
  {
    title: 'ALM Portfolio Construction and Risk Analysis',
    description: 'Liability modeling, LDI bond portfolio (duration/convexity matching), scenario & stress testing, Nelson-Siegel yield curve, and portfolio optimization.',
    tags: ['Finance', 'Risk', 'Excel', 'Bloomberg'],
  },
  {
    title: 'Insurance Product Design and Pricing Analysis',
    description: 'Designed an insurance product concept with benefit structure, pricing considerations, and business rationale for target customer segments.',
    tags: ['Insurance', 'Product Design', 'Actuarial'],
  },
  {
    title: 'Loss Distribution Modeling & Selection',
    description: 'Modeled truncated claim severity; performed MLE estimation, KS and chi-square tests, likelihood ratio testing, and BIC-based model selection.',
    tags: ['Statistics', 'R', 'Python', 'Actuarial'],
  },
  {
    title: 'Retirement Portfolio Optimization (MPT)',
    description: 'Applied MPT and DCA to optimize long-term retirement portfolio allocation based on risk-return trade-offs and RR targets.',
    tags: ['Portfolio Opt.', 'Finance', 'Python', 'Solver'],
  },
  {
    title: 'Employee Attrition Prediction & HR Analytics',
    description: 'Built classification models in Python using logistic regression and tree-based methods to identify drivers of employee turnover and inform retention strategy.',
    tags: ['ML', 'Python', 'HR Analytics', 'BI'],
  },
  {
    title: 'Business Intelligence Dashboard Design',
    description: 'Designed and built interactive BI dashboards in Tableau and Power BI to visualize operational KPIs, sales trends, and workforce metrics across 7 business units.',
    tags: ['BI', 'Tableau', 'Power BI', 'Data Viz'],
  },
  {
    title: 'Nonparametric Hypothesis Testing',
    description: 'Introduction to nonparametric statistical methods — sign test, Wilcoxon signed-rank, Mann-Whitney U, Kruskal-Wallis, and Spearman rank correlation. Presented Nov 2025.',
    tags: ['Statistics', 'R', 'Python', 'Actuarial'],
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/87335233c_PROBACTSCIPROJECT.jpg',
  },
  {
    title: 'ESG & Risk Management Benchmarking',
    description: 'Study case of leading companies (Allianz Ayudhya, Google, AIS, Ping An Insurance) — ESG integration, risk governance frameworks, and benchmarking against global standards.',
    tags: ['ESG', 'Risk', 'Case Study', 'Insurance'],
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/37a128cfb_ESGRiskManagementBenchmarking.png',
  },
  {
    title: 'SVB Collapse — Case Study',
    description: 'Inside the Fall: causes, consequences, and lessons learned from the collapse of Silicon Valley Bank. Analysis of ALM failures, deposit run dynamics, and regulatory gaps.',
    tags: ['Banking', 'ALM', 'Risk', 'Case Study'],
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/7a27800eb_SVB.png',
  },
  {
    title: 'Operational Risk Analysis — Process Risk',
    description: 'Process risk hierarchy and bottleneck analysis for MSI 16. Identified key operational vulnerabilities using risk heat maps and process flow modeling.',
    tags: ['Operational Risk', 'Process', 'Risk Mgmt'],
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/5969fe8fb_OPERATIONALRISKANALYSIS.png',
  },
  {
    title: 'BCP & BCM Analysis',
    description: 'Analysis of Business Continuity Planning and Management — bridging Property-Real Estate and Public Financial sectors. Assessment of JAS Asset and Bank of Thailand implementation maturity.',
    tags: ['BCP', 'BCM', 'Risk', 'Insurance'],
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/47c8d328d_BCPBCM.png',
  },
  {
    title: 'ORSA & Early Warning System — AXA S.A.',
    description: 'Own Risk and Solvency Assessment (ORSA) framework and early warning system design for AXA S.A. (Société Anonyme) — regulatory capital adequacy and risk appetite monitoring.',
    tags: ['ORSA', 'Insurance', 'Solvency', 'Risk'],
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/c5a5b0ad1_ORSAEarlyWarning.png',
  },
];

export default function AcademicProjects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="research" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">05</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">RESEARCH & ANALYSIS</span>
      </div>

      <div className="mb-12">
        <BlockReveal delay={0.1}>
          <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter">
            RESEARCH <span className="text-primary">&</span> ANALYSIS
          </h2>
        </BlockReveal>
      </div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-primary/20"
          >
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,95,31,0.04)' }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 cursor-pointer transition-colors"
            >
              <div className="lg:col-span-1 font-mono text-xs text-primary self-start pt-1">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="lg:col-span-4">
                {project.img && (
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    whileHover={{ filter: 'grayscale(0) sepia(0) hue-rotate(0deg) contrast(1) brightness(1)' }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-24 object-cover border border-primary/20 mb-3 protected cursor-pointer"
                    style={{ filter: expanded === i ? 'grayscale(0) sepia(0) hue-rotate(0deg) contrast(1) brightness(1)' : 'grayscale(0.6) sepia(0.4) hue-rotate(-10deg) contrast(1.1) brightness(0.85)' }}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                )}
                <h3 className="font-inter font-bold text-base md:text-lg text-foreground leading-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] tracking-widest border border-primary/30 text-primary px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="lg:col-span-1 flex items-start justify-end pt-1">
                <motion.span
                  animate={{ rotate: expanded === i ? 90 : 0 }}
                  className="font-mono text-primary text-lg"
                >→</motion.span>
              </div>
            </motion.div>

            {/* Expanded: contact to request */}
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pl-0 lg:pl-[calc(8.33%+1rem)] flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest text-muted-foreground">// FILES AVAILABLE ON REQUEST —</span>
                    <a
                      href="mailto:viewtubsikhaew@gmail.com?subject=Research Request&body=Hi Chulachak, I'd like to see your work on this project."
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary text-primary font-mono text-[9px] tracking-widest px-4 py-2 transition-colors"
                    >
                      CONTACT TO REQUEST →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}