import styles from "../../styles/about/TitleSection.module.css";

export default function TitleSection() {
  return (
    <section className={styles["title-section"]}>
      <div className={styles["title-overlay"]}></div>
      <div className={styles["title-container"]}>
        <div className={styles["title-inner"]}>
          <h1>About Us</h1>
        </div>
      </div>
    </section>
  );
}
