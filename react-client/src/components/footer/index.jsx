import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-info">
        <h2>Información de la empresa</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed et dui vel mauris dignissim lacinia.</p>
        <p>Nullam in tortor nec mi tincidunt commodo.</p>
        <p>Aliquam convallis, tortor et vestibulum ultrices, ex purus lobortis tellus, ac posuere magna lacus vel justo.</p>
      </div>
      <div className="contact-form">
        <h2>Solicitar más información</h2>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="social-media">
        <h2>Síguenos en redes sociales</h2>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
