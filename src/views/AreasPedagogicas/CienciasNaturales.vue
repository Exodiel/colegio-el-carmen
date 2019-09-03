<template>
    <div>
        <Menu/>
        <CienciasNComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import CienciasNComponent from "@/components/CienciasNComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        CienciasNComponent,
        Footer
    }
}
</script>