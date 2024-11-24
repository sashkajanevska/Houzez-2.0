import { useEffect } from "react";
import Header from "../components/header/Header";
import TitleSection from "../components/about/TitleSection";
import IntroSection from "../components/about/IntroSection";
import TeamSection from "../components/about/TeamSection";
import ServicesSection from "../components/about/ServicesSection";
import BlogSection from "../components/about/BlogSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import "../styles/about/AboutPage.css";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Houzez - About us";
  }, []);

  return (
    <>
      <Header newClass={""} />
      <div className="about-page">
        <TitleSection />
        <IntroSection />
        <TeamSection />
        <ServicesSection />
        <BlogSection />
        <TestimonialsSection about={"about"} />
      </div>
    </>
  );
}
