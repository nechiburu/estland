import React, { useState, useEffect } from "react";

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Agregado
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto'; // Agregado
  };

  useEffect(() => {
    if (isPopupOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
    // Limpieza cuando el componente se desmonta
    return () => enableScroll();
  }, [isPopupOpen]);


  return (
    <>
      {isPopupOpen && (
        <div className={`popup ${isPopupOpen ? 'active' : ''}`}>
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopup}>x</button>
            <h2>Formulario de Cotización</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre Completo" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Teléfono" />
              </div>
              <div className="form-group">
                <select name="destino" id="destino">
                  <option value="" disabled selected>Seleccione un destino</option>
                  <option value="destino1">Destino 1</option>
                  <option value="destino2">Destino 2</option>
                  {/* Agrega más destinos según lo necesites */}
                </select>
              </div>
              <div className="form-group">
                <input type="date" placeholder="Fecha Estimada de Viaje" />
              </div>
              <div className="form-group">
                <input type="date" placeholder="Fecha de Retorno" />
              </div>
              <div className="form-group">
                <textarea placeholder="Comentario"></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="img-box">
            <img src="img/about/1.jpg" alt="" />
          </div>
        </div>
        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="typo-box about-me">
            <h3>Travelero Colleges</h3>
            <h5>
              Principal organizador de <span className="color-theme">viajes y fiestas</span> estudiantiles
              con sede en <span className="color-theme">Santa Cruz, Bolivia</span>
            </h5>
            <p>
              En Travelero Colleges, transformamos los sueños viajeros de los
              estudiantes en realidades vibrantes. Con una especialización única
              en organizar viajes y fiestas hacia destinos icónicos como Cancún,
              nuestra misión es brindar experiencias que sean tanto emocionantes
              como seguras. Cada viaje que diseñamos está imbuido de autenticidad,
              diversión y aprendizaje cultural.
            </p>
            <div className="btn-bar">
              <button className="px-btn px-btn-theme" onClick={togglePopup}>
                Cotizacion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
