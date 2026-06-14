import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Cell,
} from 'recharts';
import BlockReveal from './BlockReveal';
import { BarChart2, Palette, Bot, Globe, Database, Megaphone } from 'lucide-react';

const TAB_ICONS = { FINANCE: BarChart2, CREATIVE: Palette, 'AI TOOLS': Bot, DATA: Database, MARKETING: Megaphone, WEB: Globe };

const SKILL_DATA = {
  FINANCE: {
    emoji: '📊',
    radar: [
      { subject: 'Risk Modeling', A: 90 },
      { subject: 'Statistics', A: 88 },
      { subject: 'Portfolio Opt.', A: 85 },
      { subject: 'Data Analysis', A: 93 },
      { subject: 'Actuarial', A: 82 },
      { subject: 'BI / Dashboards', A: 88 },
    ],
    bars: [
      { name: 'Excel', value: 98, snippet: '=XLOOKUP(risk_data...)' },
      { name: 'Tableau', value: 97, snippet: 'dashboard.refresh()' },
      { name: 'Python', value: 90, snippet: 'model.fit(X_train, y)' },
      { name: 'Bloomberg', value: 85, snippet: 'BDH("SPY US","PX_LAST")' },
      { name: 'SQL', value: 85, snippet: 'SELECT SUM(rev) FROM ops' },
      { name: 'Power BI', value: 82, snippet: 'CALCULATE(SUM([Rev]))' },
      { name: 'R Studio', value: 80, snippet: 'ggplot(aes(x=t, y=val))' },
    ],
    tags: [
      { label: 'ALM / LDI', level: 'ADVANCED' },
      { label: 'Loss Distribution', level: 'ADVANCED' },
      { label: 'MPT Portfolio Opt.', level: 'ADVANCED' },
      { label: 'Actuarial Science', level: 'INTERMEDIATE' },
      { label: 'Financial Modeling', level: 'ADVANCED' },
      { label: 'Risk Management', level: 'ADVANCED' },
      { label: 'Business Analysis', level: 'ADVANCED' },
      { label: 'P&L Management', level: 'ADVANCED' },
    ],
  },
  CREATIVE: {
    emoji: '🎨',
    radar: [
      { subject: 'Branding', A: 93 },
      { subject: 'Typography', A: 90 },
      { subject: 'Layout', A: 91 },
      { subject: 'Photography', A: 80 },
      { subject: 'Motion', A: 72 },
      { subject: 'Print / Digital', A: 86 },
    ],
    bars: [
      { name: 'Illustrator', value: 98, snippet: '// vector mastery' },
      { name: 'Photoshop', value: 97, snippet: '// photo manipulation' },
      { name: 'Canva', value: 99, snippet: '// rapid content creation' },
      { name: 'InDesign', value: 90, snippet: '// print-ready layout' },
      { name: 'After Effects', value: 78, snippet: '// motion graphics' },
      { name: 'Figma', value: 86, snippet: '// UI prototyping' },
      { name: 'Lightroom', value: 88, snippet: '// color grading' },
    ],
    tags: [
      { label: 'Brand Identity', level: 'ADVANCED' },
      { label: 'Visual Campaign', level: 'ADVANCED' },
      { label: 'Typography System', level: 'ADVANCED' },
      { label: 'Motion Graphics', level: 'INTERMEDIATE' },
      { label: 'Print Design', level: 'ADVANCED' },
      { label: 'Social Media Kit', level: 'ADVANCED' },
      { label: 'UI / UX', level: 'INTERMEDIATE' },
      { label: 'Art Direction', level: 'ADVANCED' },
    ],
  },
  'AI TOOLS': {
    emoji: '🤖',
    radar: [
      { subject: 'Prompting', A: 95 },
      { subject: 'Automation', A: 85 },
      { subject: 'Data Extract', A: 88 },
      { subject: 'Code Gen', A: 82 },
      { subject: 'Research', A: 92 },
      { subject: 'Multimodal', A: 88 },
    ],
    bars: [
      { name: 'Claude', value: 95, snippet: 'Think step by step...' },
      { name: 'ChatGPT', value: 93, snippet: 'GPT-4o: analyze this' },
      { name: 'Gemini', value: 88, snippet: 'gemini.generateContent()' },
      { name: 'Perplexity', value: 90, snippet: 'real-time research' },
      { name: 'NotebookLM', value: 87, snippet: 'source grounding...' },
      { name: 'OpenClaw', value: 84, snippet: 'openclaw.run(task)' },
      { name: 'GitHub Copilot', value: 85, snippet: '// AI autocomplete' },
    ],
    tags: [
      { label: 'Prompt Engineering', level: 'ADVANCED' },
      { label: 'AI-Assisted Research', level: 'ADVANCED' },
      { label: 'Document Summarization', level: 'ADVANCED' },
      { label: 'Code Generation', level: 'INTERMEDIATE' },
      { label: 'Data Extraction', level: 'INTERMEDIATE' },
      { label: 'Workflow Automation', level: 'INTERMEDIATE' },
      { label: 'Multimodal Analysis', level: 'INTERMEDIATE' },
      { label: 'RAG / NotebookLM', level: 'INTERMEDIATE' },
    ],
  },
  DATA: {
    emoji: '🗄️',
    radar: [
      { subject: 'Visualization', A: 90 },
      { subject: 'Reporting', A: 85 },
      { subject: 'Cloud Data', A: 75 },
      { subject: 'ETL Pipeline', A: 65 },
      { subject: 'Statistics', A: 70 },
      { subject: 'Data Modeling', A: 72 },
    ],
    bars: [
      { name: 'Looker Studio', value: 82, snippet: 'Looker: connect BigQuery' },
      { name: 'Google BigQuery', value: 75, snippet: 'SELECT * FROM dataset' },
      { name: 'MS SSRS', value: 70, snippet: 'report.rdl → deploy' },
      { name: 'Apache Spark', value: 65, snippet: 'spark.read.parquet(...)' },
      { name: 'SPSS', value: 58, snippet: 'FREQUENCIES VARIABLES=x' },
      { name: 'dbt', value: 55, snippet: 'dbt run --select model' },
      { name: 'SAS', value: 52, snippet: 'PROC MEANS DATA=ds;' },
    ],
    tags: [
      { label: 'Data Visualization', level: 'ADVANCED' },
      { label: 'Dashboard Design', level: 'ADVANCED' },
      { label: 'Business Reporting', level: 'ADVANCED' },
      { label: 'Cloud Data Warehouse', level: 'INTERMEDIATE' },
      { label: 'ETL / Data Pipeline', level: 'INTERMEDIATE' },
      { label: 'Data Modeling', level: 'INTERMEDIATE' },
      { label: 'Statistical Analysis', level: 'INTERMEDIATE' },
      { label: 'Predictive Analytics', level: 'INTERMEDIATE' },
    ],
  },
  MARKETING: {
    emoji: '📣',
    radar: [
      { subject: 'Social Media', A: 92 },
      { subject: 'Campaign Mgmt', A: 88 },
      { subject: 'Content Design', A: 90 },
      { subject: 'Analytics', A: 85 },
      { subject: 'Event Mktg', A: 93 },
      { subject: 'SEO / Digital', A: 75 },
    ],
    bars: [
      { name: 'Canva', value: 97, snippet: '// rapid content creation' },
      { name: 'Meta Ads', value: 85, snippet: 'campaign.boost({ budget })' },
      { name: 'Google Analytics', value: 82, snippet: 'ga4.report(event)' },
      { name: 'Mailchimp', value: 78, snippet: 'campaign.send(list)' },
      { name: 'Hootsuite', value: 80, snippet: 'schedule.post(channels)' },
      { name: 'Google Ads', value: 72, snippet: 'adGroup.setBid(cpc)' },
      { name: 'TikTok Ads', value: 70, snippet: 'spark.ad.promote()' },
    ],
    tags: [
      { label: 'Social Media Strategy', level: 'ADVANCED' },
      { label: 'Campaign Management', level: 'ADVANCED' },
      { label: 'Content Creation', level: 'ADVANCED' },
      { label: 'Event Marketing', level: 'ADVANCED' },
      { label: 'Marketing Analytics', level: 'INTERMEDIATE' },
      { label: 'Paid Advertising', level: 'INTERMEDIATE' },
      { label: 'SEO / SEM', level: 'INTERMEDIATE' },
      { label: 'Email Marketing', level: 'INTERMEDIATE' },
    ],
  },
  WEB: {
    emoji: '🌐',
    radar: [
      { subject: 'React / JSX', A: 80 },
      { subject: 'CSS / Tailwind', A: 85 },
      { subject: 'UI Design', A: 88 },
      { subject: 'Vite / Build', A: 75 },
      { subject: 'API / Backend', A: 72 },
      { subject: 'Deployment', A: 78 },
    ],
    bars: [
      { name: 'Next.js', value: 72, snippet: 'app router + SSR' },
      { name: 'HTML / CSS', value: 88, snippet: '<motion.div />...' },
      { name: 'React', value: 65, snippet: 'useState(() => ...)' },
      { name: 'Tailwind CSS', value: 68, snippet: 'className="flex gap-4"' },
      { name: 'Figma → Code', value: 60, snippet: 'design → implement' },
      { name: 'Framer Motion', value: 62, snippet: 'animate={{ y: 0 }}' },
    ],
    tags: [
      { label: 'React Components', level: 'INTERMEDIATE' },
      { label: 'Tailwind CSS', level: 'INTERMEDIATE' },
      { label: 'Responsive Design', level: 'INTERMEDIATE' },
      { label: 'Framer Motion', level: 'INTERMEDIATE' },
      { label: 'Low-Code / No-Code', level: 'INTERMEDIATE' },
      { label: 'Next.js', level: 'INTERMEDIATE' },
      { label: 'UI/UX Implementation', level: 'INTERMEDIATE' },
      { label: 'API Integration', level: 'INTERMEDIATE' },
    ],
  },
};

