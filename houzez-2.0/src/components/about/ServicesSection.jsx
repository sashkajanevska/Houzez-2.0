import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="services-section"
      data-aos="fade-zoom-in"
      data-aos-delay="300"
    >
      <div className="services-container">
        <div className="services-section-inner">
          <div className="services-content-wrapper">
            <div className="services-title">
              <h2>Services</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="services-grid-content">
              <div className="services-grid-box">
                <div className="services-grid-item">
                  <div className="services-grid-item-inner type-1">
                    <a href="#">
                      <div className="services-grid-item-text">
                        <div className="services-grid-subtitle">Services</div>
                        <div className="services-grid-title">
                          Property Management
                        </div>
                        <div className="services-grid-link">MORE DETAILS</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28px"
                          height="28px"
                          viewBox="0 0 21 17"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.6997 16.7498L20.6367 11.7488L12.6997 6.74776V16.7498Z"
                            stroke="#fff"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="services-grid-item">
                  <div
                    className="services-grid-item-inner type-2"
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-02.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className="services-grid-item-text">
                        <div className="services-grid-subtitle">Services</div>
                        <div className="services-grid-title">
                          Financial Reporting
                        </div>
                        <div className="services-grid-link">MORE DETAILS</div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="services-grid-box">
                <div className="services-grid-item">
                  <div
                    className="services-grid-item-inner type-2"
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-01.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className="services-grid-item-text">
                        <div className="services-grid-subtitle">Services</div>
                        <div className="services-grid-title">
                          Capital Improvements
                        </div>
                        <div className="services-grid-link">MORE DETAILS</div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="services-grid-item">
                  <div
                    className="services-grid-item-inner type-2"
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-03.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className="services-grid-item-text">
                        <div className="services-grid-subtitle">Services</div>
                        <div className="services-grid-title">
                          Business Development
                        </div>
                        <div className="services-grid-link">MORE DETAILS</div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="services-grid-box">
                <div className="services-grid-item">
                  <div
                    className="services-grid-item-inner type-3"
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-04.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className="services-grid-item-text">
                        <div className="services-grid-subtitle">Services</div>
                        <div className="services-grid-title">
                          Finance Real Estate
                        </div>
                        <div className="services-grid-link">MORE DETAILS</div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="services-grid-box">
                <div className="services-grid-item">
                  <div
                    className="services-grid-item-inner type-3"
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-05.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className="services-grid-item-text">
                        <div className="services-grid-subtitle">Services</div>
                        <div className="services-grid-title">
                          Recover Asset Value
                        </div>
                        <div className="services-grid-link">MORE DETAILS</div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
