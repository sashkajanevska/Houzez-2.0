import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WidgetsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="widgets-section">
      <div className="widgets-top-shape">
        <img src="../../../images/home/section-shape.svg" alt="shape" />
      </div>
      <div className="widgets-overlay"></div>
      <div className="widgets-content">
        <div className="widgets-content-inner">
          <div
            className="widgets-title"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
          >
            <h2>
              Houzez offers a wide range of drag-and-drop widgets to assist you
              in designing your pages
            </h2>
          </div>

          <div className="widgets-container">
            <div className="widget">
              <img src="../../../images/home/streamline-icon-house-buy.png" />
              <a href="#">LOOKING TO BUY</a>
            </div>
            <div className="widget">
              <img src="../../../images/home/streamline-icon-house-sell.png" />
              <a href="#">SELL YOUR HOME</a>
            </div>
            <div className="widget">
              <img src="../../../images/home/streamline-icon-house-rent.png" />
              <a href="#">RENT A PLACE</a>
            </div>
            <div className="widget">
              <img src="../../../images/home/streamline-icon-house-information.png" />
              <a href="#">NEED HELP?</a>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-bottom-shape">
        <img src="../../../images/home/section-shape.svg" alt="shape" />
      </div>
    </section>
  );
}
