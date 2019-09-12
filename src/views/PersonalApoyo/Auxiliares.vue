<template>
  <div>
    <Menu/>
    <AuxiliarComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import AuxiliarComponent from '@/components/AuxiliarComponent'
import Footer from "@/components/Footer";
export default {
  name: 'auxiliares',
  components: {
    Menu,
    AuxiliarComponent,
    Footer
  }
};
</script>
