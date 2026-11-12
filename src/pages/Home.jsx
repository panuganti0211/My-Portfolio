import React from "react";
import SectionNav from "@/components/portfolio/SectionNav";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="bg-[#07090e] min-h-screen text-slate-100 flex flex-col">
      <SectionNav />
      <main className="flex-1">
        <HeroSection id="home" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
        <EducationSection id="education" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
