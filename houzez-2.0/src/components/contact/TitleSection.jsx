import styles from "../../styles/contact/TitleSection.module.css";

export default function TitleSection() {
  return (
    <section className={styles["title-section"]}>
      <div className={styles["title-overlay"]}></div>
      <div className={styles["title-container"]}>
        <div className={styles["title-inner"]}>
          <h1>Contact us</h1>
        </div>
      </div>
    </section>
  );
}
