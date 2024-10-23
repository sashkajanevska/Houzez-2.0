import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AgentsSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="agents-section">
      <div className="agents-content">
        <div className="agents-content-inner">
          <div
            className="agents-text"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
          >
            <h2>Meet Our Agents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="agents-wrapper">
            <div className="agent-item">
              <div className="agent-img-box">
                <a href="#">
                  <img src="../../../images/home/agent-1.jpg" alt="agentImg" />
                </a>
              </div>
              <div className="agent-info">
                <h3>
                  <a href="#">Samuel Palmer</a>
                </h3>
                <div>Company Agent, Modern House Real Estate</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quo nam veritatis ipsam, deleniti ut atque...
                </p>
              </div>
              <div className="agent-link">
                <a href="#">View Profile</a>
              </div>
            </div>

            <div className="agent-item">
              <div className="agent-img-box">
                <a href="#">
                  <img src="../../../images/home/agent-2.jpg" alt="agentImg" />
                </a>
              </div>
              <div className="agent-info">
                <h3>
                  <a href="#">Vincent Fuller</a>
                </h3>
                <div>Company Agent, Country House Real Estate</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quo nam veritatis ipsam, deleniti ut atque...
                </p>
              </div>
              <div className="agent-link">
                <a href="#">View Profile</a>
              </div>
            </div>

            <div className="agent-item">
              <div className="agent-img-box">
                <a href="#">
                  <img src="../../../images/home/agent-3.jpg" alt="agentImg" />
                </a>
              </div>
              <div className="agent-info">
                <h3>
                  <a href="#">Brittany Watkins</a>
                </h3>
                <div>Company Agent, All American Real Estate</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quo nam veritatis ipsam, deleniti ut atque...
                </p>
              </div>
              <div className="agent-link">
                <a href="#">View Profile</a>
              </div>
            </div>

            <div className="agent-item">
              <div className="agent-img-box">
                <a href="#">
                  <img src="../../../images/home/agent-4.jpg" alt="agentImg" />
                </a>
              </div>
              <div className="agent-info">
                <h3>
                  <a href="#">Michelle Ramirez</a>
                </h3>
                <div>Company Agent, Modern House Real Estate</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quo nam veritatis ipsam, deleniti ut atque...
                </p>
              </div>
              <div className="agent-link">
                <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
