import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, X, FileText, BarChart2, Bot, Shield, TrendingUp, Activity, BookOpen, Layers, Building2, Code2, ShieldAlert, AlertTriangle, RefreshCw, Globe, PieChart } from 'lucide-react';
import BlockReveal from './BlockReveal';

const DOCS = [
  // ── GENERAL ──────────────────────────────────────────────────
  {
    id: 'cv',
    type: 'PDF',
    icon: FileText,
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
  // ── MANAGEMENT ──────────────────────────────────────────────
  {
    id: 'ops-bi',
    type: 'XLSX',
    icon: Building2,
    title: 'MULTI-UNIT OPS & BI SYSTEM',
    subtitle: 'Operations Management',
    desc: 'End-to-end operational tracking for 7 business units — real-time KPI dashboards, P&L tracking, payroll optimization, and HR pipeline. THB 11.5M+ revenue.',
    pages: '10 sheets',
    preview: [
      { label: 'Sheet 1', value: 'Revenue & P&L Summary — All 7 Units' },
      { label: 'Sheet 2', value: 'KPI Dashboard — Occupancy & Sales' },
      { label: 'Sheet 3', value: 'Payroll & Labour Cost Optimization' },
      { label: 'Sheet 4', value: 'Staff Scheduling — Peak/Off-Peak Model' },
      { label: 'Sheet 5', value: 'Seasonal Revenue Trend Analysis' },
      { label: 'Sheet 6–10', value: 'Branch Reports, HR Pipeline, Raw Data' },
    ],
  },
  // ── RISK MANAGEMENT ─────────────────────────────────────────
  {
    id: 'orsa',
    type: 'PDF',
    icon: ShieldAlert,
    title: 'ORSA & EARLY WARNING SYSTEM',
    subtitle: 'Insurance Risk Governance',
    desc: 'Own Risk and Solvency Assessment (ORSA) framework and early warning system design for AXA S.A. — regulatory capital adequacy and risk appetite monitoring.',
    pages: '16 pp.',
    preview: [
      { label: 'Section 1', value: 'ORSA Framework Overview — AXA S.A.' },
      { label: 'Section 2', value: 'Risk Appetite Statement & Tolerance Bands' },
      { label: 'Section 3', value: 'Solvency Capital Requirement (SCR) Analysis' },
      { label: 'Section 4', value: 'Early Warning Indicator Design' },
      { label: 'Section 5', value: 'Stress & Scenario Testing' },
      { label: 'Section 6', value: 'Regulatory Reporting & OIC Compliance' },
    ],
  },
  {
    id: 'op-risk',
    type: 'PDF',
    icon: AlertTriangle,
    title: 'OPERATIONAL RISK ANALYSIS',
    subtitle: 'Process Risk & Heat Map',
    desc: 'Process risk hierarchy and bottleneck analysis. Identified key operational vulnerabilities using risk heat maps and process flow modeling.',
    pages: '14 pp.',
    preview: [
      { label: 'Section 1', value: 'Process Risk Hierarchy Framework' },
      { label: 'Section 2', value: 'Risk Identification & Classification' },
      { label: 'Section 3', value: 'Bottleneck & Vulnerability Analysis' },
      { label: 'Section 4', value: 'Risk Heat Map Construction' },
      { label: 'Section 5', value: 'Control Assessment & Gap Analysis' },
      { label: 'Section 6', value: 'Mitigation Recommendations' },
    ],
  },
  {
    id: 'bcp',
    type: 'PDF',
    icon: RefreshCw,
    title: 'BCP & BCM ANALYSIS',
    subtitle: 'Business Continuity Planning',
    desc: 'Business Continuity Planning and Management analysis — bridging Property-Real Estate and Public Financial sectors. Assessment of JAS Asset and Bank of Thailand maturity.',
    pages: '13 pp.',
    preview: [
      { label: 'Section 1', value: 'BCP/BCM Framework & Standards (ISO 22301)' },
      { label: 'Section 2', value: 'JAS Asset — Property Sector BCP Maturity' },
      { label: 'Section 3', value: 'Bank of Thailand — Financial Sector BCM' },
      { label: 'Section 4', value: 'Business Impact Analysis (BIA)' },
      { label: 'Section 5', value: 'Recovery Time Objective (RTO) Benchmarks' },
      { label: 'Section 6', value: 'Gap Analysis & Improvement Roadmap' },
    ],
  },
  // ── ALM ─────────────────────────────────────────────────────
  {
    id: 'alm',
    type: 'XLSX',
    icon: BarChart2,
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
    id: 'svb',
    type: 'PDF',
    icon: BookOpen,
    title: 'SVB COLLAPSE — CASE STUDY',
    subtitle: 'ALM Failure & Banking Risk',
    desc: 'Inside the Fall: causes, consequences, and lessons learned from the collapse of Silicon Valley Bank — ALM failures, deposit run dynamics, and regulatory gaps.',
    pages: '12 pp.',
    preview: [
      { label: 'Section 1', value: 'Executive Summary & Event Timeline' },
      { label: 'Section 2', value: 'ALM Failure — Bond Portfolio Mismatch' },
      { label: 'Section 3', value: 'Deposit Run Dynamics' },
      { label: 'Section 4', value: 'Regulatory & Supervisory Gaps' },
      { label: 'Section 5', value: 'Contagion Effects & Market Impact' },
      { label: 'Section 6', value: 'Key Lessons for Risk Management' },
    ],
  },
  // ── INSURANCE ────────────────────────────────────────────────
  {
    id: 'insurance',
    type: 'PDF',
    icon: Shield,
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
  {
    id: 'loss',
    type: 'PDF',
    icon: Activity,
    title: 'LOSS DISTRIBUTION MODEL',
    subtitle: 'Actuarial Claim Severity',
    desc: 'Truncated claim severity modeling: MLE estimation, KS + chi-square goodness-of-fit, likelihood ratio testing, and BIC-based model selection in R & Python.',
    pages: '15 pp.',
    preview: [
      { label: 'Section 1', value: 'Claim Data Preprocessing & Truncation' },
      { label: 'Section 2', value: 'MLE Parameter Estimation' },
      { label: 'Section 3', value: 'KS & Chi-Square Goodness-of-Fit' },
      { label: 'Section 4', value: 'Likelihood Ratio Testing' },
      { label: 'Section 5', value: 'BIC Model Selection Results' },
      { label: 'Section 6', value: 'Fitted Severity Distribution Output' },
    ],
  },
  // ── FINANCE ─────────────────────────────────────────────────
  {
    id: 'retirement',
    type: 'XLSX',
    icon: TrendingUp,
    title: 'RETIREMENT PORTFOLIO MPT',
    subtitle: 'Portfolio Optimization',
    desc: 'Modern Portfolio Theory: efficient frontier construction, DCA vs. lump-sum backtesting, and sustainable withdrawal rate analysis across 8 asset classes.',
    pages: '8 sheets',
    preview: [
      { label: 'Sheet 1', value: 'Asset Return Data & Correlation Matrix' },
      { label: 'Sheet 2', value: 'Efficient Frontier Construction' },
      { label: 'Sheet 3', value: 'DCA vs. Lump-Sum Backtesting' },
      { label: 'Sheet 4', value: 'Capital Allocation Line (CAL)' },
      { label: 'Sheet 5', value: 'Sustainable Withdrawal Rate (3–4%)' },
      { label: 'Sheet 6–8', value: 'Stress Tests, Scenarios & Dashboard' },
    ],
  },
  {
    id: 'esg',
    type: 'PDF',
    icon: Globe,
    title: 'ESG RISK BENCHMARKING',
    subtitle: 'ESG & Risk Governance',
    desc: 'ESG integration and risk governance benchmarking across Allianz Ayudhya, Google, AIS, and Ping An Insurance — assessed against global ESG standards.',
    pages: '18 pp.',
    preview: [
      { label: 'Section 1', value: 'ESG Framework Overview & Scoring Criteria' },
      { label: 'Section 2', value: 'Allianz Ayudhya — Insurance ESG Profile' },
      { label: 'Section 3', value: 'Google — Tech Sector ESG Governance' },
      { label: 'Section 4', value: 'AIS — Telecom ESG & Sustainability' },
      { label: 'Section 5', value: 'Ping An Insurance — China ESG Benchmark' },
      { label: 'Section 6', value: 'Cross-Company Gap Analysis & Insights' },
    ],
  },
  {
    id: 'kpi',
    type: 'XLSX',
    icon: PieChart,
    title: 'FINANCIAL KPI DASHBOARD',
    subtitle: 'BI & Performance Reporting',
    desc: 'Real-time financial KPI tracking and performance reporting dashboard for multi-unit operations built in Tableau and Power BI.',
    pages: '6 sheets',
    preview: [
      { label: 'Sheet 1', value: 'Revenue vs. Target — All Units' },
      { label: 'Sheet 2', value: 'Cost Structure & Margin Analysis' },
      { label: 'Sheet 3', value: 'Workforce KPI — Headcount & Productivity' },
      { label: 'Sheet 4', value: 'Seasonal Trend & Forecast Model' },
      { label: 'Sheet 5', value: 'Power BI Dashboard Specs' },
      { label: 'Sheet 6', value: 'Raw Data & ETL Pipeline Notes' },
    ],
  },
  // ── CODE ─────────────────────────────────────────────────────
  {
    id: 'bgfs',
    type: 'CODE',
    icon: Code2,
    title: 'BGFS WEB PLATFORM',
    subtitle: 'React + SQL + Power BI',
    desc: 'Bangkok Great Future Service client-facing web app — multi-language (TH/ZH/EN) booking system, real-time seat availability, branch management, and KPI dashboard.',
    pages: 'Live App',
    preview: [
      { label: 'Stack', value: 'React · Base44 · SQL · Power BI · Google Sheets' },
      { label: 'Feature 1', value: 'TH/ZH/EN multi-language booking flow' },
      { label: 'Feature 2', value: 'Real-time seat availability by branch' },
      { label: 'Feature 3', value: 'Staff management & scheduling portal' },
      { label: 'Feature 4', value: 'KPI dashboard — P&L across 7 units' },
      { label: 'Impact', value: 'THB 11.5M+ revenue tracked & optimized' },
    ],
  },
  {
    id: 'attrition',
    type: 'XLSX',
    icon: Bot,
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
  // ── CREATIVE ─────────────────────────────────────────────────
  {
    id: 'whiterabbit-deck',
    type: 'PDF',
    icon: Layers,
    title: 'WHITE RABBIT — BRAND DECK',
    subtitle: 'Brand & Web Identity',
    desc: 'Full brand identity + website design for White Rabbit Bangkok (Silom Soi 2) — nightlife visual system, event pages, deals, menu design, and social media toolkit.',
    pages: '16 pp.',
    preview: [
      { label: 'Section 1', value: 'Brand Story & Nightlife Positioning' },
      { label: 'Section 2', value: 'Logo Mark & Typography System' },
      { label: 'Section 3', value: 'Color Palette & Visual Identity' },
      { label: 'Section 4', value: 'Website Design — Events, Menu, Deals' },
      { label: 'Section 5', value: 'Social Media Template Kit' },
      { label: 'Section 6', value: 'LGBTQ+ Friendly Campaign Assets' },
    ],
  },
  {
    id: 'olivia-deck',
    type: 'PDF',
    icon: Layers,
    title: 'OLIVIA & WISDOM — BRAND DECK',
    subtitle: 'Wellness Brand Identity',
    desc: 'Brand identity system for Olivia Massage and Wisdom Massage — premium wellness brands across 5 Bangkok branches in the Silom-Saladaeng area.',
    pages: '14 pp.',
    preview: [
      { label: 'Section 1', value: 'Brand Positioning — Premium Thai Wellness' },
      { label: 'Section 2', value: 'Logo Mark & Wordmark System' },
      { label: 'Section 3', value: 'Color Palette & Typography' },
      { label: 'Section 4', value: 'Branch Signage & Print Collateral' },
      { label: 'Section 5', value: 'Social Media & Digital Assets' },
      { label: 'Section 6', value: 'Multi-Branch Usage Guidelines' },
    ],
  },
  {
    id: 'gass',
    type: 'PDF',
    icon: Layers,
    title: 'GASS.BKK — BRAND DECK',
    subtitle: 'Brand Identity System',
    desc: 'Full visual identity deck for Bangkok street-culture brand — logo mark, color system, typography, merchandise mockups, and social media template kit.',
    pages: '20 pp.',
    preview: [
      { label: 'Section 1', value: 'Brand Story & Positioning' },
      { label: 'Section 2', value: 'Logo Mark & Wordmark System' },
      { label: 'Section 3', value: 'Color Palette & Typography' },
      { label: 'Section 4', value: 'Merchandise Mockup Suite' },
      { label: 'Section 5', value: 'Social Media Template Kit' },
      { label: 'Section 6', value: 'Brand Usage Guidelines' },
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
          <doc.icon size={36} className="mb-3 text-primary" />
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
        <div className={`absolute top-0 right-0 ${doc.type === 'PDF' ? 'bg-primary' : doc.type === 'CODE' ? 'bg-foreground/80' : 'bg-foreground'} text-background font-mono text-[8px] tracking-widest px-3 py-1`}>
          {doc.type}
        </div>

        <div className="p-6 pt-8">
          <doc.icon size={36} className="mb-3 text-primary" />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {DOCS.map((doc) => (
          <DocCard key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}