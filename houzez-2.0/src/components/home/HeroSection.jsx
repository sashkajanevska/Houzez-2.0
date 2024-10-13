import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState();
  const slideInterval = useRef(null);
  const slides = [
    { id: 1, imgUrl: "../../images/home/miami-beach.jpg" },
    { id: 2, imgUrl: "../../images/home/new-york.jpg" },
    { id: 3, imgUrl: "../../images/home/chicago.jpg" },
  ];

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    }, 5000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [currentSlide]);

  return (
    <section className="hero-section">
      <div className="hero-section-top">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            >
              <div
                style={{
                  background: `url(${slide.imgUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-text-content">
          <div className="text-wrapper">
            <div>
              <h1>Welcome to Houzez 2.0</h1>
              <p>
                Packed with 100+ new features and improvements, it is the
                biggest all-in-one solution for real estate companies and
                professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-section-bottom">
        <div className="hero-cards">
          <div className="hero-cards-wrapper">
            <div className="hero-card">
              <h2>Easy to get started</h2>
              <p>
                Get ready to launch your realty site in minutes without any
                previous experience
              </p>
              <div className="card-link">
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="hero-card">
              <h2>Highly customizable</h2>
              <p>
                Customize the site to your expectations by using all of the
                theme features
              </p>
              <div className="card-link">
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="hero-card">
              <h2>Drag-and-drop based</h2>
              <p>
                Design your page by simply dragging the features using Elementor
                page builder
              </p>
              <div className="card-link">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-shape">
          <img src="../../../images/home/section-shape.svg" alt="shape" />
        </div>
      </div>
    </section>
  );
};
