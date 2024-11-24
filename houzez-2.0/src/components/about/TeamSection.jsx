import { useEffect } from "react";
import data from "../../data/aboutPageData.json";
import styles from "../../styles/about/TeamSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className={styles["team-section"]}>
      <div className={styles["team-container"]}>
        <div className={styles["team-section-inner"]}>
          <div className={styles["team-content-wrapper"]}>
            <div className={styles["team-title"]}>
              <h2>Meet Our Team</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className={styles["team-items-box"]}>
              {data.team.teamMembers.map((member, index) => {
                return (
                  <div key={index} className={styles["team-card-item"]}>
                    <div className={styles["team-card"]} data-aos="fade-right">
                      <img src={member.imgUrl} />

                      <div className={styles["card-content"]}>
                        <h3>{member.name}</h3>
                        <p>{member.name}</p>
                      </div>

                      <div className={styles["card-content-hover"]}>
                        <div className={styles["content-hover-inner"]}>
                          <div className={styles["content-hover-name"]}>
                            <h3>{member.name}</h3>
                          </div>
                          <div className={styles["content-hover-title"]}>
                            <p>{member.role}</p>
                          </div>
                          <div className={styles["content-hover-text"]}>
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Corporis nisi quisquam ipsum
                              itaque delectus ipsam ipsa obcaecati iste
                              asperiores modi mollitia repudiandae commodi.
                            </p>
                          </div>
                          <div className={styles["content-hover-social"]}>
                            <a href="#">
                              <img
                                src="../../../images/about/facebook.svg"
                                alt="facebook"
                              />
                            </a>
                            <a href="#">
                              <img
                                src="../../../images/about/twitter.svg"
                                alt="twitter"
                              />
                            </a>
                            <a href="#">
                              <img
                                src="../../../images/about/linkedin.svg"
                                alt="linkedin"
                              />
                            </a>
                            <a href="#">
                              <img
                                src="../../../images/about/pinterest.svg"
                                alt="pinterest"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
