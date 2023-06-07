import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-info">
        <h2>Company Information</h2>
        <p>MEXICO FOR THE WORLD SA DE CV</p>
        <p>
          We are a company dedicated to sharing the richness of typical and
          indigenous products from Mexico. Our goal is to bring people from all
          over the world closer to the diversity and authenticity of Mexican
          culture through its flavors and culinary traditions. We work directly
          with local producers and artisans to offer products of the highest
          quality, made sustainably and respecting traditional practices. Join
          us and discover the authentic essence of Mexico in every bite!
        </p>
      </div>
      {/* <div className="contact-form">
        <div style={{ width: "70%" }}>
          <h2>Solicitar más información</h2>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div> */}
      <div className="social-media">
        <h2>Follow us on social media</h2>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
        <p>
          You can contact us at the following phone numbers: 9999494949 &
          123124512
        </p>
      </div>
    </div>
  );
};

export default Footer;
