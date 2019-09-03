<template>
  <div class="bachilleratos">
    <div class="bachi-ciencias">
      <section>
        <article class="bachi__item">
          <h1>Bachillerato en Ciencias</h1>
          <hr />
          <p>El nivel de Bachillerato tiene tres (3) cursos y preferentemente se ofrece a los estudiantes de 15 a 17 años de edad.</p>
          <p>El Bachillerato constituye el tercer nivel de educación escolarizada que continúa y complementa las destrezas desarrolladas en los tres subniveles de Educación General Básica, en el que se evidencia una formación integral e interdisciplinaria vinculada a los valores de justicia, innovación, solidaridad y que permite al estudiante articularse con el Sistema de Educación Superior y, de esta manera, contribuir a su plan de vida.</p>
          <p>En este nivel se integran temáticas relacionadas con el origen de los movimientos sociales, las revoluciones liberales, la expansión, el desarrollo y sus limitaciones, la declaración de los Derechos, así como con los usos de la lengua y de las variedades lingüísticas, las transformaciones de la cultura escrita en la era digital y sus implicaciones.</p>
          <p>También se trabaja sobre las producciones artísticas, los modelos matemáticos, los procesos físicos, químicos, biológicos, y los aportes tecnológicos, económicos y científicos de diversas culturas, con la finalidad de aplicar conocimientos de diferentes disciplinas en la toma de decisiones pertinentes ante los complejos problemas ambientales, culturales, políticos y sociales.</p>
          <p>Por otro lado, se emplean diversos recursos digitales (TIC) y analógicos para desarrollar la investigación de campo, la fundamentación técnica, la experimentación como fundamento para la argumentación lógica y crítica.</p>
          <p>Este bagaje permite al estudiante desempeñar el rol de ciudadano en un contexto intercultural vinculado a los principios del Buen Vivir y desarrollar actividades de emprendimiento en contextos colaborativos.</p>
        </article>
      </section>
    </div>
    <div class="bachi-conta">
      <section>
        <article class="bachi__item">
          <h1>Bachillerato Técnico en Contabilidad</h1>
          <hr />
          <p>El Bachillerato Técnico es una opción válida para aquellos estudiantes que desean o necesitan incorporarse tempranamente al mundo laboral; sin embargo, los egresados de este bachillerato también están preparados para seguir estudios de nivel superior. Actualmente, el BT adquiere relevancia por el requerimiento de perfiles técnicos derivado de la estrategia de cambio de la matriz productiva, los sectores priorizados y las agendas zonales de desarrollo.</p>
          <p>En este bachillerato, los educandos, además de las asignaturas del Tronco Común; estudian los módulos formativos técnicos, para lo cual la malla curricular establece una carga horaria mínima de 10 períodos semanales en el primer año de bachillerato, 10 en el segundo y 25 en el tercero (Art.34 Reglamento General a la LOEI).</p>
          <p>Los graduados del Bachillerato Técnico en Contabilidad, al haber desarrollado competencias laborales propias de las figura profesional que estudian, durante el proceso formativo, pueden incorporarse al campo laboral de forma independiente, asociativa o en relación de dependencia; y aportar, en su nivel, en las cadenas de producción de bienes y/o servicios de los diferentes sectores productivos.</p>
        </article>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.bachilleratos {
  display: grid;
  width: 100%;
  height: 100%;
  background: rgba(49, 1, 1, 0.35);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 0.5rem;

  .bachi-ciencias,
  .bachi-conta {
    background-color: #e0e0e0;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 0.875em;
    color: rgb(46, 45, 45);
    .bachi__item {
      text-align: justify;
      h1 {
        font-weight: bold;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1em;

    .bachi-ciencias,
    .bachi-conta {
      grid-column: 1 / 5;
      :last-child {
        margin-bottom: 0;
      }
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: .8em;
    .bachi-ciencias {
      grid-column: 2 / 3;
    }
    .bachi-conta {
      grid-column: 3 / 4;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 1em;
    .bachi-ciencias {
      grid-column: 2 / 3;
    }
    .bachi-conta {
      grid-column: 3 / 4;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1em;
    .bachi-ciencias {
      grid-column: 1 / 3;
    }
    .bachi-conta {
      grid-column: 3 / 5;
    }
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.2em;
    .bachi-ciencias {
      grid-column: 1 / 3;
    }
    .bachi-conta {
      grid-column: 3 / 5;
    }
  }
  @media (min-width: 1281px) {
    font-size: 1.2em;
    .bachi-ciencias {
      grid-column: 2 / 3;
    }
    .bachi-conta {
      grid-column: 3 / 4;
    }
  }
}
</style>