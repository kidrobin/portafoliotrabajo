import React from 'react';

const Landing = () => (
  // Landing
  //   Saludo
  //   Descripcon
  //
  // Curriculum -> Dirige al curriculum

  <div className="landing">

    <div className="landing--content">
    <h1>Hola, Soy Luis Ángel Bustamante Márquez,</h1>
      <p>
        Soy desarrollador web con intereses en el diseño y
        la experiencia de usuario. Me gusta pensar en el usuario y
        las necesidades del mismo al momento de recopilar requerimientos
        y desarrollar una solución digital a un problema real.

        </p>

        <p className="landing--nota">
          Tambien me gusta la escena musical mexicana independiente.
        </p>
        <a href="./docs/LuisBustamante_CV-2018.pdf" target="_blank" className="landing--boton">Ver Currículum </a>
      </div>
  </div>
);

export default Landing;
