export default function GridLayoutSection() {
  return (
    <section className="grid-layout-section">
      <div className="grid-layout-content">
        <div className="grid-items-box">
          <div className="grid-text">
            <h2>You Can Design Clean And Modern Grid Layouts</h2>
            <p>
              Grids are the backbone of all layouts, infographics and
              presentations
            </p>
          </div>
          <div className="grid-item">
            <div
              className="grid-item-inner item-type-1"
              style={{
                backgroundImage: "url(../../../images/home/property-07.jpg)",
              }}
            >
              <a href="#">
                <div className="grid-item-text-wrap">
                  <div className="grid-item-subtitle">7 Properties</div>
                  <div className="grid-item-title">Studio</div>
                  <div className="grid-item-link">MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid-items-box">
          <div className="grid-item">
            <div
              className="grid-item-inner item-type-2"
              style={{
                backgroundImage: "url(../../../images/home/property-08.jpg)",
              }}
            >
              <a href="#">
                <div className="grid-item-text-wrap">
                  <div className="grid-item-subtitle">17 Properties</div>
                  <div className="grid-item-title">Apartment</div>
                  <div className="grid-item-link">MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div
              className="grid-item-inner item-type-3"
              style={{
                backgroundImage: "url(../../../images/home/property-03.jpg)",
              }}
            >
              <a href="#">
                <div className="grid-item-text-wrap">
                  <div className="grid-item-subtitle">10 Properties</div>
                  <div className="grid-item-title">Single Family Home</div>
                  <div className="grid-item-link">MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div
              className="grid-item-inner item-type-2"
              style={{
                backgroundImage: "url(../../../images/home/property-09.jpg)",
              }}
            >
              <a href="#">
                <div className="grid-item-text-wrap">
                  <div className="grid-item-subtitle">3 Properties</div>
                  <div className="grid-item-title">Shop</div>
                  <div className="grid-item-link">MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid-items-box">
          <div className="grid-item">
            <div
              className="grid-item-inner item-type-1"
              style={{
                backgroundImage: "url(../../../images/home/property-10.jpg)",
              }}
            >
              <a href="#">
                <div className="grid-item-text-wrap">
                  <div className="grid-item-subtitle">3 Properties</div>
                  <div className="grid-item-title">Office</div>
                  <div className="grid-item-link">MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div
              className="grid-item-inner item-type-3"
              style={{
                backgroundImage: "url(../../../images/home/property-11.jpg)",
              }}
            >
              <a href="#">
                <div className="grid-item-text-wrap">
                  <div className="grid-item-subtitle">10 Properties</div>
                  <div className="grid-item-title">Villa</div>
                  <div className="grid-item-link">MORE DETAILS</div>
                  <img src="../../../images/home/arrow-right-triangle.svg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
