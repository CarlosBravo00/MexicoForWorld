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
          ¿Quienes somos? Somos una empresa responsable del cuidado del medio
          ambiente como tambien nos enfocamos en brindar un servicio de calidad
          a nuestros clientes
        </p>
        <p>
          Cualquier duda, comentario, opiniones o inforamarnos de nuestros
          errores favor de comunicarlos apra que las personas encargadas puedan
          hacer caso y solucionar los problemas .
        </p>
        <p>Nos pueden contactar a los siguientes telefonos: 9999494949</p>
      </div>
      <div className="contact-form">
        <div style={{ width: "70%" }}>
          <h2>Solicitar más información</h2>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
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
      </div>
    </div>
  );
};

export default Footer;
