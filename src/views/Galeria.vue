<template>
  <div class="home">
    <Menu/>
    <Galeria/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Galeria from '@/components/Galeria.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'galeria',
  components: {
    Menu,
    Galeria,
    Footer
  }
}
</script>