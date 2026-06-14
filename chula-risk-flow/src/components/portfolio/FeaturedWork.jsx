import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, BarChart2, Shield, TrendingUp, Building2, Bot, Rocket, Globe, Layers } from 'lucide-react';
import BlockReveal from './BlockReveal';

const FEATURED = [
  {
    id: 'alm',
    category: 'FINANCE',
    tag: 'RISK MANAGEMENT',
    title: 'ALM Portfolio Construction',
    year: '2025',
    Icon: BarChart2,
    color: '#FF5F1F',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/9939be486_image.png',
    imgStyle: 'object-position: top',
    summary: 'Asset-Liability Management with LDI bond portfolio, Nelson-Siegel yield curve calibration, and multi-scenario stress testing.',
    highlights: [
      'Duration & Convexity Matching — minimize tracking error vs. liability schedule',
      'Nelson-Siegel Curve Calibration — fitted from real Bloomberg yield data',
      'Stress Test: 3 rate regimes (Base / +200bps / -100bps)',
      'Solver-based Portfolio Optimizer — 12-sheet Excel workbook',
    ],
    tools: ['Excel', 'Bloomberg', 'Python'],
    impact: 'Academic capstone — top-grade actuarial risk project',
  },
  {
    id: 'insurance2',
    category: 'PRODUCT',
    tag: 'PRODUCT MANAGEMENT',
    title: 'Insurance Product Design & Pricing',
    year: '2024',
    Icon: Shield,
    color: '#FF5F1F',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781421183/0A76F3C3-AD3B-4048-8D90-C627E496A9E0_bbmojo.jpg',
    imgStyle: 'object-position: top',
    summary: 'Product concept paper: benefit design, target segment, actuarial pricing, and competitive landscape analysis for a new insurance product targeting urban professionals.',
    highlights: [
      'Target segment: young urban professionals, 25-35 age bracket',
      'Benefit structure: critical illness + income replacement rider',
      'Actuarial pricing using mortality tables + expense loadings',
      'Regulatory analysis: OIC framework compliance review',
    ],
    tools: ['Excel', 'Actuarial Tables', 'PowerPoint'],
    impact: 'Comprehensive 18-page product feasibility report',
  },
  {
    id: 'insurance',
    category: 'PRODUCT',
    tag: 'PRODUCT MANAGEMENT',
    title: 'Insurance Product Design & Pricing',
    year: '2025',
    Icon: Shield,
    color: '#FF5F1F',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/d95bd0392_image.png',
    imgStyle: 'object-position: top',
    summary: 'Product concept paper: benefit design, target segment, actuarial pricing, and competitive landscape analysis.',
    highlights: [
      'Target segment: young urban professionals, 25-35 age bracket',
      'Benefit structure: critical illness + income replacement rider',
      'Actuarial pricing using mortality tables + expense loadings',
      'Regulatory analysis: OIC framework compliance review',
    ],
    tools: ['Excel', 'Actuarial Tables', 'PowerPoint'],
    impact: 'Comprehensive 18-page product feasibility report',
  },
  {
    id: 'retirement-portfolio',
    category: 'FINANCE',
    tag: 'PORTFOLIO OPTIMIZATION',
    title: 'Retirement Portfolio Optimization Using MPT',
    year: '2023',
    Icon: TrendingUp,
    color: '#FF5F1F',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/746c5e520_image.png',
    summary: 'Applied Modern Portfolio Theory (MPT) and Dollar-Cost Averaging (DCA) to optimize long-term retirement portfolio allocation based on risk-return trade-offs and IRR targets.',
    highlights: [
      'Efficient Frontier Construction: calculated optimal asset allocation across 8 asset classes (stocks, bonds, REITs, commodities)',
      'MPT Analysis: derived minimum variance portfolios and capital allocation line (CAL) for risk-averse retirees',
      'DCA Strategy Backtesting: evaluated dollar-cost averaging impact vs. lump-sum investing across market cycles',
      'Risk-Return Optimization: modeled portfolio performance under multiple economic scenarios and volatility regimes',
      'IRR & Withdrawal Rate Analysis: calculated sustainable withdrawal rates (3-4%) to ensure longevity',
      'Sensitivity Testing: stress-tested portfolio against inflation, interest rate shocks, and sequence-of-returns risk',
    ],
    tools: ['Excel', 'Python', 'Solver', 'Matplotlib'],
    impact: 'Developed replicable framework for retirement planning supporting 25-30 year+ decumulation horizons',
  },
  {
    id: 'ops-management',
    category: 'OPERATIONS / MANAGEMENT',
    tag: 'OPERATIONS & HR MANAGEMENT',
    title: 'Multi-Unit Operations & Revenue Growth',
    year: '2025',
    Icon: Building2,
    color: '#FF5F1F',
    imgStyle: 'object-position: top',
    summary: 'Led end-to-end operations for 7 business units across wellness, hospitality, and nightlife sectors — managing 200+ employees, implementing data-driven strategies, and generating THB 11.5M+ in total revenue.',
    highlights: [
      'Orchestrated operational compliance across 7 venues: 100% scheduling adherence, zero safety violations, consistent brand standards',
      'Directed HR functions: recruitment pipeline optimization, performance evaluation frameworks, and payroll management for 200+ staff',
      'Implemented data-driven labor scheduling reducing turnover by 25% and maximizing shift efficiency across peak/off-peak periods',
      'Performed trend analysis & revenue forecasting using sales & operational data, identifying key revenue drivers by season',
      'Spearheaded cross-functional marketing initiatives aligning seasonal promotions with market demand (Christmas/NYE, Songkran peaks)',
      'Key Achievement: Generated THB 11.5M+ total revenue across major seasonal peaks through optimized pricing and promotional strategy',
    ],
    tools: ['Excel', 'Google Sheets', 'Power BI', 'SQL', 'Project Management'],
    impact: 'Built scalable operational framework supporting 30% YoY revenue growth across all units',
  },
  {
    id: 'attrition',
    category: 'ANALYTICS',
    tag: 'ML / BUSINESS INTELLIGENCE',
    title: 'Employee Attrition Prediction',
    year: '2024',
    Icon: Bot,
    color: '#FF5F1F',
    summary: 'HR analytics classification model to predict employee turnover using logistic regression and tree-based methods.',
    highlights: [
      'Feature engineering on IBM HR Analytics Dataset (1,470 records)',
      'Logistic Regression vs. Random Forest — AUC comparison',
      'Feature importance ranking → actionable HR retention insights',
      'Tableau dashboard: attrition heatmap by dept, tenure, and salary band',
    ],
    tools: ['Python', 'sklearn', 'Pandas', 'Tableau'],
    impact: 'Identified top 5 attrition drivers with 87%+ model accuracy',
  },
  {
    id: 'hackathon',
    category: 'PROJECT MANAGEMENT',
    tag: 'EVENT COORDINATION',
    title: 'Multi-University Hackathon Series',
    year: '2022–2024',
    Icon: Rocket,
    color: '#FF5F1F',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/b49d85697_IMG_7382.jpg',
    imgStyle: 'object-position: top',
    summary: 'Orchestrated and managed large-scale hackathon events across multiple university clubs and startup ecosystems — coordinating identity design, project logistics, participant engagement, and cross-institutional partnerships.',
    highlights: [
      'Coordinated 3+ consecutive hackathons for CU Innovation Hub, CU Startup Thailand League, and CU SciStartup',
      'Brand identity & visual system design for event materials, websites, and social media campaigns',
      'Full event logistics: venue coordination, 100+ participant management, judging panels, and technical infrastructure',
      'Cross-institutional partnerships: collaborated with YEAH (Young Entrepreneur Assembly Hub), Zero to One, Entrepath, USWC2021 ecosystem',
      'Post-event analytics: tracking mentorship ROI, startup funding outcomes, and incubation success metrics',
    ],
    tools: ['Project Management', 'Brand Design', 'Canva', 'Event Logistics'],
    impact: 'CU Innovation Hub flagship event — hands-on experience in end-to-end event management and startup ecosystem building',
  },
  {
    id: 'bgfs-frontend',
    category: 'PRODUCT / WEB',
    tag: 'WEB DESIGN + PRODUCT',
    title: 'BGFS Web Platform — Client Side',
    year: '2025',
    Icon: Globe,
    color: '#FF5F1F',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422113/messageImage_1781422053975_fuqnmd.jpg',
    imgStyle: 'object-position: top',
    summary: 'Client-facing web app for Bangkok Great Future Service — TH/ZH/EN multi-language booking system with real-time seat availability and branch selection.',
    highlights: [
      'TH/ZH/EN multi-language booking flow — targeting Thai, Chinese, and international guests',
      'Real-time seat availability display by branch and service type',
      'Responsive UI for mobile-first customer experience',
      'Branch selection, service catalog, and reservation confirmation flow',
    ],
    tools: ['React', 'Base44', 'Tailwind CSS', 'Framer Motion'],
    impact: 'Live customer-facing platform — active bookings across 7 branches',
  },
  {
    id: 'bgfs-backend',
    category: 'PRODUCT / MANAGEMENT',
    tag: 'OPERATIONS + BI DASHBOARD',
    title: 'BGFS Web Platform — Admin & Ops',
    year: '2025',
    Icon: Globe,
    color: '#FF5F1F',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422112/messageImage_1781422029060_dsdnix.jpg',
    imgStyle: 'object-position: top',
    summary: 'Back-office management system for BGFS — staff portal, branch management, KPI BI dashboard, and P&L tracking for 7 business units.',
    highlights: [
      'Staff management portal — scheduling, role assignment, and attendance tracking',
      'Branch management: seat config, service settings, and real-time occupancy',
      'Google Sheets + SQL + Power BI KPI dashboards for P&L across all units',
      'THB 11.5M+ total revenue tracked and optimized through data-driven pricing',
    ],
    tools: ['React', 'Base44', 'SQL', 'Power BI', 'Google Sheets'],
    impact: 'Product Owner — full-stack ops system powering 7 business units',
  },
  {
    id: 'gass',
    category: 'CREATIVE',
    tag: 'BRAND IDENTITY',
    title: 'GASS.BKK Brand Identity',
    year: '2024',
    Icon: Layers,
    color: '#FFFFFF',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/cde86e395_S__10002434.jpg',
    imgStyle: 'object-position: center',
    summary: 'Full visual identity system for a Bangkok street-culture brand — from logo mark to brand guideline deck.',
    highlights: [
      'Logo mark + wordmark system with full brand guidelines',
      'Merchandise mockup suite — apparel, accessories, packaging',
      'Social media template kit — Stories, Reels cover, Feed grid',
      'Typography system: display + body pairing with color tokens',
    ],
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    impact: 'Full brand launch — active social presence',
  },
  {
    id: 'whiterabbit',
    category: 'CREATIVE / WEB',
    tag: 'WEB DESIGN + VISUAL CAMPAIGN',
    title: 'White Rabbit Bar — Brand & Web',
    year: '2023',
    emoji: '🐇',
    color: '#FFFFFF',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422112/messageImage_1781422088952_saec53.jpg',
    imgStyle: 'object-position: top',
    imgs: [
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422112/messageImage_1781422088952_saec53.jpg',
      'https://media.base44.com/images/public/69f811de984f384ae6db76b7/7cc785b9b_image.png',
      'https://media.base44.com/images/public/69f811de984f384ae6db76b7/3e37911fc_image.png',
    ],
    summary: 'Full brand identity + website design for White Rabbit Bangkok (Silom Soi 2) — nightlife web platform with events, deals, menu, and SEO-optimized structure.',
    highlights: [
      'Designed full website: hero, events calendar, tonight\'s deals system, menu catalog, gallery, contact & reservation',
      'Event page design: "UPCOMING NIGHTS" with DJ lineup, date, and time system',
      'Digital menu system: drinks, food offerings with descriptions and pricing',
      'Deals system: Happy Hour, Friday Special, Bottle Package with booking CTAs',
      'SEO optimization: meta tags, structured data, mobile responsiveness, fast loading for search visibility',
      'Brand identity: bold typography, LGBTQ+ friendly nightlife aesthetic, social media toolkit',
    ],
    tools: ['Web Design', 'Illustrator', 'Canva', 'Lightroom', 'SEO'],
    impact: 'Live website — active Bangkok nightlife venue with strong search presence',
  },
];

function FeaturedModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/96 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl border-2 border-primary bg-card overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Top bar */}
        <div className="bg-primary flex items-center justify-between px-6 py-3 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-widest text-background">{item.tag}</span>
            <span className="font-mono text-[9px] text-background/60">// {item.year}</span>
          </div>
          <button onClick={onClose} className="text-background hover:opacity-60 transition-opacity">
            <X size={16} />
          </button>
        </div>

        <div className="p-8">
          {item.imgs ? (
            <div className="grid grid-cols-3 gap-1.5 mb-6">
              {item.imgs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${item.title} ${i + 1}`}
                  className={`w-full object-cover border border-primary/20 protected ${i === 0 ? 'col-span-3 h-36' : 'h-20'}`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              ))}
            </div>
          ) : item.img ? (
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-44 object-cover mb-6 border border-primary/20 protected"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div className="w-full h-24 flex items-center justify-center text-6xl mb-6 border border-primary/20 bg-background select-none">
              {item.emoji}
            </div>
          )}

          <div className="font-mono text-[10px] tracking-widest text-primary mb-1">{item.category}</div>
          <h2 className="font-inter font-black text-3xl text-foreground tracking-tighter mb-3">{item.title}</h2>
          <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">{item.summary}</p>

          {/* Highlights */}
          <div className="border border-primary/20 mb-6">
            <div className="bg-primary/10 px-4 py-2 font-mono text-[9px] tracking-widest text-primary border-b border-primary/20">
              KEY DELIVERABLES
            </div>
            {item.highlights.map((h, i) => (
              <div key={i} className="flex gap-3 items-start px-4 py-3 border-b border-primary/10 last:border-b-0">
                <span className="text-primary font-mono text-xs mt-0.5 shrink-0">→</span>
                <span className="font-inter text-sm text-muted-foreground leading-relaxed">{h}</span>
              </div>
            ))}
          </div>

          {/* Tools + Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-[9px] tracking-widest text-muted-foreground mb-2">TOOLS_USED</div>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((t) => (
                  <span key={t} className="font-mono text-[10px] tracking-wide border border-primary text-primary px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-widest text-muted-foreground mb-2">IMPACT</div>
              <div className="font-inter font-bold text-sm text-foreground border-l-2 border-primary pl-3">
                {item.impact}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedCard({ item, index, onClick }) {
  const isFinance = ['FINANCE', 'ANALYTICS', 'PRODUCT', 'MANAGEMENT'].includes(item.category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -8, boxShadow: isFinance ? '10px 10px 0 #FF5F1F' : '10px 10px 0 #FFFFFF', scale: 1.02 }}
      onClick={() => onClick(item)}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`relative cursor-pointer border-2 overflow-hidden group transition-colors
        ${isFinance ? 'border-primary/40 hover:border-primary' : 'border-foreground/40 hover:border-foreground'}
      `}
    >
      {item.img ? (
        <div className="relative h-40 overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 protected"
            style={item.imgStyle ? { objectPosition: 'top' } : {}}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>
      ) : (
        <div className="h-40 flex items-center justify-center bg-card border-b border-primary/20">
          <span className="text-6xl select-none group-hover:scale-110 transition-transform duration-300">
            {item.emoji}
          </span>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`font-mono text-[8px] tracking-widest px-2 py-0.5 ${
            isFinance ? 'bg-primary text-background' : 'bg-foreground text-background'
          }`}>
            {item.category}
          </span>
          <span className="font-mono text-[8px] tracking-widest text-muted-foreground">{item.year}</span>
        </div>
        <h3 className="font-inter font-black text-base text-foreground tracking-tight leading-tight mb-2">
          {item.title}
        </h3>
        <p className="font-inter text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {item.summary}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {item.tools.slice(0, 2).map((t) => (
              <span key={t} className="font-mono text-[8px] border border-primary/30 text-primary px-1.5 py-0.5">
                {t}
              </span>
            ))}
          </div>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="text-primary font-mono text-xs group-hover:opacity-100 opacity-60 transition-opacity flex items-center gap-1"
          >
            VIEW <ArrowRight size={10} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="featured" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">★</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">FEATURED WORK</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <BlockReveal delay={0.1}>
          <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter">
            SELECTED <span className="text-primary">WORKS</span>
          </h2>
        </BlockReveal>
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground max-w-xs leading-relaxed">
          // CLICK ANY CARD TO VIEW FULL BREAKDOWN — FINANCE + CREATIVE HIGHLIGHTS
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURED.map((item, i) => (
          <FeaturedCard key={item.id} item={item} index={i} onClick={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <FeaturedModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}