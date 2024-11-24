import { useEffect } from "react";
import data from "../../data/homePageData.json";
import styles from "../../styles/home/AgentsSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AgentsSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles["agents-section"]}>
      <div className={styles["agents-content"]}>
        <div className={styles["agents-content-inner"]}>
          <div
            className={styles["agents-text"]}
            data-aos="fade-zoom-in"
            data-aos-delay="300"
          >
            <h2>Meet Our Agents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className={styles["agents-wrapper"]}>
            {data.agents.agentsCards.map((agent, index) => {
              return (
                <div key={index} className={styles["agent-item"]}>
                  <div className={styles["agent-img-box"]}>
                    <a href="#">
                      <img src={agent.imgUrl} alt="agentImg" />
                    </a>
                  </div>
                  <div className={styles["agent-info"]}>
                    <h3>
                      <a href="#">{agent.name}</a>
                    </h3>
                    <div>{agent.role}</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium quo nam veritatis ipsam, deleniti ut atque...
                    </p>
                  </div>
                  <div className={styles["agent-link"]}>
                    <a href="#">View Profile</a>
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
