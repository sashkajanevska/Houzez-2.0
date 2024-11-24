import MapComponent from "./MapComponent";
import styles from "../../styles/contact/MapSection.module.css";

export default function MapSection() {
  return (
    <section className={styles["map-section"]}>
      <div className={styles["map-container"]}>
        <div className={styles["map-section-inner"]}>
          <div
            className={styles["map-wrapper"]}
            style={{ filter: "grayscale(100%)" }}
          >
            <MapComponent styles={styles} />
          </div>

          <div className={styles["map-default-location"]}>
            <div className={styles["default-location-inner"]}>
              <p>
                <span>Address:</span> 1584 Biscayne Blvd, Miami, FL 33132 -{" "}
                <a
                  href="https://www.google.com/maps/dir//25.790345,-80.189221"
                  target="_blank"
                >
                  Get Directions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
