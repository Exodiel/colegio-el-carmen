<template>
  <div>
    <Menu/>
    <DoctorComponent/>
    <Footer/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import DoctorComponent from '@/components/DoctorComponent'
import Footer from "@/components/Footer";
export default {
  name: 'doctor',
  components: {
    Menu,
    DoctorComponent,
    Footer
  }
};
</script>
