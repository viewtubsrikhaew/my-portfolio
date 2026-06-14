import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart2, Shield, TrendingUp, Cpu, Building2, BarChart, Briefcase, Palette, Megaphone, Layers } from 'lucide-react';
import BlockReveal from './BlockReveal';

const BRANDING_1 = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/cde86e395_S__10002434.jpg';
const BAR_PROJECT = 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422112/messageImage_1781422088952_saec53.jpg';
const BAR_PROJECT_2 = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/3e37911fc_image.png';
const BGFS_IMG = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/6db4d19e2_image.png';
const BRANDING_2 = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/df3e0a88a_generated_e51542c3.png';
const UNIVERSITY = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/4a3b36fa3_generated_bd22c5bb.png';
const HACKATHON_IMG = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/4a3b36fa3_generated_bd22c5bb.png';

const ALL_PROJECTS = [
  // FINANCE — RISK
  {
    id: 5, category: 'finance', subcategory: 'risk',
    tag: 'RISK MANAGEMENT', title: 'ALM PORTFOLIO CONSTRUCTION', year: '2025', img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/6bb3d8012_image.png',
    tools: ['Excel', 'Bloomberg', 'Python'], emoji: '📊',
    desc: 'Asset-Liability Management: LDI bond portfolio with duration/convexity matching, Nelson-Siegel yield curve calibration, and multi-scenario stress testing (Base / +200bps / -100bps). 12-sheet Solver-optimized workbook.',
    size: 'normal',
  },
  {
    id: 15, category: 'finance', subcategory: 'risk',
    tag: 'RISK MANAGEMENT', title: 'PREMIUM & RISK ANALYSIS', year: '2024', img: null,
    tools: ['Excel', 'Python'], Icon: BarChart2,
    desc: 'Premium calculation and risk assessment framework with sensitivity analysis and scenario modeling.',
    size: 'normal',
  },
  {
    id: 16, category: 'finance', subcategory: 'product',
    tag: 'PRODUCT MANAGEMENT', title: 'INSURANCE PRODUCT MODEL', year: '2024', img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/928a76714_image.png',
    tools: ['Excel', 'Actuarial Tables'], emoji: '🛡️',
    desc: 'Comprehensive insurance product modeling with pricing, profitability, and feature design analysis.',
    size: 'normal',
  },
  {
    id: 162, category: 'finance', subcategory: 'product',
    tag: 'PRODUCT MANAGEMENT', title: 'INSURANCE PRODUCT DESIGN & PRICING', year: '2024',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781421183/0A76F3C3-AD3B-4048-8D90-C627E496A9E0_bbmojo.jpg',
    imgStyle: 'object-position: top',
    tools: ['Excel', 'Actuarial Tables', 'PowerPoint'],
    desc: 'Product concept paper: benefit design, target segment, actuarial pricing using mortality tables, and OIC regulatory compliance review for urban professionals 25–35.',
    size: 'normal',
  },
  {
    id: 17, category: 'finance', subcategory: 'analytics',
    tag: 'FINANCIAL ANALYSIS', title: 'HKEX TRADING ANALYSIS', year: '2024', img: null,
    tools: ['Excel', 'Python', 'Data Analysis'], emoji: '📈',
    desc: 'Hong Kong Exchange securities analysis, trade performance tracking, and market pattern identification.',
    size: 'normal',
  },
  {
    id: 18, category: 'finance', subcategory: 'analytics',
    tag: 'INVESTMENT ANALYSIS', title: 'INVESTMENT PORTFOLIO TRACKER', year: '2024', img: null,
    tools: ['Excel', 'SQL', 'Analytics'], emoji: '💼',
    desc: 'Investment portfolio monitoring and performance analysis with asset allocation optimization.',
    size: 'normal',
  },
  {
    id: 19, category: 'finance', subcategory: 'analytics',
    tag: 'FINANCIAL ANALYSIS', title: 'FINANCIAL KPI DASHBOARD', year: '2024', img: null,
    tools: ['Excel', 'Power BI', 'Tableau'], emoji: '📊',
    desc: 'Real-time financial KPI tracking and performance reporting dashboard for multi-unit operations.',
    size: 'normal',
  },
  {
    id: 20, category: 'finance', subcategory: 'risk',
    tag: 'RISK MANAGEMENT', title: 'MARGIN-OF-ERROR ANALYSIS', year: '2024', img: null,
    tools: ['Excel', 'Statistics', 'Python'], emoji: '📉',
    desc: 'Statistical margin analysis, confidence intervals, and error tolerance modeling for business decisions.',
    size: 'normal',
  },
  {
    id: 21, category: 'finance', subcategory: 'analytics',
    tag: 'SAMPLE SIZE CALCULATION', title: 'SAMPLE-SIZE DETERMINATION', year: '2024', img: null,
    tools: ['Excel', 'Statistics', 'R'], emoji: '🎯',
    desc: 'Statistical sample size calculator for research studies, surveys, and hypothesis testing.',
    size: 'normal',
  },
  {
    id: 6, category: 'finance', subcategory: 'risk',
    tag: 'LOSS MODELING', title: 'LOSS DISTRIBUTION MODEL', year: '2025', img: null,
    tools: ['R', 'Python'], emoji: '📉',
    desc: 'Truncated claim severity modeling: MLE estimation, KS + chi-square goodness-of-fit, likelihood ratio testing, and BIC-based model selection for insurance claims data.',
    size: 'normal',
  },
  // FINANCE — PRODUCT
  {
    id: 7, category: 'finance', subcategory: 'product',
    tag: 'PRODUCT MANAGEMENT', title: 'INSURANCE PRODUCT DESIGN', year: '2025', img: null,
    tools: ['Excel', 'Actuarial Tables', 'PowerPoint'], emoji: '🛡️',
    desc: 'End-to-end insurance product concept: benefit structure (critical illness + income replacement), actuarial pricing, OIC regulatory analysis, and target segment (urban professionals 25–35).',
    size: 'normal',
  },
  // FINANCE — ANALYTICS
  {
    id: 8, category: 'finance', subcategory: 'analytics',
    tag: 'PORTFOLIO OPTIMIZATION', title: 'RETIREMENT PORTFOLIO MPT', year: '2024', img: null,
    tools: ['Python', 'Excel Solver', 'Matplotlib'], emoji: '📈',
    desc: 'Modern Portfolio Theory: efficient frontier construction, DCA strategy backtesting, and risk-return optimization for long-term retirement planning.',
    size: 'normal',
  },
  {
    id: 9, category: 'finance', subcategory: 'analytics',
    tag: 'ML / BUSINESS INTELLIGENCE', title: 'EMPLOYEE ATTRITION MODEL', year: '2024', img: null,
    tools: ['Python', 'sklearn', 'Tableau'], emoji: '🤖',
    desc: 'HR analytics classification model on IBM dataset (1,470 records). Logistic regression vs. random forest — AUC comparison, feature importance, and Tableau dashboard with attrition heatmaps.',
    size: 'normal',
  },
  {
    id: 13, category: 'finance', subcategory: 'analytics',
    tag: 'BUSINESS ANALYSIS', title: 'SALES & REVENUE TREND ANALYSIS', year: '2024', img: null,
    tools: ['Excel', 'Power BI', 'Python'], emoji: '📊',
    desc: 'Business performance analysis across seasonal peaks for 7 venues. Identified top revenue drivers via correlation analysis, built repeatable Power BI reporting framework.',
    size: 'normal',
  },
  // OPERATIONS MANAGEMENT
  {
    id: 301, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'OLIVIA MASSAGE — SURAWONG', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/caf47aae3_S__10092559_0.jpg',
    tools: ['Operations', 'Staff Management', 'Revenue Tracking'],
    desc: 'Managed Olivia Massage Surawong — premium wellness branch combining traditional Thai massage with spa-quality standards, serving locals and international guests in the Surawong-Silom area.',
    size: 'normal',
  },
  {
    id: 302, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'OLIVIA MASSAGE — SILOM SOI 2/1', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/7213e0f95_S__10092563_0.jpg',
    tools: ['Operations', 'Customer Management', 'KPI'],
    desc: 'Managed Olivia Massage Silom Soi 2/1 — centrally located branch steps from Silom Road. Directed daily operations, therapist scheduling, and customer experience for high foot-traffic location.',
    size: 'normal',
  },
  {
    id: 303, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'WHITE RABBIT BAR — SILOM', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/794c922e0_S__10092565_0.jpg',
    tools: ['Nightlife Ops', 'Staff Management', 'Revenue'],
    desc: 'Managed White Rabbit Bar Silom — vibrant nightlife venue in Bangkok\'s central entertainment district. Oversaw operations, beverage offerings, and customer experience for diverse local and expat clientele.',
    size: 'normal',
  },
  {
    id: 304, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'OLIVIA MASSAGE — BTS SALADAENG', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/1518736d4_S__10092561_0.jpg',
    tools: ['Operations', 'Branch Management', 'Wellness'],
    desc: 'Managed Olivia Massage BTS Saladaeng — high-traffic branch near BTS Saladaeng and MRT Silom, serving office professionals, expats, and tourists with premium Thai wellness experiences.',
    size: 'normal',
  },
  {
    id: 305, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'OLIVIA MASSAGE — SILOM SOI 4', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/ad4c99afb_S__10092562_0.jpg',
    tools: ['Operations', 'Hospitality', 'Staff Management'],
    desc: 'Managed Olivia Massage Silom Soi 4 — vibrant high-demand branch in internationally renowned lifestyle street. Served diverse mix of locals, expats, and global travelers seeking wellness services.',
    size: 'normal',
  },
  {
    id: 306, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'WISDOM MASSAGE — BTS SALADAENG', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/0a0631fef_S__10092564_0.jpg',
    tools: ['Operations', 'Wellness', 'Branch Management'],
    desc: 'Managed Wisdom Massage BTS Saladaeng — premium massage brand positioned near BTS Sala Daeng, delivering serene, professional, and detail-oriented wellness experiences to daily commuters and office workers.',
    size: 'normal',
  },
  {
    id: 307, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'GASS BANGKOK — SILOM', year: '2024–2025',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/d11e88fc1_S__10092566_0.jpg',
    tools: ['Nightlife Ops', 'Entertainment', 'Venue Management'],
    desc: 'Managed Gass Bangkok Silom — high-energy pub with Western gas-station theme, featuring resident DJs, go-go performances, and live rappers. Directed operations for one of Bangkok\'s most dynamic nightlife venues.',
    size: 'normal',
  },
  // FINANCE — MANAGEMENT
  {
    id: 10, category: 'finance', subcategory: 'management',
    tag: 'WEB DESIGN + PRODUCT', title: 'BGFS WEB PLATFORM — CLIENT SIDE', year: '2025',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422113/messageImage_1781422053975_fuqnmd.jpg',
    imgStyle: 'object-position: top',
    tools: ['React', 'Base44', 'Tailwind CSS'],
    desc: 'Client-facing web app for Bangkok Great Future Service — TH/ZH/EN multi-language booking system with real-time seat availability, branch selection, and mobile-first responsive UI.',
    size: 'normal',
  },
  {
    id: 11, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS + BI DASHBOARD', title: 'BGFS WEB PLATFORM — ADMIN & OPS', year: '2025',
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781422112/messageImage_1781422029060_dsdnix.jpg',
    imgStyle: 'object-position: top',
    tools: ['React', 'Base44', 'SQL', 'Power BI', 'Google Sheets'],
    desc: 'Back-office management system — staff portal, branch management, KPI BI dashboard, and P&L tracking for 7 business units. THB 11.5M+ revenue tracked.',
    size: 'normal',
  },
  {
    id: 14, category: 'finance', subcategory: 'management',
    tag: 'OPERATIONS MANAGEMENT', title: 'MULTI-UNIT OPS & BI SYSTEM', year: '2025', img: null,
    tools: ['Google Sheets', 'SQL', 'Power BI', 'Tableau'], emoji: '🏢',
    desc: 'Designed end-to-end operational tracking across 7 business units — real-time KPI dashboards, P&L tracking, payroll optimization, and HR pipeline management. THB 11.5M+ in revenue.',
    size: 'normal',
  },
  // HACKATHON ORGANIZER
  {
    id: 101, category: 'creative', subcategory: 'marketing',
    tag: 'HACKATHON ORGANIZER', title: 'USWC 2021 — UNIVERSITY STARTUP WORLD CUP', year: '2021',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/394f0bdda_S__10092552_0.jpg',
    tools: ['Event Design', 'Project Mgmt', 'CU Innovation Hub'],
    desc: 'Co-organized University Startup World Cup 2021 — international startup competition with 100 semi-finalists, prize pool up to $15,000 USD, in partnership with Venture Cup Denmark and CU Innovation Hub.',
    size: 'normal',
  },
  {
    id: 102, category: 'creative', subcategory: 'marketing',
    tag: 'HACKATHON ORGANIZER', title: 'ENTREPATH BUSINESS HIGH SCHOOL 2021', year: '2021',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/db5dfefcd_S__10092568.jpg',
    tools: ['Event Mgmt', 'Zoom', 'Business Education', 'Graphic Design', 'Social Media'],
    desc: 'Organized Entrepath Business High School 2021 — multi-session online entrepreneurship camp for high school students via Zoom, Oct 9, 10, 16, 17 & 22. Designed all event branding materials including poster, social media assets, and digital campaign. Collaborated with YEAH, YSEALI, and US Embassy. Free program targeting high school students interested in business and entrepreneurship.',
    size: 'normal',
  },
  {
    id: 103, category: 'creative', subcategory: 'marketing',
    tag: 'HACKATHON ORGANIZER', title: 'ZERO TO ONE THAILAND 2021', year: '2021',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/e0f792fa2_S__10092550_0.jpg',
    tools: ['Startup Ecosystem', 'YSEALI', 'SET'],
    desc: 'Co-organized Zero to One Thailand — intensive business plan development program partnered with YSEALI, SET, and US Embassy, helping participants build real actionable business models.',
    size: 'normal',
  },
  {
    id: 104, category: 'creative', subcategory: 'marketing',
    tag: 'HACKATHON ORGANIZER', title: 'SCI BOX LEAGUE 2022', year: '2022',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/548e61578_S__10092569.jpg',
    tools: ['NIA', 'True Digital Park', 'DEPA', 'CU Innovation Hub', 'Graphic Design', 'Branding'],
    desc: 'Organized SCI BOX LEAGUE 2022 — science-to-startup innovation competition under CU SCI Startup. Prize pool up to 45,000 THB. Teams of 3–5 members competed to commercialize deep-tech research into startups. Partnered with NIA, True Digital Park, AI & Robotics Ventures, and CU Innovation Hub. Designed full event branding: poster, ticket-style visual identity, and digital campaign materials.',
    size: 'normal',
  },
  {
    id: 105, category: 'creative', subcategory: 'marketing',
    tag: 'HACKATHON ORGANIZER', title: 'SCIHACK MINI HACKATHON', year: '2022',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/f19a42243_S__10092570.jpg',
    tools: ['CU SCI Startup', 'CU Innovation Hub', 'Event Design', 'Graphic Design', 'Social Media'],
    desc: '3-day SciHack Mini Hackathon by CU SCI Startup — theme: Urban Waste Utilization for Urban Use. Prize pool 30,000+ THB. 3-day format: Training Day → Hack Day → Pitching Day. Open to all university students, teams of 3–5. Designed full event visual identity including bold typographic poster, social media campaign, and all promotional materials under CU Innovation Hub.',
    size: 'normal',
  },
  // CREATIVE — MARKETING
  {
    id: 1, category: 'creative', subcategory: 'marketing',
    tag: 'EVENT MANAGEMENT', title: 'CU STARTUP HACKATHON', year: '2022–2024', img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/0789fac0b_IMG_7392.jpg',
    tools: ['Event Design', 'Project Mgmt', 'Analytics'],
    desc: 'Organized 3 consecutive CU Startup Thailand League hackathons — full event lifecycle, venue logistics, 100+ participants per event, and post-event analytics reports.',
    size: 'normal',
  },
  {
    id: 4, category: 'creative', subcategory: 'marketing',
    tag: 'MARKETING ANALYTICS', title: 'CU STARTUP LEAGUE CAMPAIGN', year: '2022–2024', img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/eb1ab4c5d_IMG_7419.jpg',
    tools: ['Canva', 'Figma', 'Adobe XD'],
    desc: 'Omni-channel marketing campaign for CU Innovation Hub — social + email + on-campus strategy, pitch deck design, event banners, digital assets, and engagement metric reporting.',
    size: 'normal',
  },
  // CREATIVE — BRANDING (extra)
  {
    id: 201, category: 'creative', subcategory: 'branding',
    tag: 'BRAND IDENTITY', title: 'ENTREPATH — BRAND SYSTEM', year: '2021',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/313f718fb_S__10092556_0.jpg',
    tools: ['Illustrator', 'Branding', 'Logo Design'],
    desc: 'Full brand identity system for Entrepath Business High School — primary logo, alternate marks, color system, and typography for use across print and digital platforms.',
    size: 'normal',
  },
  {
    id: 202, category: 'creative', subcategory: 'branding',
    tag: 'BRAND IDENTITY', title: 'SCI STARTUP — BRAND SYSTEM', year: '2022',
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/c501d6adc_S__10092556_0.jpg',
    tools: ['Illustrator', 'Branding', 'Logo Design'],
    desc: 'Primary logo design and brand identity for CU SCI Startup — distinctive mark system with multi-platform usage guidelines for startup ecosystem branding.',
    size: 'normal',
  },
  // CREATIVE — BRANDING
  {
    id: 2, category: 'creative', subcategory: 'branding',
    tag: 'BRAND IDENTITY', title: 'GASS.BKK', year: '2024', img: BRANDING_1,
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    desc: 'Full visual identity system for Bangkok street-culture brand — logo mark, brand guidelines, merchandise mockups, typography system, and social media template kit.',
    size: 'tall',
  },
  {
    id: 3, category: 'creative', subcategory: 'branding',
    tag: 'WEB DESIGN + VISUAL CAMPAIGN', title: 'WHITE RABBIT BAR', year: '2023',
    img: BAR_PROJECT,
    imgs: [BAR_PROJECT, BAR_PROJECT_2, 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/3b254e8b3_image.png'],
    tools: ['Canva', 'Illustrator', 'Lightroom', 'Web Design'],
    desc: 'Full brand campaign + website design for White Rabbit Bangkok (Silom Soi 2) — event pages, deals system, LGBTQ+ friendly nightlife identity, menu design, and social media toolkit.',
    size: 'normal',
  },
  // CREATIVE — GRAPHIC
  {
    id: 12, category: 'creative', subcategory: 'graphic',
    tag: 'ABSTRACT DESIGN', title: 'GEOMETRIC COMPOSITION I', year: '2023', 
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/ae41666a3_S__10002436_0.jpg',
    tools: ['Photoshop', 'Illustrator'],
    desc: 'Personal creative exploration — 3D geometric abstract composition with layered isometric forms, vibrant color blocking, and brutalist spatial arrangement.',
    size: 'normal',
  },
  {
    id: 22, category: 'creative', subcategory: 'graphic',
    tag: 'ABSTRACT DESIGN', title: 'GEOMETRIC COMPOSITION II', year: '2023', 
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/f1b196833_S__10002438_0.jpg',
    tools: ['Photoshop', 'Illustrator'],
    desc: 'Personal creative exploration — 3D geometric abstract with interlocking polygon shapes, warm color palette, and dynamic depth perception.',
    size: 'normal',
  },
];

// Subcategory → fallback icon
const SUBCATEGORY_ICON = {
  risk: Shield,
  analytics: BarChart2,
  product: Briefcase,
  management: Building2,
  marketing: Megaphone,
  branding: Layers,
  graphic: Palette,
};

// Filter structure
const MAIN_FILTERS = ['ALL', 'DATA', 'OPERATIONS', 'MANAGEMENT', 'CREATIVE'];
const MAIN_FILTER_META = {
  ALL:        { label: '◆ ALL', Icon: BarChart2 },
  DATA:       { label: 'DATA', Icon: BarChart2 },
  OPERATIONS: { label: 'OPERATIONS', Icon: Building2 },
  MANAGEMENT: { label: 'MANAGEMENT', Icon: Briefcase },
  CREATIVE:   { label: 'CREATIVE', Icon: Palette },
};

// map old categories → new top-level filters (array = appears in multiple filters)
const CATEGORY_MAP = {
  // finance subcategories
  risk:       'DATA',
  analytics:  'DATA',
  product:    'MANAGEMENT',
  management: ['OPERATIONS', 'MANAGEMENT'],
  // creative subcategories
  marketing:  'OPERATIONS',
  branding:   'CREATIVE',
  graphic:    'CREATIVE',
};

function ProjectCard({ project, onClick }) {
  const isFinance = project.category === 'finance';
  const mapped = CATEGORY_MAP[project.subcategory];
  const primaryLabel = Array.isArray(mapped) ? mapped[0] : (mapped || project.category?.toUpperCase());
  const FallbackIcon = SUBCATEGORY_ICON[project.subcategory] || BarChart2;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      whileHover={{ y: -6, boxShadow: '8px 8px 0px #FF5F1F' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={() => onClick(project)}
      className={`relative group cursor-pointer border-2 overflow-hidden transition-colors
        ${isFinance ? 'border-primary/40 hover:border-primary' : 'border-primary hover:border-foreground'}
        ${project.size === 'tall' ? 'row-span-2' : project.size === 'wide' ? 'md:col-span-2' : ''}
      `}
    >
      {project.img ? (
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover min-h-[240px] grayscale group-hover:grayscale-0 transition-all duration-500 protected"
          style={project.imgStyle ? { objectPosition: 'top' } : {}}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      ) : (
        <div className="min-h-[240px] flex flex-col items-center justify-center bg-card p-8 gap-3">
          <FallbackIcon size={48} className="text-primary/60" />
          <div className="flex flex-wrap gap-1.5 justify-center">
            {project.tools.map((t) => (
              <span key={t} className="font-mono text-[9px] tracking-widest border border-primary/30 text-primary px-2 py-0.5">{t}</span>
            ))}
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent flex flex-col justify-end p-5">
        <div className="font-mono text-[9px] tracking-widest text-primary">{project.tag} // {project.year}</div>
        <div className="font-inter font-black text-xl text-foreground mt-1 leading-tight">{project.title}</div>
        <div className="font-mono text-[10px] text-muted-foreground mt-1.5 line-clamp-2">{project.desc}</div>
        <div className="text-primary mt-3 font-mono text-xs">CLICK TO EXPAND ↗</div>
      </div>

      <div className={`absolute top-3 left-3 font-mono text-[8px] tracking-widest px-2 py-1 ${
        isFinance ? 'bg-primary text-background' : 'bg-foreground text-background'
      }`}>
        {primaryLabel}
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const mapped = CATEGORY_MAP[project.subcategory];
  const filterLabel = Array.isArray(mapped) ? mapped.join(' / ') : (mapped || project.category?.toUpperCase());
  const FallbackIcon = SUBCATEGORY_ICON[project.subcategory] || BarChart2;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/96 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 40 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl border-2 border-primary bg-card overflow-hidden max-h-[92vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-primary flex items-center justify-between px-6 py-3 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-widest text-background">{filterLabel}</span>
            <span className="text-background/40 font-mono text-xs">//</span>
            <span className="font-mono text-[9px] tracking-widest text-background">{project.tag}</span>
            <span className="text-background/40 font-mono text-xs">//</span>
            <span className="font-mono text-[9px] tracking-widest text-background/70">{project.year}</span>
          </div>
          <button onClick={onClose} className="text-background hover:opacity-60 transition-opacity"><X size={18} /></button>
        </div>

        <div className="p-8">
          {/* Images */}
          {project.imgs ? (
            <div className="grid grid-cols-3 gap-1.5 mb-8">
              {project.imgs.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} ${i+1}`}
                  className={`w-full object-cover border border-primary/20 protected ${i === 0 ? 'col-span-3 h-44' : 'h-24'}`}
                  style={{ filter: 'contrast(1.05) brightness(0.92)' }}
                  draggable={false} onContextMenu={(e) => e.preventDefault()} />
              ))}
            </div>
          ) : project.img ? (
            <img src={project.img} alt={project.title}
              className="w-full h-52 object-cover mb-8 border border-primary/20 protected"
              style={{ filter: 'contrast(1.05) brightness(0.92)' }}
              draggable={false} onContextMenu={(e) => e.preventDefault()} />
          ) : (
            <div className="w-full h-24 flex items-center justify-center mb-8 border border-primary/20 bg-background/50">
              <FallbackIcon size={40} className="text-primary/60" />
            </div>
          )}

          {/* Title + desc */}
          <div className="mb-6">
            <h2 className="font-inter font-black text-3xl md:text-4xl text-foreground tracking-tighter leading-tight mb-4">
              {project.title}
            </h2>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-px bg-primary/10 mb-8">
            <div className="bg-card p-4">
              <div className="font-mono text-[9px] tracking-widest text-primary mb-1">CATEGORY</div>
              <div className="font-inter font-bold text-sm text-foreground">{filterLabel}</div>
            </div>
            <div className="bg-card p-4">
              <div className="font-mono text-[9px] tracking-widest text-primary mb-1">YEAR</div>
              <div className="font-inter font-bold text-sm text-foreground">{project.year}</div>
            </div>
          </div>

          {/* Tools */}
          <div className="border border-primary/20 mb-6">
            <div className="bg-primary/5 px-4 py-2 border-b border-primary/20 font-mono text-[9px] tracking-widest text-primary">
              // TOOLS_USED
            </div>
            <div className="flex flex-wrap gap-2 p-4">
              {project.tools.map((t) => (
                <span key={t} className="font-mono text-[10px] tracking-wide border border-primary text-primary px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:viewtubsikhaew@gmail.com?subject=Project Inquiry&body=Hi Chulachak, I saw your project and would like to discuss..."
            className="block w-full bg-primary text-background font-inter font-black text-sm tracking-widest py-4 text-center hover:bg-foreground transition-colors"
          >
            DISCUSS THIS PROJECT →
          </a>
        </div>
        <div className="absolute -bottom-3 -right-3 text-primary/8 font-inter font-black text-9xl select-none pointer-events-none">✦</div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selected, setSelected] = useState(null);

  const filtered = ALL_PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    const mapped = CATEGORY_MAP[p.subcategory];
    return Array.isArray(mapped) ? mapped.includes(activeFilter) : mapped === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">04</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">WORK // ARCHIVES</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <BlockReveal delay={0.1}>
          <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter">
            ALL <span className="text-primary">PROJECTS</span>
          </h2>
        </BlockReveal>

        {/* Filter bar */}
        <div className="flex gap-0 border border-primary/40 overflow-x-auto scrollbar-none">
          {MAIN_FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileTap={{ scale: 0.95 }}
              className={`relative font-mono text-[10px] tracking-widest px-5 py-3 transition-all border-r border-primary/40 last:border-r-0 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeFilter === f
                  ? 'bg-primary text-background'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {React.createElement(MAIN_FILTER_META[f].Icon, { size: 11 })}
              {MAIN_FILTER_META[f].label}
              {activeFilter === f && (
                <motion.div
                  layoutId="filterUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-background"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Count badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
          // SHOWING {filtered.length} PROJECT{filtered.length !== 1 ? 'S' : ''}
          {activeFilter !== 'ALL' && ` — ${activeFilter}`}
        </span>
        <div className="flex-1 h-px bg-primary/10" />
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}