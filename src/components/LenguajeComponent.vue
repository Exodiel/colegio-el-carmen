<template>
  <a-layout-content>
    <div class="container">
      <div class="card1">
        <img
          src="../assets/areas/3.jpg"
          alt="lenguaje"
          class="card-img-top"
        />
        <div class="card-body">
          <h1 class="card-title">
            <strong>Docentes del Área de Lenguaje</strong>
          </h1>
          <a-collapse>
            <a-collapse-panel header="Docentes" key="1">
              <ul class="list-group">
                <li class="list-group-item">LIC. ALCIVAR BARRE RUTH CELIA</li>
                <li class="list-group-item">LIC. BERMELLO VELEZ MERIDA DEL ROCIO</li>
                <li class="list-group-item">LIC. CEDEÑO MEDRANDA ANGELITA</li>
                <li class="list-group-item">LIC. ESMERALDA NAVARRETE LANDY</li>
                <li class="list-group-item">LIC. FIGUEROA BRIONES GLENDA ZULEMA</li>
                <li class="list-group-item">LIC. FIGUEROA CORNEJO GABRIELA MARILU</li>
                <li class="list-group-item">LIC. GILER ZAMBRANO MARIA DEL ROCIO</li>
                <li class="list-group-item">LIC. HOLGUIN ZAMBRANO GRACIELA SELENE</li>
                <li class="list-group-item">LIC. INTRIAGO ZAMBRANO LILIAM ELIZABETH</li>
                <li class="list-group-item">LIC. PATIÑO CEVALLOS JAZMIN JANETH</li>
                <li class="list-group-item">LIC. VELEZ MENDOZA ANTONIA FILERMA</li>
                <li class="list-group-item">LIC. ZAMBRANO VERA DIANA EMPERATRIZ</li>
                <li class="list-group-item">LIC. ZAMBRANO LOOR MARIA SONALI</li>
                <li class="list-group-item">LIC. ZAMBRANO LOOR FELIZA CECIBEL</li>
              </ul>
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
        height: 200px;
      }
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 1em;
      grid-area: content;
      img {
        height: 250px;
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
        height: 350px;
      }
    }
    @media (min-width: 1281px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      img {
        height: 450px;
      }
    }
  }
}
</style>