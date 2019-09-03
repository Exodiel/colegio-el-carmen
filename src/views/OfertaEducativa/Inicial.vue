<template>
    <div>
        <Menu/>
        <InicialComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import InicialComponent from "@/components/InicialComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        InicialComponent,
        Footer
    }
}
</script>