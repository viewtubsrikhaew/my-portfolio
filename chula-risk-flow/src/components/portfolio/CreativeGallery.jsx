import React from 'react';
import { motion } from 'framer-motion';
import BlockReveal from './BlockReveal';

const BRANDING_1 = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/146f295e8_generated_5770e0e0.png';
const BAR_PROJECT = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/433ef2ca6_generated_98163284.png';
const BRANDING_2 = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/df3e0a88a_generated_e51542c3.png';
const UNIVERSITY = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/4a3b36fa3_generated_bd22c5bb.png';

const projects = [
  { img: BRANDING_1, title: 'GASS.BKK', desc: 'BRAND IDENTITY', size: 'tall' },
  { img: BAR_PROJECT, title: 'WHITE RABBIT BAR', desc: 'VISUAL DESIGN', size: 'normal' },
  { img: BRANDING_2, title: 'STREET SERIES', desc: 'GRAPHIC DESIGN', size: 'normal' },
  { img: UNIVERSITY, title: 'CU STARTUP LEAGUE', desc: 'MARKETING COLLATERAL', size: 'wide' },
];

function GalleryCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: '15px 15px 0px #FF5F1F',
        transition: { duration: 0.25 },
      }}
      className={`relative group cursor-pointer border-2 border-primary overflow-hidden protected ${
        project.size === 'tall' ? 'row-span-2' : project.size === 'wide' ? 'md:col-span-2' : ''
      }`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover min-h-[240px] grayscale group-hover:grayscale-0 transition-all duration-500 no-save"
        draggable={false}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="font-mono text-[10px] tracking-widest text-primary">{project.desc}</div>
        <div className="font-inter font-black text-2xl text-foreground mt-1">{project.title}</div>
        <div className="text-primary mt-2">↗</div>
      </div>
    </motion.div>
  );
}

export default function CreativeGallery() {
  return (
    <section id="creative" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">04</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">CREATIVE ARCHIVES</span>
      </div>

      <BlockReveal delay={0.1}>
        <h2 className="font-inter font-black text-4xl md:text-5xl text-foreground tracking-tighter mb-16">
          DESIGN <span className="text-primary">WORK</span>
        </h2>
      </BlockReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <GalleryCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}