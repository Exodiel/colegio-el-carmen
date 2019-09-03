<template>
  <a-layout-content>
    <div class="container">
      <div class="card1">
        <img src="../assets/ofertaeducativa/2.jpg" alt="inicial" class="card-img-top" />
        <div class="card-body">
          <h1 class="card-title">
            <strong>Docentes de Inicial</strong>
          </h1>
          <a-collapse>
            <a-collapse-panel header="Docentes" key="1">
              <ul class="list-group">
                <li class="list-group-item">LIC. MAZON BRAVO JANET ALEXANDRA</li>
                <li class="list-group-item">LIC. ALMEIDA ALMEIDA CARMEN ELIZABETH</li>
                <li class="list-group-item">LIC. FATIMA DOLORES ARTEAGA QUIROZ</li>
                <li class="list-group-item">LIC. VERA VERA JULIETA ROSALIA</li>
                <li class="list-group-item">LIC. LOOR MOREIRA CRUZ CECIBEL</li>
                <li class="list-group-item">LIC. SANTANA ZAMBRANO GISELLA LORENA</li>
                <li class="list-group-item">LIC. MARTHA CECILIA GARCES VERA</li>
                <li class="list-group-item">LIC. FERRIN CEDEÑO BEDSY ALEXANDRA</li>
                <li class="list-group-item">LIC. LUCAS LINO ESTELA VANESSA</li>
                <li class="list-group-item">LIC. VERA CEDEÑO CARMEN TERESA</li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel header="Descripción" key="2">
              <p
                class="card-text"
              >Subnivel que comprenden a niños y niñas menores de 5 años, dividido en grupo de 3 a 4 años y de 4 a5 años. La Unidad Educativa El Carmen cuenta con 4 paralelos del grupo de 3 a 4 años y 6 paralelos de 4 a 5 años.</p>
              <p
                class="card-text"
              >Los niños son seres bio-psicosociales y culturales, únicos e irrepetibles y los ubica como actores centrales del proceso de enseñanza aprendizaje. En consecuencia, son sujetos de aprendizaje desde sus necesidades, potencialidades e intereses; por lo tanto…se reconoce y da valor a los deseos, sentimientos, derechos y expectativas de los niños, considerando y respondiendo a sus especificidades (nivel de desarrollo, edad, características de personalidad, ritmos, estilos de aprender, contexto cultural y lengua), atendiendo a la diversidad en todas sus manifestaciones, respondiendo a criterios de inclusión en igualdad de oportunidades. (Currículo Educación Inicial, 2014, pág. 16).</p>
              <p
                class="card-text"
              >Este nivel de desarrollo infantil es integral y contempla todos los aspectos que lo conforman (cognitivos, sociales, psicomotrices, físicos y afectivos), interrelacionados entre sí y que se producen en el entorno natural y cultural. Nuestros docentes garantizan este enfoque de integralidad a través de la promoción de oportunidades de aprendizaje, estimulando la exploración en ambientes ricos y diversos, con calidez, afecto e interacciones positivas con las experiencias de aprendizajes desarrolladas semanalmente en cada uno de sus salones, mismo que se ejecutan a través de una metodología de trabajo en donde se prioriza el contacto con la naturaleza, la animación a la lectura el arte pero sobre todo el juego, como principal estrategia en el proceso de enseñanza-aprendizaje en este nivel, pues es una acti¬vidad innata de los niños, que puede tomar múltiples formas y que va cambiando con la edad. “Cuando juegan, los niños se involucran de manera global -con cuerpo, mente y espíritu-, están plenamente ac¬tivos e interactúan con sus pares, con los adultos y con el medio que les rodea” (Currículo Educación Inicial, 2014, pág. 41).</p>
              <p
                class="card-text"
              >Se plantea tres ejes de desarrollo y aprendizaje para toda la Educación Inicial, cada uno de ellos engloba a diferentes ámbitos propuestos para cada subnivel educativo. Los ejes de desarrollo y aprendizaje son: desarrollo personal y social, descubrimiento natural y cultural, y expresión y comunicación.</p>
              <p
                class="card-text"
              >Nuestros estudiantes al culminar este nivel cuentan con diversas destrezas desarrolladas en cada uno de los ámbitos de aprendizajes como son: Identidad y autonomía, convivencia, Relaciones con el medio natural y cultural, Relaciones Lógico Matemáticas, comprensión y expresión del lenguaje, expresión artística y la expresión corporal y motricidad; mismas que serán las bases de su educación formal en el nivel de preparatoria.</p>
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