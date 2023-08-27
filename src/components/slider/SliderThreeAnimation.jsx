import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay video-banner slider-three-animation"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/1.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-md-12 col-lg-7">
              <div className="hb-typo text-left">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Travelero Colleges
                </h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <TextLoop>
                    <span className="loop-text">Viajes</span>
                    <span className="loop-text"> Aventuras</span>
                    <span className="loop-text"> Experiencias</span>
                  </TextLoop>{" "}
                </h2>
                {/* <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p> */}
                <div
                  className="btn-bar"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    Leer Más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Bajar</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
