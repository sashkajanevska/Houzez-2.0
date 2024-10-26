import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-section-inner">
          <div className="blog-content-wrapper">
            <div className="blog-title" data-aos="fade-zoom-in">
              <h2>Read From Our Blog</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="blog-posts-wrapper">
              <div className="blog-post">
                <div className="blog-post-inner">
                  <div className="blog-post-box">
                    <div className="blog-post-img">
                      <a href="#">
                        <img src="../../../images/about/card-01.jpg" />
                      </a>
                    </div>

                    <div className="blog-post-content">
                      <div className="blog-post-meta">
                        <div className="blog-post-date">
                          <p>March 9, 2016</p>
                        </div>

                        <div className="blog-post-theme">
                          <a href="#">Business</a>
                        </div>
                      </div>

                      <div className="blog-post-title">
                        <h3>
                          <a href="#">
                            Skills That You Can Learn In The Real Estate Market
                          </a>
                          <div></div>
                        </h3>
                      </div>

                      <div className="blog-post-text">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Incidunt ea beatae laboriosam suscipit. Commodi
                          itaque quam aut quae, quas optio, vel magnam illum
                          quaerat et aperiam...
                        </p>
                      </div>

                      <div className="blog-post-link">
                        <a href="#">Continue reading</a>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post-author">
                    <p>by Mike Moore</p>
                  </div>
                </div>
              </div>

              <div className="blog-post">
                <div className="blog-post-inner">
                  <div className="blog-post-box">
                    <div className="blog-post-img">
                      <a href="#">
                        <img src="../../../images/about/card-02.jpg" />
                      </a>
                    </div>

                    <div className="blog-post-content">
                      <div className="blog-post-meta">
                        <div className="blog-post-date">
                          <p>March 9, 2016</p>
                        </div>

                        <div className="blog-post-theme">
                          <a href="#">Construction</a>
                        </div>
                      </div>

                      <div className="blog-post-title">
                        <h3>
                          <a href="#">
                            Learn The Truth About Real Estate Industry
                          </a>
                          <div></div>
                        </h3>
                      </div>

                      <div className="blog-post-text">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Incidunt ea beatae laboriosam suscipit. Commodi
                          itaque quam aut quae, quas optio, vel magnam illum
                          quaerat et aperiam...
                        </p>
                      </div>

                      <div className="blog-post-link">
                        <a href="#">Continue reading</a>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post-author">
                    <p>by Mike Moore</p>
                  </div>
                </div>
              </div>

              <div className="blog-post">
                <div className="blog-post-inner">
                  <div className="blog-post-box">
                    <div className="blog-post-img">
                      <a href="#">
                        <img src="../../../images/about/card-03.jpg" />
                      </a>
                    </div>

                    <div className="blog-post-content">
                      <div className="blog-post-meta">
                        <div className="blog-post-date">
                          <p>March 9, 2016</p>
                        </div>

                        <div className="blog-post-theme">
                          <a href="#">Real Estate</a>
                        </div>
                      </div>

                      <div className="blog-post-title">
                        <h3>
                          <a href="#">
                            10 Quick Tips About Business Development
                          </a>
                          <div></div>
                        </h3>
                      </div>

                      <div className="blog-post-text">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Incidunt ea beatae laboriosam suscipit. Commodi
                          itaque quam aut quae, quas optio, vel magnam illum
                          quaerat et aperiam...
                        </p>
                      </div>

                      <div className="blog-post-link">
                        <a href="#">Continue reading</a>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post-author">
                    <p>by Mike Moore</p>
                  </div>
                </div>
              </div>

              <div className="blog-post">
                <div className="blog-post-inner">
                  <div className="blog-post-box">
                    <div className="blog-post-img">
                      <a href="#">
                        <img src="../../../images/about/card-04.jpg" />
                      </a>
                    </div>

                    <div className="blog-post-content">
                      <div className="blog-post-meta">
                        <div className="blog-post-date">
                          <p>March 9, 2016</p>
                        </div>

                        <div className="blog-post-theme">
                          <a href="#">Real Estate</a>
                        </div>
                      </div>

                      <div className="blog-post-title">
                        <h3>
                          <a href="#">
                            14 Common Misconceptions About Business Development
                          </a>
                        </h3>
                      </div>

                      <div className="blog-post-text">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Incidunt ea beatae laboriosam suscipit. Commodi
                          itaque quam aut quae, quas optio, vel magnam illum...
                        </p>
                      </div>

                      <div className="blog-post-link">
                        <a href="#">Continue reading</a>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post-author">
                    <p>by Mike Moore</p>
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
