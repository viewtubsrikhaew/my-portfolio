import React, { useEffect } from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection.jsx';
import AboutSection from '../components/portfolio/AboutSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import SkillsSection from '../components/portfolio/SkillsSection.jsx';
import SoftwareMarquee from '../components/portfolio/SoftwareMarquee';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import AcademicProjects from '../components/portfolio/AcademicProjects';
import FeaturedWork from '../components/portfolio/FeaturedWork';
import CredentialsSection from '../components/portfolio/CredentialsSection';
import DocumentsSection from '../components/portfolio/DocumentsSection';
import ContactForm from '../components/portfolio/ContactForm';
import FloatingSymbols from '../components/portfolio/FloatingSymbols';
import FloatingContact from '../components/portfolio/FloatingContact';

export default function Portfolio() {
  // Disable right-click on protected images
  useEffect(() => {
    const handleContextMenu = (e) => {
      const target = e.target;
      if (target.tagName === 'IMG' || target.closest('.protected')) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen relative font-inter">
      {/* Subtle floating bg symbols */}
      <FloatingSymbols />

      {/* Floating contact button */}
      <FloatingContact />

      <Navbar />

      <main className="relative z-10">
        {/* 01 Hero */}
        <HeroSection />

        {/* 01 About */}
        <AboutSection />

        {/* Software marquee */}
        <SoftwareMarquee />

        {/* 02 Experience */}
        <ExperienceSection />

        {/* 03 Skills Dashboard (Finance ↔ Creative toggle) */}
        <SkillsSection />

        {/* ★ Featured Work — selected highlights */}
        <FeaturedWork />

        {/* 04 Projects Grid (filtered by Finance / Creative) */}
        <ProjectsGrid />

        {/* 05 Academic deep-dives */}
        <AcademicProjects />

        {/* 06 Credentials */}
        <CredentialsSection />

        {/* 07 Documents (Excel / PDF protected) */}
        <DocumentsSection />

        {/* 08 Contact form */}
        <ContactForm />
      </main>
    </div>
  );
}