import { useEffect } from "react";
import data from "../../data/homePageData.json";
import styles from "../../styles/home/TestimonialsSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestimonialsSection({ about }) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className={`${styles["testimonials-section"]} ${
        about ? styles.about : ""
      }`}
      data-aos="fade-zoom-in"
      data-aos-delay="300"
    >
      <div className={styles["testimonials-content"]}>
        <div className={styles["testimonials-content-inner"]}>
          <div className={styles["testimonials-title"]}>
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>

          <div className={styles["testimonials-wrap"]}>
            {data.testimonials.testimonialsCards.map((testimonial, index) => {
              return (
                <div key={index} className={styles["testimonial-box"]}>
                  <div className={styles["testimonial-box-inner"]}>
                    <div className={styles["testimonial-icon"]}>
                      <img src="../../../images/home/quotes.svg" alt="quote" />
                    </div>
                    <div className={styles["testimonial-text"]}>
                      <p>{testimonial.content}</p>
                      {index === 0 ? <br /> : null}
                    </div>
                    <div className={styles["testimonial-info"]}>
                      <img src={testimonial.imgUrl} />
                      <div>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
