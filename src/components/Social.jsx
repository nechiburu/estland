import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/viajestravelerobo" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCy-hLSNYh_squF5AZZ_B3Fw" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/viajestravelero/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
