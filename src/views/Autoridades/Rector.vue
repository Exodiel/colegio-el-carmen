<template>
  <div>
    <Menu/>
    <RectorComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import RectorComponent from '@/components/RectorComponent'
import Footer from "@/components/Footer";
export default {
  name: 'rectora',
  components: {
    Menu,
    RectorComponent,
    Footer
  }
};
</script>
