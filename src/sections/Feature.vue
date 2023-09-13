<template>
  <!-- Features Section Start -->
    <div id="feature" class="container mx-auto px-5">
        <section>
            <div zclass="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">Features</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus commodi neque vel enim, fuga, expedita deserunt ex dolor at repudiandae reprehenderit veniam eveniet ab ipsum nam modi esse debitis numquam.</p>
            </div>

            <div class="mt-10">
                <ul class="flex flex-col items-center md:flex-row justify-center font-theme-heading">
                    <li v-for="feature in features" :key="feature.id" :class="isOpen === feature.id ? 'md:border-b-4 md:border-theme-secondary' : ''" class="w-full md:w-56 cursor-pointer hover:text-theme-secondary hover:bg-gray-200 transition duration-200 border-t-2 lg:border-gray-900 md:border-t-0 flex justify-center">
                        <a @click.prevent="isOpen = feature.id" href="#" :class="isOpen === feature.id ? ' border-theme-secondary' : ''" class="py-5  md:border-b-0 border-b-4">{{ feature.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="mt-16">
                <!-- Tab Content -->
                <template v-for="feature in features" :key="feature.id">
                    <div v-show="isOpen === feature.id" class="grid gap-32 lg:grid-cols-2 items-center lg:px-32 lg:-mt-10">
                        <div class="relative">
                            <img class="z-10 w-full " :src="feature.details.imageUrl" />
                        </div>
                        <div>
                            <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ feature.details.title }}</h3>
                            <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ feature.details.description }}</p>
                            <div class="flex justify-center lg:justify-start mt-7"></div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        let isOpen = ref(1);

        return{
            isOpen,
        }
    },
    data(){
        return{
            features: [
                {
                    id: 1,
                    name: "Lorem",
                    details: {
                        imageUrl: "/images/map-marker.svg",
                        title: "Lorem Ipsum",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus commodi neque vel enim, fuga, expedita deserunt ex dolor at repudiandae reprehenderit veniam eveniet ab ipsum nam modi esse debitis numquam.",
                        link: "#",
                    },
                },
                {
                    id: 2,
                    name: "Ipsum",
                    details: {
                        imageUrl: "/images/maps-icon.svg",
                        title: "Lorem Ipsum",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus commodi neque vel enim, fuga, expedita deserunt ex dolor at repudiandae reprehenderit veniam eveniet ab ipsum nam modi esse debitis numquam.",
                        link: "#",
                    },
                },
                {
                    id: 3,
                    name: "Dolar",
                    details: {
                        imageUrl: "/images/earth-icon.svg",
                        title: "Lorem Ipsum",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus commodi neque vel enim, fuga, expedita deserunt ex dolor at repudiandae reprehenderit veniam eveniet ab ipsum nam modi esse debitis numquam.",
                        link: "#",
                    },
                },
            ],
        }
    }
}
</script>