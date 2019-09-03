<template>
  <div>
    <Menu/>
    <MisionVisionComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import MisionVisionComponent from "@/components/MisionVisionComponent";
import Footer from "@/components/Footer";
export default {
  name: 'mision-y-vision',
  components: {
    Menu,
    MisionVisionComponent,
    Footer
  }
};
</script>