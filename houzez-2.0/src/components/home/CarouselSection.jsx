import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import carouselItems from "../utils/CarouselItems";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default function CarouselSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="carousel-section" data-aos="fade-zoom-in">
      <div className="carousel-container">
        <div className="carousel-text-content">
          <h2>Display Latest & Featured Properties</h2>
          <p>
            With the features and filters provided with the Houzez widgets you
            can turn your visitors attention to the latest listings or the ones
            that are most profitable to buy at the moment.
          </p>
        </div>

        <div className="carousel-wrapper">
          <Swiper
            slidesPerView={4}
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
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slide-inner">
                  <div className="slide-img">
                    <img src={item.imgUrl} />
                    <span className="label-left">FEATURED</span>
                    <span className="label-right">{`FOR ${item.listingType.toUpperCase()}`}</span>
                    <div className="property-price">
                      {index === 0 ? <span>From </span> : <></>}
                      {item.price}
                    </div>
                  </div>

                  <div className="slide-content">
                    <div className="property-name">
                      <h3>
                        <a href="#">{item.name}</a>
                      </h3>
                    </div>
                    <div className="property-info">
                      <div className="property-bedrooms">
                        <img src="../../../images/home/bed-double.svg" />
                        <span>{item.bedrooms}</span>
                      </div>
                      <div className="property-bathrooms">
                        <img src="../../../images/home/shower.svg" />
                        <span>{item.bathrooms}</span>
                      </div>
                      <div className="property-area">
                        <img src="../../../images/home/ruler.svg" />
                        <span className="area">{item.propertyArea}</span>
                        <span>Sq Ft</span>
                      </div>
                    </div>
                    <div className="property-type">
                      <span>{item.propertyType.toUpperCase()}</span>
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
