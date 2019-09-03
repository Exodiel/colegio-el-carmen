<template>
  <div>
    <Menu/>
    <HistoriaComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue"
import HistoriaComponent from "@/components/HistoriaComponent.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'historia',
  components: {
    Menu,
    HistoriaComponent, 
    Footer
  }
};
</script>
