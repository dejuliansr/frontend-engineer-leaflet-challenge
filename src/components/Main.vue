<template>
    <Hero />

    <Feature />

    <Maps />

    <coba />
</template>

<script>
import Hero from "../sections/Hero.vue"
import Maps from "../sections/Maps.vue"
import Feature from "../sections/Feature.vue"
import coba from "../sections/coba.vue"

export default {
    components: {
        Hero,Maps,Feature,coba
    }
}
</script>