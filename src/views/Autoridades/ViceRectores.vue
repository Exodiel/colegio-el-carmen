<template>
  <div>
    <Menu/>
    <ViceRComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import ViceRComponent from '@/components/ViceRComponent';
import Footer from "@/components/Footer";
export default {
  name: 'vicerectoras',
  components: {
    Menu,
    ViceRComponent,
    Footer
  }
};
</script>