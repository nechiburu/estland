import React from "react";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../components/useDocumentTitle";

const Preview = () => {
  const navigate = useNavigate();

  useDocumentTitle("Krozo - Bienvenida || React Personal Portfolio Template");

  const handleEnter = () => {
    navigate("/home-light-animation");
  };

  const textStyle = {
    color: "white",
    //textShadow: "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
  };

  return (
    <>
      <section style={{
        position: "relative",
        height: "100vh",  // Asegurar que la sección ocupe toda la altura de la ventana
        display: "flex",
        alignItems: "center",  // Centrar verticalmente con flexbox
        justifyContent: "center"
      }}>
        {/* Incluir el video de fondo */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>

        {/* Superposición para oscurecer el video */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",  // Color negro con 50% de opacidad
          zIndex: 0
        }}></div>

        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="purchase-block-inner">
                <span
                  className="dark-color"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  style={textStyle}  // Aplicar estilos
                >
                  Preparate para una experiencia unica
                </span>

                <h3
                  className="m-15px-b"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  style={textStyle}  // Aplicar estilos
                >
                  Bienvenido a Travelero Colleges
                </h3>

                {/* Botón "Entrar" */}
                <button
                  onClick={handleEnter}
                  className="px-btn px-btn-theme custom-btn-size"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"                 
                >
                  <span>Entrar</span>
                </button>
              </div>
              {/* End .purchase-block-inner */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
