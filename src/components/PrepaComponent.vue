<template>
  <a-layout-content>
    <div class="container">
      <div class="card1">
        <img src="../assets/ofertaeducativa/1.jpg" alt="preparatoria" class="card-img-top" />
        <div class="card-body">
          <h1 class="card-title">
            <strong>Docentes de Básica Preparatoria</strong>
          </h1>
          <a-collapse>
            <a-collapse-panel header="Docentes" key="1">
              <ul class="list-group">
                <li class="list-group-item">LIC. PINARGOTE SALVATIERRA  LIGIA PATRICIA</li>
                <li class="list-group-item">LIC. ZAMBRANO SARZOSA LILIANA LORENA</li>
                <li class="list-group-item">LIC. VELIZ BARBERÁN   MÓNICA TATIANA</li>
                <li class="list-group-item">LIC. VERA ALVAREZ  ANA ADELA</li>
                <li class="list-group-item">LIC. CASANOVA CHOEZ ANGELA JESSENIA</li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel header="Descripción" key="2">
              <p class="card-text">
                El subnivel de Educación General Básica Preparatoria, según la Ley Orgánica de
                Educación Intercultural (LOEI), es considerado como el primer grado de la educación
                obligatoria y atiende a niñas y niños de 5 a 6 años de edad. Es el único subnivel
                de la Educación General Básica que comprende un único grado.
                En este grado de Básica, los docentes deben observar y evaluar continuamente el
                desarrollo integral de sus estudiantes y diseñar estrategias que aseguren el logro de
                las metas de aprendizaje necesarias para el óptimo aprovechamiento del siguiente
                grado (Art. 191, Reglamento de la LOEI). Estas estrategias deberán ser lúdicas y
                provocar disfrute en los niños y las niñas, de tal manera que su inicio en la escolaridad
                obligatoria sea placentero y motivante. La promoción al siguiente grado es
                automática; sin embargo, es necesario que docentes, madres y padres de familia o
                representantes, coordinen acciones para garantizar el desarrollo de las destrezas
                con criterios de desempeño planteadas en el presente documento.
                En este primer grado de la Educación General Básica se trabaja en torno a tres documentos
                curriculares: un currículo integrador, que toma en cuenta el desarrollo de
                aspectos cognitivos, sociales, psicomotrices, físicos y afectivos de los estudiantes,
                que acapara el grueso de la jornada escolar; un currículo específico para el área de
                Educación Cultural y Artística, y, por último, el currículo de Educación Física.
              </p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </div>
  </a-layout-content>
</template>
<style lang="scss">
ul {
  margin-top: 0;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.container {
  ::after,
  ::before {
    box-sizing: border-box;
  }
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "content content content content";
  background: rgba(49, 1, 1, 0.35);
  padding: 0.875rem;

  .card1 {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    .card-body {
      flex: 1 1 auto;
      padding: 1.25rem;
      .card-title {
        margin-bottom: 0.75rem;
        h1 {
          margin-top: 0;
          font-weight: 500;
          line-height: 1.2;
        }
      }
      p{
        text-align: justify;
      }
      .card-text:last-child {
        margin-bottom: 0;
      }
    }
    .card-img-top {
      max-width: 100%;
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px);
    }

    .list-group {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      .list-group-item {
        position: relative;
        display: block;
        padding: 0.75rem 1.25rem;
        margin-bottom: -1px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        &:first-child {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
      }
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 0.8em;
      grid-area: content;
      img {
        height: 300px;
      }
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 1em;
      grid-area: content;
      img {
        height: 400px;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      font-size: 1em;
      grid-area: content;
      img {
        height: 350px;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      img {
        height: 350px;
      }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      img {
        height: 500px;
      }
    }
    @media (min-width: 1281px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      img {
        height: 600px;
      }
    }
  }
}
</style>