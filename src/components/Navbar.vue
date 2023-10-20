<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <span @click="sidebar = !sidebar" data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </span>
          <p class="flex ml-2 md:mr-24">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Leaflet Challange</span>
          </p>
        </div>
      </div>
    </div>
  </nav>

  <aside :class="{ 'fixed -translate-x-0': sidebar}" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#home" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-rose-700 group">
            <i class="bi bi-house-door-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Home</span>
          </a>
        </li>
        <li>
          <a href="#feature" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-rose-700 group">
            <i class="bi bi-gear-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Features</span>
          </a>
        </li>
        <li>
          <a href="#mapsection" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-rose-700 group">
            <i class="bi bi-globe-asia-australia flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Maps</span>
          </a>
        </li>
        <li>
          <button @click="device.getDevice(); open = !open" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-rose-700">
                <i class="bi bi-phone-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">List Device</span>
                <i class="bi bi-chevron-down"></i>
          </button>
          <ul v-if="open" class="py-2 space-y-2">
            <svg v-if="device.isLoading" class="w-5 h-5 text-white animate-spin absolute left-1/2 -ml-2.5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
            <li v-for="list in device.listDevice" :key="list.id">
              <div class="flex text-gray-900 transition duration-75 rounded-lg pl-11 dark:text-white dark:hover:bg-gray-700">
                <a href="#">
                  <p>Name {{ list.name }}</p>
                  <p>Latitude {{ list.lat }}</p>
                  <p>Longitude {{ list.lng }}</p>
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { useDisplaysStore } from '../store/store'

import { ref } from "vue"
export default {
  setup(){
    const device = useDisplaysStore()
    const sidebar = ref(false)
    return {device,sidebar}
  },
  data(){
    return{
      open: false
    }
  }
}
</script>

<style>

</style>