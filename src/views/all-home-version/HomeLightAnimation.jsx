import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderThreeAnimation";
import About from "../../components/about/AboutLightAnimation";
import Service from "../../components/service/ServiceTwoAnimation";
import Skills from "../../components/skills/SkillsAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/TestimonialAnimation";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/contact/ContactAnimation";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import VideoPlayer from '../VideoPlayer';
import MP3Player from '../../components/MP3Player';



const HomeThree = () => {
  useDocumentTitle("Home Light Animation || React Personal Portfolio Template");

  const [showModal, setShowModal] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [counter, setCounter] = useState(5);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false); // Nuevo estado

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  };

  useEffect(() => {
    if (showModal) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => enableScroll();
  }, [showModal]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCounter(prevCounter => prevCounter - 1);
      if (counter === 0) {
        setShowButton(true);
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [counter]);

  const handleModalClose = () => {
    setShowModal(false);
    setShouldPlayMusic(true);  // Comienza a reproducir música
  };

  return (
    <>
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 10000
        }}>
          <div className="videoFrame">
            <VideoPlayer />
          </div>

          {showButton ? (
            <button className="closeButton" onClick={handleModalClose}>
              ×
            </button>
          ) : (
            <div className="counter" style={{
              position: 'absolute',
              top: "10px",
              right: "10px",
              color: 'white'
            }}>
              Espera {counter} segundos
            </div>
          )}
        </div>
      )}
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">¿Qué Ofrecemos?</h3>
              <p>
                Ofrecemos experiencias unicas a nuestros viajeros que puedan 
                recordar durante toda su vida, al igual que un viaje seguro que permita que disfruten sin 
                preocupaciones.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      {/* <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section> */}
      {/* End Skills */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      {/* <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div> */}
      {/* End testimonial */}

      {/* Blog */}
      <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Musica</h3>
              <p>
              Sumérgete en la atmosfera que te espera para noches inolvidables. 
              Desde ritmos electrizantes hasta celebraciones estudiantiles icónicas.
              </p>
            </div>
          </div>
          {/* End .row */}
          <MP3Player shouldPlay={shouldPlayMusic} />
        </div>
      </section>
      {/*  End Blog */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contactanos</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div
                  className="sm-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h4 className="font-alt">Encuentranos</h4>
                  <p>
                    Siempre dispuestos a ayudarte con lo que necesites,
                    comunicate con nosotros.
                  </p>
                </div>

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    Avenida San Martin &, Dr. Alejandro Ramirez,
                    Santa Cruz de la Sierra
                  </span>
                </div>
                {/* End media */}

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body" >
                    info@travelerocorp.com
                  </span>
                </div>
                {/* End media */}

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                    <a href="https://wa.me/59169203728" target="_blank" rel="noopener noreferrer" style={{ color: '#1c1d24' }}>+591 69203728</a>
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </>
  );
};

export default HomeThree;
