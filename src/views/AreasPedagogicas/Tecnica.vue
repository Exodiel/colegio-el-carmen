<template>
    <div>
        <Menu/>
        <TecnicaComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import TecnicaComponent from "@/components/TecnicaComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        TecnicaComponent,
        Footer
    }
}
</script>