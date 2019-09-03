<template>
  <a-layout-content>
    <div class="container">
      <section class="s1">
        <div class="card">
          <img
            src="../assets/autoridades/2.jpg"
            alt="MÓNICA CECILIA BARBERÁN REYNA"
            class="card-img-top"
          />
          <div class="card-body">
            <h1 class="card-title">
              <strong>Mónica Cecilia Barberán Reyna - ViceRectora</strong>
            </h1>
            <a-collapse accordion>
              <a-collapse-panel header="Información profesional" key="1">
                <p class="card-text">
                  <strong>MAGISTER EN GERENCIA Y LIDERAZGO EDUCACIONAL</strong> - UUNIVERSIDAD TECNICA PARTICULAR DE LOJA
                </p>
                <p class="card-text">
                  <strong>LICENCIADA EN CIENCIAS DE LA EDUCACIÓN ESPECIALIZACIÓN EDUCACIÓN PRIMARIA</strong> - UNIVERSIDAD DE GUAYAQUIL
                </p>
                <p class="card-text">
                  <strong>PROFESORA ESPECIALIZACIÓN EDUCACIÓN PRIMARIA</strong> - UNIVERSIDAD DE GUAYAQUIL
                </p>
                <p class="card-text">
                  <strong>Con 23 años de experiencia</strong>
                </p>
                <p class="card-text">
                  <strong>CORREO ELECTRONICO</strong>: cecibarberan@hotmail.com
                </p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </section>
      <section class="s2">
        <div class="card">
          <img
            src="../assets/autoridades/3.jpg"
            alt="GABRIELA PATRICIA SOLÓRZANO LOOR"
            class="card-img-top"
          />
          <div class="card-body">
            <h1 class="card-title">
              <strong>Gabriela Patricia Solórzano Loor - ViceRectora</strong>
            </h1>
            <a-collapse accordion>
              <a-collapse-panel header="Información profesional" key="1">
                <p class="card-text">
                  <strong>MAGISTER EN EDUCACIÓN ESPECIAL</strong> - UNIVERSIDAD TECNOLÓGICA EQUINOCCIAL
                </p>
                <p class="card-text">
                  <strong>LICENCIADA EN CIENCIAS DE LA EDUCACIÓN MENCIÓN EDUCACIÓN PARVULARIA</strong> - UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ
                </p>
                <p class="card-text">
                  <strong>Con 14 años de experiencia</strong>
                </p>
                <p class="card-text">
                  <strong>CORREO ELECTRONICO</strong>: gabrielasolorzano1987@gmail.com
                </p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </section>
    </div>
  </a-layout-content>
</template>
<style lang="scss">
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
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
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
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: .9em;
    .s1,
    .s2 {
      grid-column-start: 1;
      grid-column-end: 7;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1em;
    .s1 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .s2 {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 1em;
    .s1 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .s2 {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1em;
    .s1 {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .s2 {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1em;
    .s1 {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .s2 {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
  @media (min-width: 1281px) {
    font-size: 1em;
    .s1 {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .s2 {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
}
</style>