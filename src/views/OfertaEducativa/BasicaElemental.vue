<template>
    <div>
        <Menu/>
        <BasicaEComponent/>
        <Footer/>
    </div>
</template>
<script>
import Menu from "@/components/Menu"
import BasicaEComponent from "@/components/BasicaEComponent"
import Footer from "@/components/Footer"
export default {
    name: 'inicial',
    components: {
        Menu,
        BasicaEComponent,
        Footer
    }
}
</script>