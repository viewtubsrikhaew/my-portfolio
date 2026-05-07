import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Asterisk } from 'lucide-react';

const PORTRAIT_URL = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/9e6d02293_Gemini_Generated_Image_6z01rp6z01rp6z01.png';

const BANNER_SLIDES = [
  {
    type: 'portrait',
    img: PORTRAIT_URL,
    label: 'CHULACHAK T. // BKK',
  },
  {
    type: 'stat',
    bigText: 'THB 11.5M+',
    subText: 'REVENUE GENERATED',
    detail: '7 BUSINESS UNITS · 200+ STAFF',
    accent: true,
  },
  {
    type: 'skill',
    bigText: 'PRODUCT',
    subText: 'MANAGER',
    detail: 'BGFS WEB PLATFORM · FULL-STACK · AI TOOLS',
    accent: false,
  },
  {
    type: 'stat',
    bigText: 'GPA 4.00',
    subText: 'M.SC. INSURANCE',
    detail: 'CHULALONGKORN UNIVERSITY · 2025',
    accent: true,
  },
  {
    type: 'skill',
    bigText: 'RISK &',
    subText: 'ANALYTICS',
    detail: 'BLOOMBERG · PYTHON · POWER BI · SQL',
    accent: false,
  },
  {
    type: 'skill',
    bigText: 'BRAND',
    subText: 'DESIGNER',
    detail: 'WHITE RABBIT · GASS.BKK · SCISTARTUP · ZERO TO ONE · ENTREPATH',
    accent: false,
  },
];

const ROLES = [
  'RISK ANALYST',
  'BRAND DESIGNER',
  'PRODUCT MANAGER',
  'DATA ANALYST',
  'BUSINESS ANALYST',
  'OPERATIONS HEAD',
  'AI POWER USER',
  'BI DEVELOPER',
];

const STATS = [
  { val: 'THB 11.5M+', label: 'REVENUE GEN.' },
  { val: '4.00', label: 'GPA M.SC.' },
  { val: '200+', label: 'TEAM MANAGED' },
  { val: '5×', label: 'CERTS' },
];

