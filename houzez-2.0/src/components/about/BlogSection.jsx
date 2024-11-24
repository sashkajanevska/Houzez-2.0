import { useEffect } from "react";
import data from "../../data/aboutPageData.json";
import styles from "../../styles/about/BlogSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles["blog-section"]}>
      <div className={styles["blog-container"]}>
        <div className={styles["blog-section-inner"]}>
          <div className={styles["blog-content-wrapper"]}>
            <div className={styles["blog-title"]} data-aos="fade-zoom-in">
              <h2>Read From Our Blog</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className={styles["blog-posts-wrapper"]}>
              {data.blog.blogPosts.map((post, index) => {
                return (
                  <div key={index} className={styles["blog-post"]}>
                    <div className={styles["blog-post-inner"]}>
                      <div className={styles["blog-post-box"]}>
                        <div className={styles["blog-post-img"]}>
                          <a href="#">
                            <img src={post.imgUrl} />
                          </a>
                        </div>

                        <div className={styles["blog-post-content"]}>
                          <div className={styles["blog-post-meta"]}>
                            <div className={styles["blog-post-date"]}>
                              <p>March 9, 2016</p>
                            </div>

                            <div className={styles["blog-post-theme"]}>
                              <a href="#">{post.theme}</a>
                            </div>
                          </div>

                          <div className={styles["blog-post-title"]}>
                            <h3>
                              <a href="#">{post.title}</a>
                              <div></div>
                            </h3>
                          </div>

                          <div className={styles["blog-post-text"]}>
                            {index < 3 ? (
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Incidunt ea beatae laboriosam
                                suscipit. Commodi itaque quam aut quae, quas
                                optio, vel magnam illum quaerat et aperiam...
                              </p>
                            ) : (
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Incidunt ea beatae laboriosam
                                suscipit. Commodi itaque quam aut quae, quas
                                optio, vel magnam illum...
                              </p>
                            )}
                          </div>

                          <div className={styles["blog-post-link"]}>
                            <a href="#">Continue reading</a>
                          </div>
                        </div>
                      </div>

                      <div className={styles["blog-post-author"]}>
                        <p>by Mike Moore</p>
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
