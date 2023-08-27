import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/viajestravelerobo" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCy-hLSNYh_squF5AZZ_B3Fw" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/viajestravelero/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-right">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            travelero colleges 
            todos los derechos reservados
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
