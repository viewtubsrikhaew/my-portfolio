import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlockReveal from './BlockReveal';

const CERT_IMG_2 = 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/0065a861d_image.png';

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    subtitle: 'Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    badge: '🔵',
    professional: true,
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/8cbbfc995_IMG_7136.jpg',
    driveFolder: 'https://drive.google.com/drive/folders/1AyLS6kG8sng5TxcJDizRBCVPxR38P468',
    subImgs: [
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426199/S__11141140_0_whwqg6.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426198/S__11141142_0_lumq0s.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426198/S__11141138_0_xvzomh.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426197/S__11141144_0_rjtvrv.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426197/S__11141143_0_foswfq.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426196/S__11141141_0_hvjfgt.jpg',
    ],
  },
  {
    title: 'Google Data Analytics',
    subtitle: 'Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    badge: '🔵',
    professional: true,
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/9af1ccdd3_IMG_7149.jpg',
    driveFolder: 'https://drive.google.com/drive/folders/1AyLS6kG8sng5TxcJDizRBCVPxR38P468',
    subImgs: [
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426018/S__11141134_0_lohdwn.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426018/S__11141133_0_tj6ccm.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426018/S__11141130_0_gfxsnb.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426017/S__11141131_0_eda9ek.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426017/S__11141132_0_jcyf5m.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426017/S__11141135_0_lyhx0q.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426017/S__11141137_0_zfxnb6.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426017/S__11141136_0_zgcqcy.jpg',
    ],
  },
  {
    title: 'Google Business Intelligence',
    subtitle: 'Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    badge: '🔵',
    professional: true,
    img: 'https://res.cloudinary.com/dduc3pox4/image/upload/v1781420491/S__11141124_j9ge3l.jpg',
    driveFolder: 'https://drive.google.com/drive/folders/1AyLS6kG8sng5TxcJDizRBCVPxR38P468',
    subImgs: [
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426302/S__11141149_0_ia88wu.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426302/S__11141145_0_z1naid.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426302/S__11141148_0_hbiptw.jpg',
      'https://res.cloudinary.com/dduc3pox4/image/upload/v1781426303/S__11141147_0_nkxmrf.jpg',
    ],
  },
  {
    title: 'Bloomberg Market Concepts',
    subtitle: 'BMC Certification',
    issuer: 'Bloomberg LP',
    year: '2024',
    badge: '🟠',
    professional: false,
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/5b997734b_IMG_6200.jpg',
    driveFolder: 'https://drive.google.com/drive/folders/1AyLS6kG8sng5TxcJDizRBCVPxR38P468',
  },
  {
    title: 'Thailand Mathematics Olympiad (TMO)',
    subtitle: 'National Academic Olympiad',
    issuer: 'IPST Thailand',
    year: '2019',
    badge: '🥇',
    professional: false,
    img: 'https://media.base44.com/images/public/69f811de984f384ae6db76b7/f5ca9e889_S__10002441.jpg',
    driveFolder: null,
  },
];

const education = [
  { degree: 'M.Sc. Insurance and Risk Management', school: 'Chulalongkorn University', gpa: '4.00', period: 'AUG 2025 — PRESENT' },
  { degree: 'B.Ed. Secondary Education (Mathematics)', school: 'Chulalongkorn University', gpa: '3.72', period: 'SEP 2020 — MAY 2025' },
  { degree: 'Intensive Science, Math & English', school: 'Boonwattana High School', gpa: '3.99', period: 'MAY 2015 — MAR 2020' },
];

function CertCard({ cert, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: '8px 8px 0 #FF5F1F', scale: 1.02 }}
      onClick={() => setFlipped(!flipped)}
      className="relative border border-primary/30 hover:border-primary cursor-pointer overflow-hidden transition-colors"
    >
      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div key="front" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-5">
            {/* Main cert image */}
            {cert.img && (
              <div className="mb-3 overflow-hidden border border-primary/20" style={{ filter: 'grayscale(0.3) contrast(1.1)' }}>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-24 object-cover object-top protected"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            )}

            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="font-mono text-[9px] tracking-widest text-primary">{cert.issuer}</div>
              {cert.professional && (
                <span className="font-mono text-[8px] tracking-widest bg-primary text-background px-2 py-0.5 shrink-0">PROFESSIONAL</span>
              )}
            </div>
            <div className="font-inter font-bold text-sm text-foreground leading-tight">{cert.title}</div>
            <div className="font-mono text-[9px] text-muted-foreground mt-1">{cert.subtitle}</div>

            {/* Sub-cert image grid */}
            {cert.subImgs && cert.subImgs.length > 0 && (
              <div className="mt-3 border-t border-primary/15 pt-3">
                <div className="font-mono text-[8px] tracking-widest text-primary/60 mb-2">
                  // {cert.subImgs.length} COURSES COMPLETED
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {cert.subImgs.map((src, i) => (
                    <div key={i} className="overflow-hidden border border-primary/10" style={{ filter: 'grayscale(0.4) contrast(1.05)' }}>
                      <img
                        src={src}
                        alt={`${cert.title} course ${i + 1}`}
                        className="w-full h-10 object-cover object-top protected"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground">{cert.year}</span>
              {cert.driveFolder && (
                <a
                  href={cert.driveFolder}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[9px] tracking-widest text-primary hover:underline"
                >
                  VIEW ↗
                </a>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div key="back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="p-5 bg-primary/10 min-h-[120px] flex flex-col justify-center items-center text-center">
            <div className="text-2xl mb-2">{cert.badge}</div>
            <div className="font-inter font-black text-sm text-primary">{cert.title}</div>
            <div className="font-mono text-[9px] text-muted-foreground mt-1">VERIFIED ✦</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CredentialsSection() {
  return (
    <section id="credentials" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-primary/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs tracking-[0.3em] text-primary">06</span>
        <div className="h-px flex-1 bg-primary/20" />
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">CREDENTIALS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <BlockReveal delay={0.1}>
            <h2 className="font-inter font-black text-3xl md:text-4xl text-foreground tracking-tighter mb-10">
              EDUCATION
            </h2>
          </BlockReveal>
          <div className="space-y-0">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-primary/20 py-6"
              >
                <div className="font-mono text-[10px] tracking-widest text-primary">{edu.period}</div>
                <div className="font-inter font-bold text-base text-foreground mt-2">{edu.degree}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{edu.school}</div>
                <div className="font-inter font-black text-primary text-lg mt-1">GPA {edu.gpa}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <BlockReveal delay={0.2}>
            <h2 className="font-inter font-black text-3xl md:text-4xl text-foreground tracking-tighter mb-10">
              CERTIFICATIONS
            </h2>
          </BlockReveal>
          <div className="font-mono text-[9px] tracking-widest text-muted-foreground mb-4">
            // CLICK CARD TO FLIP — {certifications.filter(c => c.professional).length}× PROFESSIONAL CERT
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} />
            ))}
          </div>
          <div className="mt-4 border border-primary/20 px-4 py-3 flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-widest text-muted-foreground">VIEW ALL CERTIFICATES</span>
            <a
              href="https://drive.google.com/drive/folders/1AyLS6kG8sng5TxcJDizRBCVPxR38P468"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-widest text-primary hover:underline ml-auto"
            >
              GOOGLE DRIVE ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}