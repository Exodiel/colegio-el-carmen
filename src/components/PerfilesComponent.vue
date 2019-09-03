<template>
  <a-layout-content>
    <div class="content-bi">
      <div class="profiles-bi">
        <section class="c1">
          <article class="profile">
            <h2>INDAGADORES</h2>
            <hr />
            <p>Cultivamos nuestra curiosidad, a la vez que desarrollamos habilidades para la indagación y la investigación. Sabemos cómo aprender de manera autónoma y junto con otros. Aprendemos con entusiasmo y mantenemos estas ansias de aprender durante toda la vida.</p>
          </article>

          <article class="profile">
            <h2>INFORMADOS E INSTRUIDOS</h2>
            <hr />
            <p>Desarrollamos y usamos nuestra comprensión conceptual mediante la exploración del conocimiento en una variedad de disciplinas. Nos comprometemos con ideas y cuestiones de importancia local y mundial.</p>
          </article>

          <article class="profile">
            <h2>PENSADORES</h2>
            <hr />
            <p>Utilizamos habilidades de pensamiento crítico y creativo para analizar y proceder de manera responsable ante problemas complejos. Actuamos por propia iniciativa al tomar decisiones razonadas y éticas.</p>
          </article>

          <article class="profile">
            <h2>BUENOS COMUNICADORES</h2>
            <hr />
            <p>Nos expresamos con confianza y creatividad en diversas lenguas, lenguajes y maneras. Colaboramos eficazmente, escuchando atenta- mente las perspectivas de otras personas y grupos.</p>
          </article>

          <article class="profile">
            <h2>INTEGROS</h2>
            <hr />
            <p>Actuamos con integridad y honradez, con un profundo sentido de la equidad, la justicia y el respeto por la dignidad y los derechos de las personas en todo el mundo. Asumimos la responsabilidad de nuestros propios actos y sus consecuencias.</p>
          </article>
        </section>

        <section class="c2">
          <article class="profile">
            <h2>DE MENTALIDAD ABIERTA</h2>
            <hr />
            <p>Desarrollamos una apreciación crítica de nuestras propias culturas e historias personales, así como de los valores y tradiciones de los demás. Buscamos y consideramos distintos puntos de vista y estamos dispuestos a aprender de la experiencia.</p>
          </article>

          <article class="profile">
            <h2>SOLIDARIOS</h2>
            <hr />
            <p>Mostramos empatía, sensibilidad y respeto. Nos comprometemos a ayudar a los demás y actuamos con el propósito de influir positivamente en la vida de las personas y el mundo que nos rodea.</p>
          </article>

          <article class="profile">
            <h2>AUDACES</h2>
            <hr />
            <p>Abordamos la incertidumbre con previsión y determinación. Trabajamos de manera autónoma y colaborativa para explorar nuevas ideas y estrategias innovadoras. Mostramos ingenio y resiliencia cuando enfrentamos cambios y desafíos.</p>
          </article>

          <article class="profile">
            <h2>EQUILIBRADOS</h2>
            <hr />
            <p>Entendemos la importancia del equilibrio físico, mental y emocional para lograr el bienestar propio y el de los demás. Reconocemos nuestra inter- dependencia con respecto a otras personas y al mundo en que vivimos.</p>
          </article>

          <article class="profile">
            <h2>REFLEXIVOS</h2>
            <hr />
            <p>Evaluamos detenidamente el mundo y nuestras propias ideas y experien- cias. Nos esforzamos por comprender nuestras fortalezas y debilidades para, de este modo, contribuir a nuestro aprendizaje y desarrollo personal.</p>
          </article>
        </section>
      </div>
    </div>
  </a-layout-content>
</template>

<style lang="scss" scoped>
.content-bi {
  width: 100%;
  height: 100%;
  background: rgba(49, 1, 1, 0.35);
  .profiles-bi {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 1rem;

    .profile {
      background-color: #e0e0e0;
      border-radius: 5px;
      padding: 1rem;
      margin-bottom: 0.875em;
      color: rgb(46, 45, 45);
      h2{
        font-weight: bold;
      }
      p{
        text-align: justify;
      }
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1em;

      .c1,
      .c2 {
        grid-column-start: 1;
        grid-column-end: 5;
        :last-child{
          margin-bottom: 0;
        }
      }
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 1em;
      .c1 {
        grid-column-start: 2;
        grid-column-end: 4;
      }
      .c2 {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      font-size: 1em;
      .c1 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .c2 {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1em;
      .c1 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .c2 {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size: 1.3em;
      .c1 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .c2 {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }
    @media (min-width: 1281px) {
      font-size: 1.5em;
      .c1 {
        grid-column-start: 2;
        grid-column-end: 3;
      }
      .c2 {
        grid-column-start: 3;
        grid-column-end: 4;
      }
    }
  }
}
</style>