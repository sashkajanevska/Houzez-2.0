import { useEffect, useRef, useState } from "react";
import data from "../../data/homePageData.json";
import styles from "../../styles/home/HeroSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState();
  const slideInterval = useRef(null);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(
        currentSlide < data.hero.heroSlides.length - 1 ? currentSlide + 1 : 0
      );
    }, 5000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [currentSlide]);

  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-section-top"]}>
        <div className={styles["hero-slideshow"]}>
          {data.hero.heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`${styles["hero-slide"]} ${
                index === currentSlide ? styles["active"] : ""
              }`}
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
        <div className={styles["hero-overlay"]}></div>
        <div
          className={styles["hero-text-content"]}
          data-aos="fade-zoom-in"
          data-aos-delay="300"
        >
          <div className={styles["text-wrapper"]}>
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

      <div className={styles["hero-section-bottom"]}>
        <div className={styles["hero-cards"]}>
          <div className={styles["hero-cards-wrapper"]}>
            {data.hero.heroCards.map((card, index) => {
              return (
                <div key={index} className={styles["hero-card"]}>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <div className={styles["card-link"]}>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles["hero-bottom-shape"]}>
          <img src="../../../images/home/section-shape.svg" alt="shape" />
        </div>
      </div>
    </section>
  );
}
