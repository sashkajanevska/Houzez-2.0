import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-section-inner">
          <div className="team-content-wrapper">
            <div className="team-title">
              <h2>Meet Our Team</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="team-cards-box">
              <div className="team-card-item">
                <div className="team-card" data-aos="fade-right">
                  <img src="../../../images/about/team-member-01.jpg" />

                  <div className="card-content">
                    <h3>Kathleen Grant</h3>
                    <p>Funder</p>
                  </div>

                  <div className="card-content-hover">
                    <div className="content-hover-inner">
                      <div className="content-hover-name">
                        <h3>Kathleen Grant</h3>
                      </div>
                      <div className="content-hover-title">
                        <p>Funder</p>
                      </div>
                      <div className="content-hover-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Corporis nisi quisquam ipsum itaque delectus
                          ipsam ipsa obcaecati iste asperiores modi mollitia
                          repudiandae commodi.
                        </p>
                      </div>
                      <div className="content-hover-social">
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

              <div className="team-card-item">
                <div className="team-card" data-aos="fade-right">
                  <img src="../../../images/about/team-member-02.jpg" />

                  <div className="card-content">
                    <h3>Keith Bailey</h3>
                    <p>CEO</p>
                  </div>

                  <div className="card-content-hover">
                    <div className="content-hover-inner">
                      <div className="content-hover-name">
                        <h3>Keith Bailey</h3>
                      </div>
                      <div className="content-hover-title">
                        <p>CEO</p>
                      </div>
                      <div className="content-hover-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Corporis nisi quisquam ipsum itaque delectus
                          ipsam ipsa obcaecati iste asperiores modi mollitia
                          repudiandae commodi.
                        </p>
                      </div>
                      <div className="content-hover-social">
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

              <div className="team-card-item">
                <div className="team-card" data-aos="fade-right">
                  <img src="../../../images/about/team-member-03.jpg" />

                  <div className="card-content">
                    <h3>Danielle Murray</h3>
                    <p>Manager</p>
                  </div>

                  <div className="card-content-hover">
                    <div className="content-hover-inner">
                      <div className="content-hover-name">
                        <h3>Danielle Murray</h3>
                      </div>
                      <div className="content-hover-title">
                        <p>Manager</p>
                      </div>
                      <div className="content-hover-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Corporis nisi quisquam ipsum itaque delectus
                          ipsam ipsa obcaecati iste asperiores modi mollitia
                          repudiandae commodi.
                        </p>
                      </div>
                      <div className="content-hover-social">
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

              <div className="team-card-item">
                <div className="team-card" data-aos="fade-right">
                  <img src="../../../images/about/team-member-04.jpg" />

                  <div className="card-content">
                    <h3>Thomas Stevens</h3>
                    <p>Manager</p>
                  </div>

                  <div className="card-content-hover">
                    <div className="content-hover-inner">
                      <div className="content-hover-name">
                        <h3>Thomas Stevens</h3>
                      </div>
                      <div className="content-hover-title">
                        <p>Manager</p>
                      </div>
                      <div className="content-hover-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Corporis nisi quisquam ipsum itaque delectus
                          ipsam ipsa obcaecati iste asperiores modi mollitia
                          repudiandae commodi.
                        </p>
                      </div>
                      <div className="content-hover-social">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
