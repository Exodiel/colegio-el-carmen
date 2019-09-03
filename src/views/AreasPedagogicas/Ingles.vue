<template>
    <div>
        <Menu/>
        <InglesComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import InglesComponent from "@/components/InglesComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        InglesComponent,
        Footer
    }
}
</script>