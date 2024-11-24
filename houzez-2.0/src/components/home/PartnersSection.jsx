import styles from "../../styles/home/PartnersSection.module.css";

export default function PartnersSection() {
  return (
    <section className={styles["partners-section"]}>
      <div className={styles["partners-box"]}>
        <div className={styles["partners-box-inner"]}>
          <div className={styles["partner-logo"]}>
            <img src="../../../images/home/partner-01-e1582734705113.jpg" />
          </div>
          <div className={styles["partner-logo"]}>
            <img src="../../../images/home/partner-02-e1582734691936.jpg" />
          </div>
          <div className={styles["partner-logo"]}>
            <img src="../../../images/home/partner-03-e1582734649458.jpg" />
          </div>
          <div className={styles["partner-logo"]}>
            <img src="../../../images/home/partner-04-e1582734671602.jpg" />
          </div>
          <div className={styles["partner-logo"]}>
            <img src="../../../images/home/partner-05-e1582734603812.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
