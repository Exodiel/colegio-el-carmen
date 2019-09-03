<template>
    <div>
        <Menu/>
        <EduFisicaComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import EduFisicaComponent from "@/components/EduFisicaComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        EduFisicaComponent,
        Footer
    }
}
</script>