<template>
    <div>
        <Menu/>
        <LenguajeComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import LenguajeComponent from "@/components/LenguajeComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        LenguajeComponent,
        Footer
    }
}
</script>