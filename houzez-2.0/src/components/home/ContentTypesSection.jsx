import { useEffect } from "react";
import styles from "../../styles/home/ContentTypesSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContentTypesSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles["content-types-section"]}>
      <div className={styles["content-types-container"]}>
        <div className={styles["content-types-inner"]}>
          <div
            className={styles["content-types-text"]}
            data-aos="fade-zoom-in"
            data-aos-delay="300"
          >
            <div>
              <h2>Display Different Content Types</h2>
              <p>
                The Houzez Grids widgets allow you to display property cities,
                types, status, etc within different grid style variations,
                colors and typography options
              </p>
            </div>
          </div>

          <div className={styles["content-types-grid"]}>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-1"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-08.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>APARTMENT</div>
                    <div className={styles["grid-box-subtitle"]}>
                      17 PROPERTIES
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-2"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-11.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>VILLA</div>
                    <div className={styles["grid-box-subtitle"]}>
                      10 PROPERTIES
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-2"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-03.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>
                      SINGLE FAMILY HOME
                    </div>
                    <div className={styles["grid-box-subtitle"]}>
                      10 PROPERTIES
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-2"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-07.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>STUDIO</div>
                    <div className={styles["grid-box-subtitle"]}>
                      7 PROPERTIES
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-2"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-09.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>SHOP</div>
                    <div className={styles["grid-box-subtitle"]}>
                      3 PROPERTIES
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-1"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-10.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>OFFICE</div>
                    <div className={styles["grid-box-subtitle"]}>
                      3 PROPERTIES
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-1"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-12.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>CONDO</div>
                    <div className={styles["grid-box-subtitle"]}>
                      1 PROPERTY
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-2"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-13.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>LOT</div>
                    <div className={styles["grid-box-subtitle"]}>
                      1 PROPERTY
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["content-grid-item"]} ${styles["grid-item-type-2"]}`}
            >
              <div
                className={styles["content-grid-box"]}
                style={{
                  backgroundImage: "url(../../../images/home/property-14.jpg)",
                }}
              >
                <a href="#">
                  <div className={styles["content-text-box"]}>
                    <div className={styles["grid-box-title"]}>
                      MULTY FAMILY HOME
                    </div>
                    <div className={styles["grid-box-subtitle"]}>
                      1 PROPERTY
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
