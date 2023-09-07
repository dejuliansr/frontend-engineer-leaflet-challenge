<template>
  <footer class="bg-gray-900 py-10">
        <div class="container mx-auto px-5">
            <div class="grid md:grid-cols-2">
                <div class="flex flex-col md:flex-row md:space-x-12 items-center">
                    <ul class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading">
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200" v-for="link in Links" :key="link.name">
                            <a :href="link.link">{{ link.name }}</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="md:place-self-end place-self-center mt-10 md:mt-0">
                    <ul class="flex space-x-8 items-center">
                        <li>
                            <i class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer"></i>
                        </li>
                        <li>
                            <i class="bi bi-instagram text-white hover:text-theme-secondary transition duration-200 cursor-pointer"></i>
                        </li>
                        <li>
                            <i class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    setup() {
        let Links = [
            {name: "Home", link: "#home"},
            {name: "Features", link: "#feature"},
            {name: "Maps", link: "#mapsection"},
        ]
    return{
      Links,
    }
    }
}
</script>

<style>

</style>