<template>
  <div>
    <Menu/>
    <DeceComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import DeceComponent from '@/components/DeceComponent'
import Footer from "@/components/Footer";
export default {
  name: 'dece',
  components: {
    Menu,
    DeceComponent,
    Footer
  }
};
</script>