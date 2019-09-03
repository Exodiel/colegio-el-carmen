<template>
  <div>
    <Menu/>
    <CoordinadoresComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import CoordinadoresComponent from "@/components/CoordinadoresComponent.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'coordinadores',
  components: {
    Menu,
    CoordinadoresComponent,
    Footer
  }
};
</script>