<template>
  <div class="sm:ml-64">
    <div class="flex">
      <div id="mapsection" class="container mx-auto overflow-x-hidden lg:overflow-x-visible ">
        <h1 class="text-3xl text-center font-semibold pb-10">Find Location</h1>
        <div id="map" class="relative h-96 lg:h-[600px] w-full"></div>
        <div>
        <div class="grid lg:grid-cols-2 ">
          <div class="p-8 order-2 lg:order-none">
            <button @click="getLocation()"  class="inline-block px-5 py-3 bg-gray-900 rounded-lg
            shadow-lg text-white sm:text-base">Marker</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const lat = ref(0);
const lng = ref(0);
const map = ref();

export default {
  data() {
    return {
      map: null,
      lat,lng
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          lat.value = position.coords.latitude;
          lng.value = position.coords.longitude;
          map.value.setView([lat.value, lng.value], 13);

          var singleMarker = L.marker([lat.value, lng.value], {draggable: true});
          var popup = singleMarker.bindPopup(''+ singleMarker.getLatLng()).openPopup()
          popup.addTo(map.value);
        });
      }
    }
  },
  mounted() {
    map.value = L.map("map").setView([-6.914864, 107.608238], 13);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value);
    L.control.locate().addTo(map.value);
    L.Control.geocoder().addTo(map.value);
  },
};

</script>