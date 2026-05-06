import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, X } from 'lucide-react';
import BlockReveal from './BlockReveal';

const DOCS = [
  {
    id: 'cv',
    type: 'PDF',
    icon: '📄',
    title: 'CURRICULUM VITAE',
    subtitle: 'Full Resume — 2025 Edition',
    desc: 'Complete professional CV covering education, work experience, skills, certifications, and academic projects.',
    pages: '2 pp.',
    preview: [
      { label: 'Name', value: 'Chulachak Tubsikhaew' },
      { label: 'Degree', value: 'M.Sc. Insurance & Risk Management' },
      { label: 'GPA', value: '4.00' },
      { label: 'Experience', value: 'Operations Manager — THB 11.5M+ revenue' },
      { label: 'Skills', value: 'Python · R · SQL · Bloomberg · Excel · Tableau' },
      { label: 'Certifications', value: '5× (Google ×3, Bloomberg, TMO National Olympiad)' },
    ],
  },
  {
    id: 'alm',
    type: 'XLSX',
    icon: '📊',
    title: 'ALM PORTFOLIO MODEL',
    subtitle: 'Asset-Liability Management',
    desc: 'Full Excel workbook: bond portfolio optimizer, duration/convexity model, Nelson-Siegel curve, and scenario stress testing.',
    pages: '12 sheets',
    preview: [
      { label: 'Sheet 1', value: 'Liability Schedule & Cash Flow Projection' },
      { label: 'Sheet 2', value: 'Bond Portfolio — Duration/Convexity Matching' },
      { label: 'Sheet 3', value: 'Nelson-Siegel Yield Curve Calibration' },
      { label: 'Sheet 4', value: 'Stress Test Scenarios (3 rate regimes)' },
      { label: 'Sheet 5', value: 'Portfolio Optimizer (Solver — min tracking error)' },
      { label: 'Sheet 6–12', value: 'Sensitivity Analysis, Dashboard, Raw Data' },
    ],
  },
  {
    id: 'attrition',
    type: 'XLSX',
    icon: '🤖',
    title: 'EMPLOYEE ATTRITION MODEL',
    subtitle: 'HR Analytics & Prediction',
    desc: 'Classification model: feature engineering, logistic regression, tree-based methods, and retention recommendations.',
    pages: '8 sheets',
    preview: [
      { label: 'Sheet 1', value: 'Raw Data — IBM HR Analytics Dataset' },
      { label: 'Sheet 2', value: 'Feature Engineering & Preprocessing' },
      { label: 'Sheet 3', value: 'Logistic Regression Results' },
      { label: 'Sheet 4', value: 'Decision Tree & Random Forest Summary' },
      { label: 'Sheet 5', value: 'Feature Importance Ranking' },
      { label: 'Sheet 6–8', value: 'HR Retention Recommendations & Dashboard' },
    ],
  },
  {
    id: 'insurance',
    type: 'PDF',
    icon: '🛡️',
    title: 'INSURANCE PRODUCT DECK',
    subtitle: 'Product Design & Pricing',
    desc: 'Product concept paper: benefit design, target segment, actuarial pricing considerations, and competitive landscape.',
    pages: '18 pp.',
    preview: [
      { label: 'Section 1', value: 'Executive Summary & Product Concept' },
      { label: 'Section 2', value: 'Target Customer Segment Analysis' },
      { label: 'Section 3', value: 'Benefit Structure & Coverage Design' },
      { label: 'Section 4', value: 'Actuarial Pricing Considerations' },
      { label: 'Section 5', value: 'Competitive Landscape & Differentiation' },
      { label: 'Section 6', value: 'Regulatory Framework & Risk Factors' },
    ],
  },
];

