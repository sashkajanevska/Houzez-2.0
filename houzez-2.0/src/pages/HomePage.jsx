import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import CarouselSection from "../components/home/CarouselSection";
import WidgetsSection from "../components/home/WidgetsSection";
import GridLayoutSection from "../components/home/GridLayoutSection";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
    <Header newClass={"home"} />
    <div className="home-page">
      <HeroSection />
      <CarouselSection />
      <WidgetsSection />
      <GridLayoutSection />
    </div>
    </>
  );
}
