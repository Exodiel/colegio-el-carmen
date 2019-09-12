<template>
  <a-layout-content>
    <div class="container">
      <div class="content"></div>
      <div class="box">
        <h1 class="box__title">Unidad Educativa El Carmen</h1>
        <img class="box__picture" src="../assets/cont.jpeg" alt="estudiantes" />
        <p class="box__text">
          <b>Nuestro lema:</b>
          <br />
          <i>"Camino a la excelencia educativa para cumplir con el compromiso social de la educación"</i>
          <br />

          <router-link to="/galeria">
            <button class="box__button">Ver Galería</button>
          </router-link>
        </p>
        <h2 class="box__footer">Nosotros somos triunfadores</h2>
      </div>
    </div>
  </a-layout-content>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #e0e0e0;
}
.container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  background: url("../assets/content.jpg") center/cover no-repeat;
  background-attachment: fixed;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 300px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    height: 500px;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    height: 800px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 800px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 800px;
  }
  @media (min-width: 1281px) {
    height: 800px;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(49, 1, 1);
    opacity: 0.5;
  }

  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25% 50% auto;
    grid-template-areas:
      "title title"
      ". ."
      "footer footer";
    grid-gap: 20px;
    justify-self: center;
    align-self: center;
    padding: 1em;
    background: #e0e0e0;
    z-index: 10;
    color: rgb(46, 45, 45);
    border-radius: 5px;

    .box__title {
      padding-top: 0.5em;
      color: rgb(46, 45, 45);
      justify-self: center;
      align-self: center;
      grid-area: title;
      margin-bottom: 0;
    }
    .box__text {
      align-self: center;
      grid-row-start: 2;
    }
    .box__button {
      background-color: #530707;
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.05s;

      &:hover {
        background-color: lighten($color: #530707, $amount: 3);
      }
      a {
        text-decoration: none;
        color: #e0e0e0 !important;
      }
    }
    .box__picture {
      grid-row-start: 2;
      max-width: 100%;
      align-self: center;
      border-radius: 3px;
    }
    .box__footer {
      grid-row-start: 3;
      color: rgb(46, 45, 45);
      justify-self: center;
      align-self: center;
      grid-area: footer;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 0.6em;
      width: 250px;
      height: 250px;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 0.8em;
      width: 400px;
      height: 300px;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      font-size: 1.2em;
      width: 600px;
      height: 500px;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.2em;
      width: 600px;
      height: 500px;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size: 1.3em;
      width: 800px;
      height: 600px;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    @media (min-width: 1281px) {
      font-size: 1.4em;
      width: 700px;
      height: 600px;
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
}
</style>