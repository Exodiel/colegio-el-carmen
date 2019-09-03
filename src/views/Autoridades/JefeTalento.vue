<template>
  <div>
    <Menu/>
    <JefeTComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import JefeTComponent from '@/components/JefeTComponent'
import Footer from "@/components/Footer";
export default {
  name: 'jefe-talento',
  components: {
    Menu,
    JefeTComponent,
    Footer
  }
};
</script>