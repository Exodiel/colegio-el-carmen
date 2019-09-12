<template>
  <a-layout-header id="components-layout-demo-top" style="width: 100%; background: rgb(83, 7, 7); ">
    <!-- cambiar el background del header -->

    <a-menu 
      mode="horizontal"
      :style="{ lineHeight: '70px' }"
      
    >
      <a-menu-item >
        <router-link to="/">
          <img
            src="../assets/logo_ins.png"
            alt="Unidad Educativa El Carmen"
            class="logo"
          />
        </router-link>
      </a-menu-item>
      <a-sub-menu key="1" >
        <span slot="title" class="submenu-title-wrapper">Nosotros</span>
        <a-menu-item key="setting:1" >
          <router-link to="/mision-y-vision">Misión y Visión</router-link>
        </a-menu-item>
        <a-menu-item key="setting:2" >
           <router-link to="/perfiles-bi">Perfiles de BI</router-link>
        </a-menu-item>
        <a-menu-item key="setting:3" >
          <router-link to="/historia">Historia</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="2">
        <span slot="title" class="submenu-title-wrapper">Autoridades</span>
        <a-menu-item key="setting:4" >
          <router-link to="/rectora">Rectora</router-link>
        </a-menu-item>
        <a-menu-item key="setting:5" >
          <router-link to="/vice-rectoras">Vice Rectoras</router-link>
        </a-menu-item>
        <a-menu-item key="setting:6">
          <router-link to="/jefe-talento-humano">Jefe de Talento Humano</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="3">
        <span slot="title" class="submenu-title-wrapper">Oferta Educativa</span>
        <a-menu-item key="setting:7">
          <router-link to="/preparatoria">Preparatoria</router-link>
        </a-menu-item>
        <a-menu-item key="setting:8">
          <router-link to="/inicial">Inicial</router-link>
        </a-menu-item>
        <a-menu-item key="setting:9">
          <router-link to="/basica-elemental">Básica Elemental</router-link>
        </a-menu-item>
        <a-menu-item key="setting:10">
          <router-link to="/basica-media">Básica Media</router-link>
        </a-menu-item>
        <a-menu-item key="setting:11">
          <router-link to="/bachillerato-bgu">Básica Superior y Bachilleratos</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="4">
        <span slot="title" class="submenu-title-wrapper">Áreas Pedagógicas</span>
        <a-menu-item key="setting:12">
          <router-link to="/ingles">Inglés</router-link>
        </a-menu-item>
        <a-menu-item key="setting:13">
          <router-link to="/tecnica">Técnica</router-link>
        </a-menu-item>
        <a-menu-item key="setting:14">
          <router-link to="/lenguaje">Lenguaje</router-link>
        </a-menu-item>
        <a-menu-item key="setting:15">
          <router-link to="/sociales">Sociales</router-link>
        </a-menu-item>
        <a-menu-item key="setting:16">
          <router-link to="/matematicas">Matemáticas</router-link>
        </a-menu-item>
        <a-menu-item key="setting:17">
          <router-link to="/educacion-fisica">Educación Física</router-link>
        </a-menu-item>
        <a-menu-item key="setting:18">
          <router-link to="/ciencias-naturales">Ciencias Naturales</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="5">
        <span slot="title" class="submenu-title-wrapper">Personal de Apoyo</span>
        <a-menu-item key="setting:19">
          <router-link to="/doctor">Doctor</router-link>
        </a-menu-item>
        <a-menu-item key="setting:20">
          <router-link to="/auxiliares">Auxiliares</router-link>
        </a-menu-item>
        <a-menu-item key="setting:31">
          <router-link to="/dece">DECE</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="6">
        <span slot="title" class="submenu-title-wrapper">Bachillerato Internacional</span>
        <a-menu-item key="setting:21">
          <router-link to="/coordinadores">Coodinadores</router-link>
        </a-menu-item>
        <a-menu-item key="setting:22">
          <router-link to="/docentes">Docentes</router-link>
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">Asignaturas</span>
          <a-menu-item key="setting:23">
            Estudios Matemáticos
            <a href="https://ueecmatematicasbi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:24">
            AB Inition
            <a href="https://ueecenglishabinitio.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:25">
            Sociedad e Individuos
            <a href="https://ueechistoriajchbi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:26">
            Español A:Literatura
            <a href="https://ueeclalbi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:27">
            Química
            <a href="https://ueecquimicabi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:28">
            Gestión Empresarial
            <a href="https://ueecgebi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">Componentes</span>
          <a-menu-item key="setting:29">
            CAS
            <a href="https://casbiueec.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:30">
            Monografía
            <a href="https://ueecmonobi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
          <a-menu-item key="setting:31">
            Teoría del Conocimiento
            <a href="https://ueectdcbi.blogspot.com/" target="_blank"></a>
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-header>
</template>


<style>

.logo {
  background-size: cover;
  width: 120px;
  height: 40px;
  margin: 16px 0 16px 0;
  border-radius: 2px;
}
</style>
