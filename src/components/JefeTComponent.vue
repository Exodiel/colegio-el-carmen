<template>
  <a-layout-content>
    <div class="container">
      <div class="card">
        <img
          src="../assets/autoridades/4.jpg"
          alt="TEYI RAMIRO ARTEAGA BRAVO"
          class="card-img-top"
        />
        <div class="card-body">
          <h1 class="card-title">
            <strong>Teyi Ramiro Arteaga Bravo - Jefe de Talento Humano</strong>
          </h1>
          <a-collapse accordion>
            <a-collapse-panel header="Información profesional" key="1">
              <p class="card-text">
                <strong>MAGISTER EN DOCENCIA MENCION GESTIÓN EN DESARROLLO DEL CURRÍCULO</strong> - UNIVERSIDAD TÉNICA LUIS VARGAS TORRES DE ESMERALDAS
              </p>
              <p class="card-text">
                <strong>INGENIERO EN CONTABILIDAD Y AUDITORIA</strong> - UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ
              </p>
              <p class="card-text">
                <strong>LICENCIADO EN CIENCIAS DE LA EDUCACIÓN ESPECIALIDAD FÍSICO MATEMÁTICAS</strong> - UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ
              </p>
              <p class="card-text">
                <strong>PROFESOR DE SEGUNDA ENSEÑANZA ESPECIALIDAD FÍSICO MATEMÁTICAS</strong> - UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ
              </p>
              <p class="card-text">
                <strong>Con 23 años de experiencia </strong>
              </p>
              <p class="card-text">
                <strong>CORREO ELECTRONICO</strong>:  teyiramiro@hotmail.com
              </p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </div>
  </a-layout-content>
</template>
<style lang="scss" scoped>
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
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    
    justify-self: center;
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

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: .8em;
      grid-area: content;
      width: 300px;
      img{
        height: 300px;
      }
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 1em;
      grid-area: content;
      width: 400px;
      img{
        height: 400px;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      width: 500px;
      img{
        height: 500px;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      width: 500px;
      img{
        height: 500px;
      }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      width: 500px;
      img{
        height: 750px;
      }
    }
    @media (min-width: 1281px) {
      font-size: 1em;
      grid-column-start: 2;
      grid-column-end: 4;
      width: 600px;
      img{
        height: 800px;
      }
    }
  }
}
</style>