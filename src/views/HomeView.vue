<template>
  <Navbar />

  <Main />

  <!-- <Footer /> -->
</template>


<script>
import Navbar from "../components/Navbar.vue"
import Main from "../components/Main.vue"
import Footer from "../components/Footer.vue"

export default {
  name:"Home",
  components: {
    Navbar,
    Main,
    Footer,
  }
}
</script>