const TABS = ['FINANCE', 'CREATIVE', 'AI TOOLS', 'DATA', 'MARKETING', 'WEB'];

const LEVEL_COLOR = {
  ADVANCED: 'bg-primary text-background',
  INTERMEDIATE: 'border border-primary/50 text-primary',
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('FINANCE');
  const [hoveredBar, setHoveredBar] = useState(null);

  const data = SKILL_DATA[activeTab];

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">03</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">SKILL DASHBOARD</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <BlockReveal delay={0.1}>
          <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter">
            SKILL <span className="text-primary">TERMINAL</span>
          </h2>
        </BlockReveal>

        {/* Tab switcher */}
        <div className="flex overflow-x-auto border border-primary/40 scrollbar-none">
          {TABS.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => { setActiveTab(tab); setHoveredBar(null); }}
              whileHover={{ backgroundColor: activeTab === tab ? undefined : 'rgba(255,95,31,0.12)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={`relative font-mono text-[10px] tracking-widest px-5 py-3 transition-all duration-200 border-r border-primary/40 last:border-r-0 font-bold border-t-2 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === tab ? 'bg-primary text-primary border-t-primary shadow-[0_0_12px_rgba(255,95,31,0.6)]' : 'text-muted-foreground hover:text-primary hover:bg-primary/8 border-t-transparent'
              }`}
            >
              {React.createElement(TAB_ICONS[tab], { size: 12 })} {tab}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Bar chart */}
            <motion.div
              whileHover={{ boxShadow: '6px 6px 0 #FF5F1F', borderColor: 'rgba(255,95,31,0.6)' }}
              transition={{ duration: 0.2 }}
              className="border border-primary/20 p-6 relative overflow-hidden"
            >
              <div className="font-mono text-[10px] tracking-widest text-primary mb-1">// PROFICIENCY_INDEX</div>
              <div className="font-mono text-[9px] text-muted-foreground mb-4">hover bar → inspect snippet</div>
              <ResponsiveContainer width="100%" height={data.bars.length * 38 + 20}>
                <BarChart data={data.bars} layout="vertical" barCategoryGap={6}>
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#8A8A8A', fontSize: 9, fontFamily: 'JetBrains Mono' }} axisLine={{ stroke: '#FF5F1F', strokeWidth: 0.5 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#FFFFFF', fontSize: 10, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} width={95} />
                  <Bar dataKey="value" radius={0} animationDuration={800} animationBegin={50}>
                    {data.bars.map((_, index) => (
                      <Cell
                        key={index}
                        fill={hoveredBar === index ? '#FFFFFF' : '#FF5F1F'}
                        onMouseEnter={() => setHoveredBar(index)}
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
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-5 right-5 font-mono text-[10px] text-primary border border-primary/40 bg-background px-3 py-2 max-w-[180px]"
                  >
                    <span className="text-muted-foreground">$ </span>
                    <span className="break-all">{data.bars[hoveredBar]?.snippet}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Radar */}
            <motion.div
              whileHover={{ boxShadow: '6px 6px 0 #FF5F1F', borderColor: 'rgba(255,95,31,0.6)' }}
              transition={{ duration: 0.2 }}
              className="border border-primary/20 p-6"
            >
              <div className="font-mono text-[10px] tracking-widest text-primary mb-1">// COMPETENCY_RADAR</div>
              <div className="font-mono text-[9px] text-muted-foreground mb-4">
                {activeTab === 'FINANCE' && 'quantitative & analytical depth'}
                {activeTab === 'CREATIVE' && 'visual & design breadth'}
                {activeTab === 'AI TOOLS' && 'AI workflow & prompt mastery'}
                {activeTab === 'DATA' && 'BI tools & data engineering'}
                {activeTab === 'MARKETING' && 'campaigns, content & paid media'}
                {activeTab === 'WEB' && 'frontend & web development'}
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart data={data.radar}>
                  <PolarGrid stroke="#FF5F1F" strokeWidth={0.4} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#8A8A8A', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
                  <Radar name="Level" dataKey="A" stroke="#FF5F1F" fill="#FF5F1F" fillOpacity={0.18} strokeWidth={2} animationDuration={800} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Skill tags grid */}
          <div className="border border-primary/20">
            <div className="bg-primary/5 px-4 py-2 border-b border-primary/20 font-mono text-[9px] tracking-widest text-primary">
              // SKILL_SET — {activeTab}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
              {data.tags.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(255,95,31,0.1)', x: 3, boxShadow: 'inset 3px 0 0 #FF5F1F' }}
                  transition={{ duration: 0.15 }}
                  className="border border-primary/10 p-4 flex flex-col gap-1.5 cursor-default"
                >
                  <span className="font-inter font-bold text-sm text-foreground leading-tight">{tag.label}</span>
                  <span className={`font-mono text-[8px] tracking-widest px-2 py-0.5 self-start ${LEVEL_COLOR[tag.level]}`}>
                    {tag.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proficiency bar — quick stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-4 border border-primary/20 overflow-hidden">
            {data.bars.slice(0, 4).map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ backgroundColor: 'rgba(255,95,31,0.15)', y: -2, boxShadow: '0 4px 0 #FF5F1F' }}
                transition={{ duration: 0.15 }}
                className="border-r border-primary/20 last:border-r-0 p-5 text-center cursor-default"
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="font-inter font-black text-2xl text-primary">{s.value}%</div>
                <div className="font-mono text-[9px] tracking-widest text-muted-foreground mt-1">{s.name.toUpperCase()}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}