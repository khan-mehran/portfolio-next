import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Stats from "@/components/sections/Stats";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import Faq from "@/components/sections/Faq";
import ContactBanner from "@/components/sections/ContactBanner";

export const metadata: Metadata = {
  title: "Mehran Khan — Senior Frontend Developer | React.js & Next.js",
  description:
    "Portfolio of Mehran Khan — Senior Frontend Developer in Doha, Qatar. 5+ years building enterprise web applications for Qatar government and leading organizations using React.js, Next.js, and TypeScript.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <Services />
      <FeaturedProjects />
      <ExperienceSection />
      <Stats />
      <TestimonialSlider />
      <Faq />
      <ContactBanner />
    </>
  );
}
