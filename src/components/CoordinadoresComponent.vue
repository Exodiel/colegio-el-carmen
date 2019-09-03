<template>
  <a-layout-content>
    <div class="container9">

      <section class="cor1">
        <div class="card9">
          <img
            src="../assets/coordinadores/1.jpg"
            alt="ERWIN SALVADOR MUÑOZ CEVALLOS"
            class="card-img-top"
          />
          <div class="card-body">
            <h1 class="card-title">
              <strong>Erwin Salvador Muñoz Cevallos - Coordinador Programa De Bachillerato Internacional</strong>
            </h1>
            <a-collapse accordion>
              <a-collapse-panel header="Información profesional" key="1">
                <p class="card-text">
                  <strong>INGENIERO EN CONTABILIDAD Y AUDITORIA</strong> - UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ. EXTENSIÓN EL CARMEN
                </p>
                <p class="card-text">
                  <strong>Con 17 años de experiencia</strong>
                </p>
                <p class="card-text">
                  <strong>CORREO ELECTRONICO</strong>: kerwinst@hotmail.com
                </p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </section>

      <section class="cor2">
        <div class="card9">
          <img
            src="../assets/coordinadores/2.jpg"
            alt="VIVIANA LEONOR VÉLEZ VERA"
            class="card-img-top"
          />
          <div class="card-body">
            <h1 class="card-title">
              <strong>Viviana Leonor Vélez Vera - Coordinador Homólogo Programa De Bachillerato Internacional</strong>
            </h1>
            <a-collapse accordion>
              <a-collapse-panel header="Información profesional" key="1">
                <p class="card-text">
                  <strong>MAGISTER EN GERENCIA EDUCATIVA</strong> - UNIVERSIDAD ESTATAL DEL SUR DE MANABÍ
                </p>
                <p class="card-text">
                  <strong>DIPLOMA SUPERIOR EN EDUCACION UNIVERSITARIA POR COMPETENCIA</strong> - UNIVERSIDAD DEL AZUAY
                </p>
                <p class="card-text">
                  <strong>INGENIERA EN ADMINISTRACIÓN DE EMPRESAS TURÍSTICAS Y HOTELERAS</strong> - UNIVERSIDAD TECNOLÓGICA “AMERICA”
                </p>
                <p class="card-text">
                  <strong>Con 10 años de experiencia</strong>
                </p>
                <p class="card-text">
                  <strong>CORREO ELECTRONICO</strong>: viveleve888@hotmail.com
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
.container9 {
  ::after,
  ::before {
    box-sizing: border-box;
  }
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;

  background: rgba(49, 1, 1, 0.35);
  padding: 1rem;
  .card9 {
    position: relative;
    display: flex;
    align-self: center;
    justify-self: center;
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
    font-size: .8em;
    .cor1,
    .cor2{
      grid-column: 2 / 4;
      justify-self: center;
    }
    img {
      height: 300px;
    }
    .card9 {
      width: 250px;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1em;
    .cor1,
    .cor2{
      grid-column: 2 / 4;
      justify-self: center;
    }
    img {
      height: 350px;
    }
    .card9 {
      width: 350px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 1em;
    .cor1,
    .cor2{
      grid-column: 2 / 4;
      justify-self: center;
    }
    img {
      height: 350px;
    }
    .card9 {
      width: 350px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1em;
    .cor1,
    .cor2{
      grid-column: 2 / 4;
      justify-self: center;
    }
    img {
      height: 350px;
    }
    .card9 {
      width: 350px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1em;
    .cor1,
    .cor2{
      justify-self: center;
    }
    .cor1{
      grid-column: 2 / 3;
    }
    img {
      height: 350px;
    }
    .card9 {
      width: 350px;
    }
  }
  @media (min-width: 1281px) {
    font-size: .9em;
    .cor1,.cor2{
      justify-self: center;
    }
    .cor1{
      grid-column: 2 / 3;
    }
    
    img {
      height: 400px;
    }
    .card9 {
      width: 350px;
    }
  }
}
</style>