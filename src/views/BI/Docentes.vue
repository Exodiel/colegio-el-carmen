<template>
  <div>
    <Menu/>
    <DocentesComponent/>
    <Footer/>
  </div>
  
</template>
<script>
import Menu from "@/components/Menu";
import DocentesComponent from '@/components/DocentesComponent.vue';
import Footer from "@/components/Footer";
export default {
  name: 'docentes',
  components: {
    Menu,
    DocentesComponent,
    Footer
  }
};
</script>