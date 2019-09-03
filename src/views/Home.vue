<template>
  <div class="home">
    <Menu/>
    <Carousel/>
    <HomeContent/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Carousel from '@/components/Carousel.vue'
import HomeContent from '@/components/HomeContent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Menu,
    Carousel,
    HomeContent,
    Footer
  }
}
</script>
