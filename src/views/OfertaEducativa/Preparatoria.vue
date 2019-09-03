<template>
    <div>
        <Menu/>
        <PrepaComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import PrepaComponent from "@/components/PrepaComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        PrepaComponent,
        Footer
    }
}
</script>