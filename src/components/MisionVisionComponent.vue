<template>
  <a-layout-content >
    <article class="paragraph">
      <div class="content">
        <h1 itemprop="name"><strong>Misión</strong></h1>
        <hr>
        <p itemprop="description">Somos una institución educativa emblemática que tiene como meta formar jóvenes solidarios, informados y ávidos de conocimiento; desarrollando en ellos perfiles , habilidades, destrezas y competencias para contribuir a crear un mundo mejor y más pacifico; en el marco del entendimiento mutuo y el respeto intercultural; con una educación integral de calidad   y calidez, con valores morales  y éticos, promoviendo el cuidado de la naturaleza , la justicia, la solidaridad y la innovación.</p>

        <h1 itemprop="name"><strong>Visión</strong></h1>
        <hr>
        <p itemprop="description">Consolidarnos como institución educativa emblemática  referente de la región formadora de bachilleres con mentalidad internacional competente para el mundo, cimentada en una educación integral, moderna, de calidad y calidez; con conciencia social, respetuoso de los derechos humanos y de la naturaleza.</p>

      </div>
    </article>
  </a-layout-content>
</template>

<style lang="scss" scoped>
blockquote {
  margin: 0;
}

.paragraph {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-areas: "content content content content";
  margin: 0;
  padding: 2rem;
  height: 100%;
  background: rgba(49, 1, 1, .350);
  color: rgb(46, 45, 45);
  .content{
    align-self: center;
    padding: 1em;
    border-radius: 5px;
    background: #E0E0E0;
    text-align: justify;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1em;
      grid-area: content;
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 1em;
      grid-area: content;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      font-size: 1em;
      grid-area: content;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size: 1.3em;
      grid-column-start: 2;
      grid-column-end: 4;
    }
    @media (min-width: 1281px) {
      font-size: 1.5em;
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
  h1 {
    color: currentColor;
    font-size: 1.5em;
    text-align: center;
  }
}
</style>