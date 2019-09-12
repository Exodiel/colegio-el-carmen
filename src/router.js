import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/mision-y-vision',
      name: 'mision-y-vision',
      component: () => import('./views/Nosotros/MisionVision.vue')
    },
    {
      path: '/perfiles-bi',
      name: 'perfiles',
      component: () => import('./views/Nosotros/Perfiles.vue')
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('./views/Nosotros/Historia.vue')
    },
    {
      path: '/rectora',
      name: 'rectora',
      component: () => import('./views/Autoridades/Rector.vue')
    },
    {
      path: '/vice-rectoras',
      name: 'vicerectoras',
      component: () => import('./views/Autoridades/ViceRectores.vue')
    },
    {
      path: '/jefe-talento-humano',
      name: 'jefe-talento',
      component: () => import('./views/Autoridades/JefeTalento.vue')
    },
    {
      path: '/preparatoria',
      name: 'preparatoria',
      component: () => import('./views/OfertaEducativa/Preparatoria.vue')
    },
    {
      path: '/inicial',
      name: 'inicial',
      component: () => import('./views/OfertaEducativa/Inicial.vue')
    },
    {
      path: '/basica-elemental',
      name: 'basica-elemental',
      component: () => import('./views/OfertaEducativa/BasicaElemental.vue')
    },
    {
      path: '/basica-media',
      name: 'basica-media',
      component: () => import('./views/OfertaEducativa/BasicaMedia.vue')
    },
    {
      path: '/bachillerato-bgu',
      name: 'bachillerato-bgu',
      component: () => import('./views/OfertaEducativa/Bachillerato.vue')
    },
    {
      path: '/ingles',
      name: 'ingles',
      component: () => import('./views/AreasPedagogicas/Ingles.vue')
    },
    {
      path: '/tecnica',
      name: 'tecnica',
      component: () => import('./views/AreasPedagogicas/Tecnica.vue')
    },
    {
      path: '/lenguaje',
      name: 'lenguaje',
      component: () => import('./views/AreasPedagogicas/Lenguaje.vue')
    },
    {
      path: '/sociales',
      name: 'sociales',
      component: () => import('./views/AreasPedagogicas/Sociales.vue')
    },
    {
      path: '/matematicas',
      name: 'matematicas',
      component: () => import('./views/AreasPedagogicas/Matematicas.vue')
    },
    {
      path: '/educacion-fisica',
      name: 'educacion-fisica',
      component: () => import('./views/AreasPedagogicas/EducacionFisica.vue')
    },
    {
      path: '/ciencias-naturales',
      name: 'ciencias-naturales',
      component: () => import('./views/AreasPedagogicas/CienciasNaturales.vue')
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: () => import('./views/PersonalApoyo/Doctor.vue')
    },
    {
      path: '/auxiliares',
      name: 'auxiliares',
      component: () => import('./views/PersonalApoyo/Auxiliares.vue')
    },
    {
      path: '/dece',
      name: 'dece',
      component: () => import('./views/PersonalApoyo/Dece.vue')
    },
    {
      path: '/coordinadores',
      name: 'coordinadores',
      component: () => import('./views/BI/Coordinadores.vue')
    },
    {
      path: '/docentes',
      name: 'docentes',
      component: () => import('./views/BI/Docentes.vue')
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('./views/Galeria.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('./views/PageNotFound.vue')
    }
  ]
})
