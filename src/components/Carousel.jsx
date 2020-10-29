import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sidehead from "./Sidehead";
import $ from "jquery";

const carousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  (function () {
    $(".react-multiple-carousel__arrow--right").hide();
    const right = () => {
      $(".react-multiple-carousel__arrow--right").click();
    };
    setInterval(right, 2000);
  })();

  const imgs = [
    "https://www.alinea-invest.com/img/ThePowerThread.png",
    "https://www.alinea-invest.com/img/TheBusinessCasual.png",
    "https://www.alinea-invest.com/img/MayshandGroup.png",
    "https://www.alinea-invest.com/img/AspireToHer.png",
    "https://www.alinea-invest.com/img/ColumbiaUniversity.png",
    "https://www.alinea-invest.com/img/IAlsoWantMoney.png",
    "https://www.alinea-invest.com/img/InvestedMillennial.png",
  ];

  return (
    <div className="container carHead">
      <Sidehead 
        title = "Featured In"
      />

      <div className="slide">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-60-px"
        >
          {imgs.map((v, i) => (
            <div className="wdt" key={i}>
              <img className="img" src={v} alt="partners" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default carousel;
