<template>
    <div>
        <Menu/>
        <BachilleratoComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import BachilleratoComponent from "@/components/BachilleratoComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        BachilleratoComponent,
        Footer
    }
}
</script>