<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 md:flex justify-between items-center ">
    <div class="flex items-center">
        <span class="text-gray-300 text-3xl mr-1">
            Challange
        </span>
    </div>

    <span @click="menuopen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
    :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
        <a :href="link.link" class="text-xl hover:text-gray-400 hover:border-b-2">{{ link.name }}</a>
      </li>
      
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    let open = ref(false)
    let Links = [
      {name: "Home", link: "#"},
      {name: "Features", link: "#"},
      {name: "Maps", link: "#"},
    ]

    function menuopen(){
      open.value = !open.value
    }

    return{
      Links,
      open,
      menuopen,
    }
  }
}
</script>