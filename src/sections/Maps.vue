<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

const lat = ref(0);
const lng = ref(0);
const map = ref();
const mapContainer = ref();

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([-6.9252475, 107.6185948], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);

});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
      map.value.setView([lat.value, lng.value], 13);
    
    L.marker([lat.value, lng.value],{draggable : true})
        .addTo(map.value)
        .bindPopup("<p> Your Location </p>")
        .openPopup();

    L.marker([lat.value, lng.value],{draggable : true})
      .addTo(map.value)
      .on("dragend",(event)=> {
          console.log(event)
      });

    });
  }
}
</script>

<template>
  <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
    <h1 class="text-3xl text-center font-semibold">Find Your Location</h1>
    <section class="grid grid-cols-none lg:grid-cols-2 lg:p-20 items-center">
      <div class="lg:w-5/6 order-2 lg:order-none lg:text-center p-10">
        <button @click="getLocation()"  class="inline-block px-5 py-3 bg-gray-900 rounded-lg
        shadow-lg text-white sm:text-base">Get Location</button>
        <div class="text-2xl p-8 sm:text-xl">
          <p>Latitude : {{ lat }}</p>
          <p>Longitude : {{ lng }}</p>
        </div>
      </div>
      <div ref="mapContainer" class="relative h-96 w-full p-9"></div>
    </section>
  </div>
</template>