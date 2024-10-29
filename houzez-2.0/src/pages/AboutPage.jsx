import { useEffect } from "react";
import Header from "../components/header/Header";
import AboutTitleSection from "../components/about/AboutTitleSection";
import IntroSection from "../components/about/IntroSection";
import TeamSection from "../components/about/TeamSection";
import ServicesSection from "../components/about/ServicesSection";
import BlogSection from "../components/about/BlogSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import "../styles/AboutPage.css";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Houzez - About us";
  }, []);

  return (
    <>
      <Header newClass={""} />
      <div className="about-page">
        <AboutTitleSection />
        <IntroSection />
        <TeamSection />
        <ServicesSection />
        <BlogSection />
        <TestimonialsSection />
      </div>
    </>
  );
}