function PreviewModal({ doc, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="border-2 border-primary bg-card w-full max-w-md overflow-hidden"
      >
        {/* Header bar */}
        <div className="bg-primary px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] tracking-widest text-background">PREVIEW // {doc.type}</span>
            <span className="font-mono text-[8px] text-background/60 border border-background/30 px-1.5 py-0.5">READ ONLY</span>
          </div>
          <button onClick={onClose} className="text-background hover:opacity-60"><X size={14} /></button>
        </div>

        <div className="p-8">
          <div className="text-4xl mb-3 select-none">{doc.icon}</div>
          <div className="font-inter font-black text-xl text-foreground tracking-tighter">{doc.title}</div>
          <div className="font-mono text-[9px] tracking-widest text-primary mt-1 mb-6">{doc.subtitle} · {doc.pages}</div>

          {/* Table-of-contents style preview */}
          <div className="space-y-0 border border-primary/20">
            {doc.preview.map((row, i) => (
              <div key={i} className="grid grid-cols-5 border-b border-primary/10 last:border-b-0">
                <div className="col-span-2 font-mono text-[9px] tracking-widest text-primary px-4 py-3 border-r border-primary/10 bg-primary/5">
                  {row.label}
                </div>
                <div className="col-span-3 font-inter text-xs text-muted-foreground px-4 py-3 leading-relaxed">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* No-download notice */}
          <div className="mt-6 flex items-center gap-2 border border-primary/20 px-4 py-3 bg-primary/5">
            <Lock size={11} className="text-primary shrink-0" />
            <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
              PREVIEW ONLY — DOWNLOAD DISABLED. CONTACT TO REQUEST ACCESS.
            </span>
          </div>

          <a
            href="mailto:viewtubsikhaew@gmail.com?subject=Document Request&body=Hi Chulachak, I'd like to request access to your document."
            className="block w-full mt-3 bg-primary text-background font-mono text-[10px] tracking-widest py-3 hover:bg-foreground transition-colors text-center"
          >
            REQUEST ACCESS VIA EMAIL →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DocCard({ doc }) {
  const [hovered, setHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -4, boxShadow: '8px 8px 0px #FF5F1F' }}
        transition={{ duration: 0.2 }}
        className="relative border-2 border-primary/40 hover:border-primary bg-card overflow-hidden group cursor-default"
      >
        <div className={`absolute top-0 right-0 ${doc.type === 'PDF' ? 'bg-primary' : 'bg-foreground'} text-background font-mono text-[8px] tracking-widest px-3 py-1`}>
          {doc.type}
        </div>

        <div className="p-6 pt-8">
          <div className="text-4xl mb-3 select-none">{doc.icon}</div>
          <div className="font-inter font-black text-lg text-foreground tracking-tight leading-tight">{doc.title}</div>
          <div className="font-mono text-[9px] tracking-widest text-primary mt-1">{doc.subtitle}</div>
          <p className="font-inter text-xs text-muted-foreground mt-3 leading-relaxed">{doc.desc}</p>

          <div className="flex items-center justify-between mt-6">
            <span className="font-mono text-[9px] tracking-widest text-muted-foreground">{doc.pages}</span>
            <AnimatePresence mode="wait">
              {hovered ? (
                <motion.button
                  key="preview-btn"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowPreview(true)}
                  className="flex items-center gap-1.5 bg-primary text-background font-mono text-[9px] tracking-widest px-3 py-2 hover:bg-foreground transition-colors"
                >
                  <Eye size={10} /> PREVIEW
                </motion.button>
              ) : (
                <motion.div
                  key="locked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-muted-foreground"
                >
                  <Lock size={10} /> PROTECTED
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <AnimatePresence>
        {showPreview && <PreviewModal doc={doc} onClose={() => setShowPreview(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function DocumentsSection() {
  return (
    <section id="documents" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">07</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">DOCUMENTS // PROTECTED</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <BlockReveal delay={0.1}>
          <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter">
            FILES <span className="text-primary">&</span> ASSETS
          </h2>
        </BlockReveal>
        <div className="flex items-center gap-2 border border-primary/20 px-4 py-2">
          <Lock size={12} className="text-primary" />
          <span className="font-mono text-[9px] tracking-widest text-muted-foreground">PREVIEW ONLY — NO DOWNLOADS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DOCS.map((doc) => (
          <DocCard key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}