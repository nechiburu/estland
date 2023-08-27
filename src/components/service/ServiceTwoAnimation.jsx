import React from "react";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    no: "01",
    service: "SEGURIDAD",
    title: "Servicios de Seguridad y Asistencia en Viaje",
    desc: `Asegurarse de que los estudiantes estén seguros durante su viaje, 
    ofreciendo servicios como seguro de viaje, asistencia 24/7, y coordinación con 
    autoridades locales para garantizar la seguridad.`,
    animationDelay: "",
  },
  {
    icon: "ti-image",
    no: "02",
    service: "EVENTOS",
    title: "Organización de Fiestas y Eventos en Destinos de Viaje",
    desc: `En colaboración con locales y discotecas populares, se podrían 
    organizar eventos exclusivos para estudiantes en los destinos seleccionados.`,
    animationDelay: "150",
  },
  {
    icon: "ti-layout",
    no: "03",
    service: "TOURS",
    title: "Tours Culturales Guiados",
    desc: `Organización de recorridos por lugares históricos, museos, 
    y atracciones culturales en los destinos de viaje, asegurando que los 
    estudiantes no sólo se diviertan, sino que también aprendan sobre la cultura local.`,
    animationDelay: "300",
  },
  {
    icon: "ti-brush-alt",
    no: "04",
    service: "ACTIVIDADES",
    title: "Actividades de Aventura y Excursiones",
    desc: `Organizar actividades emocionantes como snorkel, buceo, senderismo, 
    y otras actividades de aventura en los destinos de viaje.`,
    animationDelay: "",
  },
  {
    icon: "ti-camera",
    no: "05",
    service: "CONFIANZA",
    title: "Reuniones Pre-Viaje:",
    desc: `Organizar encuentros previos al viaje donde los estudiantes y sus 
    familias puedan conocer al equipo, entender el itinerario y resolver dudas, 
    estableciendo así un vínculo de confianza desde el principio.`,
    animationDelay: "150",
  },
  {
    icon: "ti-world",
    no: "06",
    service: "CULTURA",
    title: "Recorridos de Memoria Histórica",
    desc: `Organizar recorridos en los que se destaquen eventos históricos o 
    lugares significativos, proporcionando una experiencia educativa profunda y memorable.`,
    animationDelay: "300",
  },
];

const ServiceTwoAnimation = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div
            className="col-sm-6 col-lg-4"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.animationDelay}
          >
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwoAnimation;
