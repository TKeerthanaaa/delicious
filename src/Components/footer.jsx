import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">Delicious.com</p>
        <p className="mm">
          Delicious is a place here you can please your soul and tummy with our
          best food recipes.
        </p>
        <p>
          &copy;2023 | Keerthana
          <br />
          All Rights Reserved
        </p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>info@delicious.com</p>
        <p>coimbatore</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p className="flink">
          <FaLinkedin />
        </p>
        <p className="flink">
          <FaFacebook />
        </p>
        <p className="flink">
          <FaInstagram />
        </p>
        <p className="flink">
          <FaTwitter />
        </p>
      </div>
    </div>
  );
};
export default Footer;
