import { useEffect } from "react";
import styles from "../../styles/about/ServicesSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className={styles["services-section"]}
      data-aos="fade-zoom-in"
      data-aos-delay="300"
    >
      <div className={styles["services-container"]}>
        <div className={styles["services-section-inner"]}>
          <div className={styles["services-content-wrapper"]}>
            <div className={styles["services-title"]}>
              <h2>Services</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className={styles["services-grid-content"]}>
              <div className={styles["services-grid-box"]}>
                <div className={styles["services-grid-item"]}>
                  <div
                    className={`${styles["services-grid-item-inner"]} ${styles["type-1"]}`}
                  >
                    <a href="#">
                      <div className={styles["services-grid-item-text"]}>
                        <div className={styles["services-grid-subtitle"]}>
                          Services
                        </div>
                        <div className={styles["services-grid-title"]}>
                          Property Management
                        </div>
                        <div className={styles["services-grid-link"]}>
                          MORE DETAILS
                        </div>
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

                <div className={styles["services-grid-item"]}>
                  <div
                    className={`${styles["services-grid-item-inner"]} ${styles["type-2"]}`}
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-02.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className={styles["services-grid-item-text"]}>
                        <div className={styles["services-grid-subtitle"]}>
                          Services
                        </div>
                        <div className={styles["services-grid-title"]}>
                          Financial Reporting
                        </div>
                        <div className={styles["services-grid-link"]}>
                          MORE DETAILS
                        </div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles["services-grid-box"]}>
                <div className={styles["services-grid-item"]}>
                  <div
                    className={`${styles["services-grid-item-inner"]} ${styles["type-2"]}`}
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-01.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className={styles["services-grid-item-text"]}>
                        <div className={styles["services-grid-subtitle"]}>
                          Services
                        </div>
                        <div className={styles["services-grid-title"]}>
                          Capital Improvements
                        </div>
                        <div className={styles["services-grid-link"]}>
                          MORE DETAILS
                        </div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>

                <div className={styles["services-grid-item"]}>
                  <div
                    className={`${styles["services-grid-item-inner"]} ${styles["type-2"]}`}
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-03.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className={styles["services-grid-item-text"]}>
                        <div className={styles["services-grid-subtitle"]}>
                          Services
                        </div>
                        <div className={styles["services-grid-title"]}>
                          Business Development
                        </div>
                        <div className={styles["services-grid-link"]}>
                          MORE DETAILS
                        </div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles["services-grid-box"]}>
                <div className={styles["services-grid-item"]}>
                  <div
                    className={`${styles["services-grid-item-inner"]} ${styles["type-3"]}`}
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-04.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className={styles["services-grid-item-text"]}>
                        <div className={styles["services-grid-subtitle"]}>
                          Services
                        </div>
                        <div className={styles["services-grid-title"]}>
                          Finance Real Estate
                        </div>
                        <div className={styles["services-grid-link"]}>
                          MORE DETAILS
                        </div>
                        <img src="../../../images/home/arrow-right-triangle.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles["services-grid-box"]}>
                <div className={styles["services-grid-item"]}>
                  <div
                    className={`${styles["services-grid-item-inner"]} ${styles["type-3"]}`}
                    style={{
                      backgroundImage:
                        "url(../../../images/about/service-05.jpg)",
                    }}
                  >
                    <a href="#">
                      <div className={styles["services-grid-item-text"]}>
                        <div className={styles["services-grid-subtitle"]}>
                          Services
                        </div>
                        <div className={styles["services-grid-title"]}>
                          Recover Asset Value
                        </div>
                        <div className={styles["services-grid-link"]}>
                          MORE DETAILS
                        </div>
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
