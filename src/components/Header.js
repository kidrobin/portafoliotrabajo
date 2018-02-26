import React from 'react';

const Header = (props) => (


  <nav className="nav fixed-top nav-fill">

    <a className="nav-link active" >Portafolio de Trabajo</a>

      <a
        className="nav-link"
        href="#"
        onClick={props.mostrarContacto}>
        Contacto
      </a>

    <a
      className="nav-link"
      href="https://github.com/kidrobin"
      target="_blank">
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      className="nav-link"
      href="https://www.linkedin.com/in/luis-bustamante-m%C3%A1rquez-a6a1999a/"
      target="_blank">
      <i className="fab fa-github"></i>
    </a>
</nav>
);

export default Header;
