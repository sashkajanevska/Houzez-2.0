import styles from "../../styles/about/IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles["intro-section"]}>
      <div className={styles["intro-container"]}>
        <div className={styles["intro-section-inner"]}>
          <div className={styles["intro-content-wrapper"]}>
            <div className={styles["intro-content-title"]}>
              <h2>Your Vision Unrestricted</h2>
            </div>

            <div className={styles["intro-content-text"]}>
              <div>
                <p>
                  <span>
                    Houzez is a premium WordPress theme for real estate agents
                    and agencies
                  </span>{" "}
                  where modern aesthetics are combined with a tasteful
                  simplicity and where the ease of use is achieved without
                  compromise in your ability to customize the design.
                </p>

                <p>
                  Whether you are a real estate agent looking to build a website
                  for your company or a web developer seeking a perfect
                  WordPress theme for your next project, you are certain to
                  appreciate the numerous features and benefits that our theme
                  provides.
                </p>
              </div>

              <div>
                <p>
                  Houzez is also a WordPress-based property management system
                  which allows you to own and maintain a real estate
                  marketplace, coordinate your agents, accept submissions and
                  offer membership packages.
                </p>

                <p>
                  Unlike many other real estate themes which confine you to a
                  handful of predefined layouts,{" "}
                  <span>
                    Houzez offers a limitless array of possibilities to
                    structure and style your content.
                  </span>{" "}
                  All of the customization options are logically organized in
                  your WordPress admin panel and thorough customization in the
                  provided documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
