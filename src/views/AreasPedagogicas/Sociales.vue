<template>
    <div>
        <Menu/>
        <SocialesComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import SocialesComponent from "@/components/SocialesComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        SocialesComponent,
        Footer
    }
}
</script>