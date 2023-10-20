<template>
  <nav class="fixed top-0 z-50 w-full bg-gray-800">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <span class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </span>
          <p class="flex ml-2 md:mr-24">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Leaflet Challange</span>
          </p>
        </div>
        <!-- <div class="flex items-center ml-3">
          <a @click="user.Logout" class="flex text-xl text-white cursor-pointer">Logout</a>
        </div> -->
      </div>
    </div>
  </nav>

  <aside class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white sm:translate-x-0 dark:bg-gray-800 ">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#home" class="flex items-center p-2 text-white rounded-lg dark:hover:bg-rose-700 group">
            <i class="bi bi-house-door-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Home</span>
          </a>
        </li>
        <li>
          <a href="#feature" class="flex items-center p-2 text-white rounded-lg dark:hover:bg-rose-700 group">
            <i class="bi bi-gear-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Features</span>
          </a>
        </li>
        <li>
          <a href="#mapsection" class="flex items-center p-2 text-white rounded-lg dark:hover:bg-rose-700 group">
            <i class="bi bi-globe-asia-australia flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Maps</span>
          </a>
        </li>
        <li>
          <button @click="showDropdown = !showDropdown" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-rose-700">
                <i class="bi bi-phone-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap">List Device</span>
                <i class="bi bi-chevron-down"></i>
          </button>
          <ul v-if="showDropdown" class="py-2 space-y-2">
            <li>
              <div class="flex text-gray-900 cursor-pointer transition duration-75 rounded-lg pl-11 dark:text-white dark:hover:bg-gray-700">
                <a @click="getLocation()">Your Location</a>
              </div>
            </li>
            <li v-for="device in display.listDevice" :key="device.id">
              <div class="flex text-gray-900 cursor-pointer transition duration-75 rounded-lg pl-11 dark:text-white dark:hover:bg-gray-700">
                <a @click="deviceMarker(device)">
                  <p>Name {{ device.name }}</p>
                  <p>Latitude {{ device.lat }}</p>
                  <p>Longitude {{ device.lng }}</p>
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <div class="sm:ml-64">
    <div class="flex">
      <div id="mapsection" class="container mx-auto overflow-x-hidden lg:overflow-x-visible ">
        <h1 class="text-3xl text-center font-semibold pb-10">Find Location</h1>
        <div ref="mapContainer" class="relative h-96 lg:h-[600px] w-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useDisplaysStore } from '../store/store'

const display = useDisplaysStore()
const map = ref(null)
const mapContainer = ref(null)
const lat = ref(0)
const lng = ref(0)
const showDropdown = ref(false)

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
      map.value.setView([lat.value, lng.value], 13)

      var singleMarker = L.marker([lat.value, lng.value], {draggable: true})
      var popup = singleMarker.bindPopup(''+ singleMarker.getLatLng()).openPopup()
      popup.addTo(map.value)
    });
  }
}
  
onMounted(() => {
  display.getDevice().then(() => {
    map.value = L.map(mapContainer.value).setView([-6.914864, 107.608238], 13)
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value)
    L.control.locate().addTo(map.value)
    L.Control.geocoder().addTo(map.value)
    var redIcon = new L.Icon({
      iconUrl: '/images/marker-icon-red.png',
       shadowUrl: '/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    display.listDevice.forEach(device => {
      const deviceLatLng = [device.lat, device.lng]
      L.marker(deviceLatLng, {icon:redIcon})
        .addTo(map.value)
    });
  });
});

async function deviceMarker(device) {
  const duration = 1000;

  if (map.value) {
    map.value.flyTo([device.lat, device.lng], 13, {
      duration: duration / 1000,
      easeLinearity: 0.25,
      zoomPanOptions: {
        animate: true,
      },
    });
  }
}

</script>