<template>
    <div>
        <Menu/>
        <MatematicasComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import MatematicasComponent from "@/components/MatematicasComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        MatematicasComponent,
        Footer
    }
}
</script>