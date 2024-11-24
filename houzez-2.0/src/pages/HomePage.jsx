import { useEffect } from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import CarouselSection from "../components/home/CarouselSection";
import WidgetsSection from "../components/home/WidgetsSection";
import GridLayoutSection from "../components/home/GridLayoutSection";
import FormSection from "../components/home/FormSection";
import ContentTypesSection from "../components/home/ContentTypesSection";
import AgentsSection from "../components/home/AgentsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PartnersSection from "../components/home/PartnersSection";
import "../styles/home/HomePage.css";

export default function HomePage() {
  useEffect(() => {
    document.title = "Houzez - Real Estate Theme";
  }, []);

  return (
    <>
    <Header newClass={"home"} />
    <div className="home-page">
      <HeroSection />
      <CarouselSection />
      <WidgetsSection />
      <GridLayoutSection />
      <FormSection />
      <ContentTypesSection />
      <AgentsSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
    </>
  );
}
