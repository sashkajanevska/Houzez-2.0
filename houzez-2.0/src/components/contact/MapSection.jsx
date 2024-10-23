import MapComponent from "./MapComponent";

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-section-inner">
          <div className="map-wrapper" style={{ filter: "grayscale(100%)" }}>
            <MapComponent />
          </div>

          <div className="map-default-location">
            <div className="default-location-inner">
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
