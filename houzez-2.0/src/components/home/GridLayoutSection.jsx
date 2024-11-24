import { useEffect } from "react";
import styles from "../../styles/home/GridLayoutSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GridLayoutSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className={styles["grid-layout-section"]}
      data-aos="fade-zoom-in"
      data-aos-delay="300"
    >
      <div className={styles["grid-layout-content"]}>
        <div className={styles["grid-items-box"]}>
          <div className={styles["grid-text"]}>
            <h2>You Can Design Clean And Modern Grid Layouts</h2>
            <p>
              Grids are the backbone of all layouts, infographics and
              presentations
            </p>
          </div>
          <div className={styles["grid-item"]}>
            <div
              className={`${styles["grid-item-inner"]} ${styles["item-type-1"]}`}
              style={{
                backgroundImage: "url(../../../images/home/property-07.jpg)",
              }}
            >
              <a href="#">
                <div className={styles["grid-item-text-wrap"]}>
                  <div className={styles["grid-item-subtitle"]}>
                    7 Properties
                  </div>
                  <div className={styles["grid-item-title"]}>Studio</div>
                  <div className={styles["grid-item-link"]}>MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["grid-items-box"]}>
          <div className={styles["grid-item"]}>
            <div
              className={`${styles["grid-item-inner"]} ${styles["item-type-2"]}`}
              style={{
                backgroundImage: "url(../../../images/home/property-08.jpg)",
              }}
            >
              <a href="#">
                <div className={styles["grid-item-text-wrap"]}>
                  <div className={styles["grid-item-subtitle"]}>
                    17 Properties
                  </div>
                  <div className={styles["grid-item-title"]}>Apartment</div>
                  <div className={styles["grid-item-link"]}>MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
          <div className={styles["grid-item"]}>
            <div
              className={`${styles["grid-item-inner"]} ${styles["item-type-3"]}`}
              style={{
                backgroundImage: "url(../../../images/home/property-03.jpg)",
              }}
            >
              <a href="#">
                <div className={styles["grid-item-text-wrap"]}>
                  <div className={styles["grid-item-subtitle"]}>
                    10 Properties
                  </div>
                  <div className={styles["grid-item-title"]}>
                    Single Family Home
                  </div>
                  <div className={styles["grid-item-link"]}>MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
          <div className={styles["grid-item"]}>
            <div
              className={`${styles["grid-item-inner"]} ${styles["item-type-2"]}`}
              style={{
                backgroundImage: "url(../../../images/home/property-09.jpg)",
              }}
            >
              <a href="#">
                <div className={styles["grid-item-text-wrap"]}>
                  <div className={styles["grid-item-subtitle"]}>
                    3 Properties
                  </div>
                  <div className={styles["grid-item-title"]}>Shop</div>
                  <div className={styles["grid-item-link"]}>MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["grid-items-box"]}>
          <div className={styles["grid-item"]}>
            <div
              className={`${styles["grid-item-inner"]} ${styles["item-type-1"]}`}
              style={{
                backgroundImage: "url(../../../images/home/property-10.jpg)",
              }}
            >
              <a href="#">
                <div className={styles["grid-item-text-wrap"]}>
                  <div className={styles["grid-item-subtitle"]}>
                    3 Properties
                  </div>
                  <div className={styles["grid-item-title"]}>Office</div>
                  <div className={styles["grid-item-link"]}>MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
          <div className={styles["grid-item"]}>
            <div
              className={`${styles["grid-item-inner"]} ${styles["item-type-3"]}`}
              style={{
                backgroundImage: "url(../../../images/home/property-11.jpg)",
              }}
            >
              <a href="#">
                <div className={styles["grid-item-text-wrap"]}>
                  <div className={styles["grid-item-subtitle"]}>
                    10 Properties
                  </div>
                  <div className={styles["grid-item-title"]}>Villa</div>
                  <div className={styles["grid-item-link"]}>MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
