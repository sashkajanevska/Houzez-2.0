import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useWindowSize from "../../hooks/useWindowSize";
import data from "../../data/homePageData.json";
import styles from "../../styles/home/CarouselSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default function CarouselSection() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 576) {
      setSlidesPerView(1);
    } else if (width < 1200) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(4);
    }
  }, [width]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles["carousel-section"]} data-aos="fade-zoom-in">
      <div className={styles["carousel-container"]}>
        <div className={styles["carousel-text-content"]}>
          <h2>Display Latest & Featured Properties</h2>
          <p>
            With the features and filters provided with the Houzez widgets you
            can turn your visitors attention to the latest listings or the ones
            that are most profitable to buy at the moment.
          </p>
        </div>

        <div className={styles["carousel-wrapper"]}>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {data.carousel.carouselCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={styles["slide-inner"]}>
                  <div className={styles["slide-img"]}>
                    <img src={card.imgUrl} />
                    <span className={styles["label-left"]}>FEATURED</span>
                    <span
                      className={styles["label-right"]}
                    >{`FOR ${card.listingType.toUpperCase()}`}</span>
                    <div className={styles["property-price"]}>
                      {index === 0 ? <span>From </span> : <></>}
                      {card.price}
                    </div>
                  </div>

                  <div className={styles["slide-content"]}>
                    <div className={styles["property-name"]}>
                      <h3>
                        <a href="#">{card.name}</a>
                      </h3>
                    </div>
                    <div className={styles["property-info"]}>
                      <div className={styles["property-bedrooms"]}>
                        <img src="../../../images/home/bed-double.svg" />
                        <span>{card.bedrooms}</span>
                      </div>
                      <div className={styles["property-bathrooms"]}>
                        <img src="../../../images/home/shower.svg" />
                        <span>{card.bathrooms}</span>
                      </div>
                      <div className={styles["property-area"]}>
                        <img src="../../../images/home/ruler.svg" />
                        <span className={styles["area"]}>
                          {card.propertyArea}
                        </span>
                        <span>Sq Ft</span>
                      </div>
                    </div>
                    <div className={styles["property-type"]}>
                      <span>{card.propertyType.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
