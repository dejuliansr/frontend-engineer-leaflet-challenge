<template>
    <Hero />

    <Feature />

    <Maps />
</template>

<script>
import Hero from "../sections/Hero.vue"
import Maps from "../sections/Maps.vue"
import Feature from "../sections/Feature.vue"

export default {
    components: {
        Hero,Maps,Feature,
    }
}
</script>