<template>
    <section class="bg-gray-200 h-screen">
        <div class="container flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold">
                <img class="w-8 h-8 mr-2" src="/images/map-marker.svg" alt="logo">
                Leaflet Challange    
            </a>
            <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md lg:p-0 bg-gray-800 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <!-- <router-link to="/" class="bi bi-arrow-left text-white"> Back</router-link> -->
                    <h1 class="text-xl font-bold leading-tight md:text-2xl text-white">
                        Sign In
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="userStore.Login">
                        <div>
                            <input type="text" v-model="userStore.email"  placeholder="Email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 border-gray-600 text-white">
                        </div>
                        <div>
                            <input type="password" v-model="userStore.password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 border-gray-600 text-white">
                        </div>
                        <button type="submit" class="w-full text-white hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p class="text-sm font-light text-gray-400">
                            Don’t have an account yet? <router-link to="/signup" class="font-medium hover:underline"> Sign Up</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useUserStore } from '../store/user';

export default {
  setup() {
    const userStore = useUserStore();
    return  {userStore};
  }
}
</script>