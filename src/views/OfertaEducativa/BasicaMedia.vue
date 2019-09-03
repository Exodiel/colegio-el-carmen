<template>
    <div>
        <Menu/>
        <BasicaMComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import BasicaMComponent from "@/components/BasicaMComponent"
import Footer from "@/components/Footer"
export default {
    name: 'basica-media',
    components: {
        Menu,
        BasicaMComponent,
        Footer
    }
}
</script>