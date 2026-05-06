import React from 'react';

const tools = [
  'ADOBE CREATIVE SUITE',
  'CANVA',
  'LATEX',
  'TABLEAU',
  'POWER BI',
  'BLOOMBERG TERMINAL',
  'PYTHON',
  'R STUDIO',
  'SQL',
  'EXCEL MODELING',
];

export default function SoftwareMarquee() {
  return (
    <div className="border-y border-primary/20 overflow-hidden bg-primary py-4">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...tools, ...tools].map((tool, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-inter font-black text-sm md:text-base tracking-wider text-background mx-6">
              {tool}
            </span>
            <span className="text-background/60 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}