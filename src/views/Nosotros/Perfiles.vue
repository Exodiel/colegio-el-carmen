<template>
  <div>
    <Menu/>
    <PerfilesComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import PerfilesComponent from '@/components/PerfilesComponent';
import Footer from "@/components/Footer";
export default {
  name: 'perfiles',
  components: {
    Menu,
    PerfilesComponent,
    Footer
  }
};
</script>