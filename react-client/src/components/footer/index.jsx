import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-info">
        <h2>Información de la empresa</h2>
        <p>MEXICO FOR THE WORLD SA DE CV</p>
        <p>
          Somos una empresa dedicada a compartir la riqueza de los productos
          típicos y originarios de México. Nuestro objetivo es acercar a
          personas de todo el mundo a la diversidad y autenticidad de la cultura
          mexicana a través de sus sabores y tradiciones culinarias. Trabajamos
          directamente con productores locales y artesanos para ofrecer
          productos de la más alta calidad, elaborados de manera sostenible y
          respetando las prácticas tradicionales. ¡Únete a nosotros y descubre
          la auténtica esencia de México en cada bocado!
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
        <h2>Síguenos en redes sociales</h2>
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
          Nos pueden contactar a los siguientes telefonos: 9999494949 &
          123124512
        </p>
      </div>
    </div>
  );
};

export default Footer;