function BannerSlide({ slide, idx, total }) {
  if (slide.type === 'portrait') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <img
          src={slide.img}
          alt="Chulachak Tubsikhaew"
          className="w-full h-full object-cover protected"
          style={{ filter: 'contrast(1.1) saturate(0.3) sepia(0.2)' }}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(255,95,31,0.45) 0%, rgba(255,95,31,0.08) 30%, transparent 60%)', mixBlendMode: 'screen' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,95,31,0.03) 3px,rgba(255,95,31,0.03) 4px)' }} />
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <div className="bg-primary/90 px-4 py-1.5">
            <span className="font-mono text-[9px] tracking-widest text-background">{slide.label}</span>
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 flex flex-col items-center justify-center p-8 ${slide.accent ? 'bg-primary' : 'bg-card'}`}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.06) 3px,rgba(0,0,0,0.06) 4px)' }} />
      <div className={`absolute top-4 left-4 font-mono text-[8px] tracking-widest ${slide.accent ? 'text-background/40' : 'text-primary/40'}`}>
        {String(idx + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
      </div>
      <div className={`font-inter font-black leading-none tracking-tighter text-center z-10 ${slide.accent ? 'text-background' : 'text-primary'}`}
        style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
        {slide.bigText}
      </div>
      <div className={`font-inter font-black leading-none tracking-tighter text-center z-10 mt-1 ${slide.accent ? 'text-background/80' : 'text-foreground'}`}
        style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
        {slide.subText}
      </div>
      <div className={`font-mono text-[9px] tracking-[0.2em] text-center z-10 mt-6 leading-relaxed ${slide.accent ? 'text-background/60' : 'text-muted-foreground'}`}>
        {slide.detail}
      </div>
      <div className={`absolute bottom-8 right-4 select-none z-10 ${slide.accent ? 'text-background/20' : 'text-primary/15'}`}><Asterisk size={36} /></div>
    </motion.div>
  );
}

export default function HeroSection() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const textX = useTransform(mouseX, [0, 1], [-18, 18]);
  const textY = useTransform(mouseY, [0, 1], [-10, 10]);
  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const [roleIdx, setRoleIdx] = useState(0);
  const [statIdx, setStatIdx] = useState(0);
  const [bannerIdx, setBannerIdx] = useState(0);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX / (window.innerWidth || 1));
      mouseY.set(e.clientY / (window.innerHeight || 1));
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStatIdx((i) => (i + 1) % STATS.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBannerIdx((i) => (i + 1) % BANNER_SLIDES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-primary/10" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary/10" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary/5" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-primary/5" />
        {/* Orange glow blobs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
      </div>

      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 lg:pt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mini skill tags — ABOVE name */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-wrap gap-2 mb-5"
           >
             {['Excel', 'R', 'Python', 'SQL', 'Bloomberg', 'Power BI', 'Claude AI', 'ChatGPT'].map((tag, i) => (
               <motion.span
                 key={tag}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 + i * 0.05 }}
                 whileHover={{ backgroundColor: 'rgba(255,95,31,0.2)', color: '#FF5F1F', scale: 1.05 }}
                 className="font-mono text-[9px] tracking-widest border border-primary/25 text-muted-foreground px-3 py-1.5 cursor-default transition-colors"
               >
                 {tag}
               </motion.span>
             ))}
           </motion.div>



          {/* Big name */}
          <div className="space-y-0 leading-none mb-6">
            <motion.div style={{ x: textX, y: textY }}>
              <div
                className="font-inter font-black text-foreground leading-none tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 9vw, 8.5rem)' }}
              >
                CHULA
              </div>
              <div
                className="font-inter font-black leading-none tracking-tighter text-primary"
                style={{ fontSize: 'clamp(3rem, 9vw, 8.5rem)' }}
              >
                CHAK<span style={{ color: 'white' }}>.</span>
              </div>
            </motion.div>
          </div>



          <p className="font-mono text-xs text-muted-foreground max-w-sm leading-relaxed mb-10">
            M.Sc. Insurance & Risk Management, Chulalongkorn University. Business analyst, product manager, data enthusiast.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <motion.button
              whileHover={{ x: 4, boxShadow: '6px 6px 0 #FFFFFF' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-3.5 bg-primary text-background font-inter font-black text-xs tracking-wider border-2 border-primary hover:bg-background hover:text-primary transition-colors whitespace-nowrap"
            >
              GET IN TOUCH →
            </motion.button>
            <motion.button
              whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-3.5 border-2 border-primary/50 text-foreground font-inter font-black text-xs tracking-wider hover:border-primary transition-colors whitespace-nowrap"
            >
              VIEW WORK ↓
            </motion.button>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1PbKCEH4qyxhyhs-chvStlTBhECdRB5lU"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4, boxShadow: '6px 6px 0 #FF5F1F' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-5 py-3.5 border-2 border-dashed border-primary/60 text-primary font-inter font-black text-xs tracking-wider hover:border-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
            >
              ↓ DOWNLOAD RESUME
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — rotating banner */}
      <div className="flex-1 relative flex items-center justify-center mt-12 lg:mt-0 pb-20 lg:pb-0">
        {/* Banner + stat card overlay wrapper */}
        <div className="relative">
          {/* Role tag — above banner, right aligned */}
          <div className="flex items-center justify-end gap-2 mb-3 h-7 overflow-hidden">
            <span className="text-primary font-mono text-sm font-bold">[</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="font-mono text-xs tracking-[0.25em] text-primary"
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <span className="text-primary font-mono text-sm font-bold">]</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="font-mono text-primary text-sm"
            >▋</motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX, rotateY }}
            className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem] overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-primary z-20 pointer-events-none" />
            <div className="absolute inset-0 translate-x-5 translate-y-5 border-2 border-primary/20 pointer-events-none" />

            <AnimatePresence mode="wait">
              <BannerSlide key={bannerIdx} slide={BANNER_SLIDES[bannerIdx]} idx={bannerIdx} total={BANNER_SLIDES.length} />
            </AnimatePresence>

            <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-center gap-1.5 pointer-events-none">
              {BANNER_SLIDES.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === bannerIdx ? 'bg-primary w-4' : 'bg-primary/30 w-1'}`} />
              ))}
            </div>
          </motion.div>

          {/* Cycling stat card — overlaid bottom-right of banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            className="absolute -bottom-5 -right-5 inline-flex items-center gap-3 border-2 border-primary px-4 py-3 bg-background overflow-hidden z-30"
          >
            <motion.div
              animate={{ x: [-80, 160] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-12 bg-gradient-to-r from-transparent via-primary/15 to-transparent pointer-events-none"
              style={{ transform: 'skewX(-20deg)' }}
            />
            <ArrowUpRight size={20} className="text-primary shrink-0" />
            <div className="min-w-[110px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={statIdx}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-inter font-black text-xl text-primary tracking-tight">{STATS[statIdx].val}</div>
                  <div className="font-mono text-[8px] tracking-widest text-muted-foreground">{STATS[statIdx].label}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-28 lg:bottom-12 left-4 lg:left-8 text-primary/20 select-none"
        >
          <Asterisk size={48} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/30 z-0"
        />
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-primary/20 bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-3">
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            &nbsp;&nbsp;INSURANCE & RISK MANAGEMENT&nbsp;&nbsp;✦&nbsp;&nbsp;FINANCIAL ANALYSIS&nbsp;&nbsp;✦&nbsp;&nbsp;PRODUCT MANAGEMENT&nbsp;&nbsp;✦&nbsp;&nbsp;BUSINESS INTELLIGENCE&nbsp;&nbsp;✦&nbsp;&nbsp;MARKETING ANALYTICS&nbsp;&nbsp;✦&nbsp;&nbsp;OPERATIONS MANAGEMENT&nbsp;&nbsp;✦&nbsp;&nbsp;BLOOMBERG TERMINAL&nbsp;&nbsp;✦&nbsp;&nbsp;ALM MODELING&nbsp;&nbsp;✦&nbsp;&nbsp;BUSINESS ANALYSIS&nbsp;&nbsp;✦&nbsp;&nbsp;DATA-DRIVEN STRATEGY&nbsp;&nbsp;✦&nbsp;&nbsp;GRAPHIC DESIGN&nbsp;&nbsp;✦&nbsp;&nbsp;BRAND IDENTITY&nbsp;&nbsp;✦&nbsp;&nbsp;PYTHON / R / SQL&nbsp;&nbsp;✦&nbsp;&nbsp;PORTFOLIO OPTIMIZATION&nbsp;&nbsp;✦&nbsp;&nbsp;KPI DASHBOARDS&nbsp;&nbsp;✦&nbsp;&nbsp;CHULALONGKORN UNIV&nbsp;&nbsp;✦&nbsp;&nbsp;AI TOOLS&nbsp;&nbsp;✦&nbsp;&nbsp;WEB DEVELOPMENT&nbsp;&nbsp;✦&nbsp;&nbsp;P&L MANAGEMENT&nbsp;&nbsp;✦&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </section>
  );
}
