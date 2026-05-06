import React from 'react';
import { motion } from 'framer-motion';
import BlockReveal from './BlockReveal';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">07</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">CONTACT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <BlockReveal delay={0.1}>
            <h2 className="font-inter font-black text-4xl md:text-6xl text-foreground tracking-tighter leading-none">
              LET'S<br />
              <span className="text-primary">CONNECT</span>
            </h2>
          </BlockReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-inter text-base text-muted-foreground mt-6 max-w-md leading-relaxed"
          >
            Seeking opportunities in actuarial science, risk management, or insurance analytics. 
            Open to collaborate on data-driven and creative projects.
          </motion.p>
        </div>

        <div className="space-y-0">
          {[
            { label: 'EMAIL', value: 'viewtubsikhaew@gmail.com', href: 'mailto:viewtubsikhaew@gmail.com' },
            { label: 'PHONE', value: '094-362-8554', href: 'tel:094-362-8554' },
            { label: 'LOCATION', value: 'Bangkok, Thailand', href: null },
            { label: 'LINKEDIN', value: 'chulachak-tubsikhaew', href: 'https://linkedin.com/in/chulachak-tubsikhaew' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-primary/20 py-6 flex justify-between items-center"
            >
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-inter font-bold text-sm text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {item.value} <span className="text-primary">↗</span>
                </a>
              ) : (
                <span className="font-inter font-bold text-sm text-foreground">{item.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
          © 2025 CHULACHAK TUBSIKHAEW. ALL RIGHTS RESERVED.
        </div>
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
          DESIGNED WITH <span className="text-primary">✦</span> BRUTALIST PRECISION
        </div>
      </div>
    </section>
  );
}