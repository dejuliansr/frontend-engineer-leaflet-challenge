<template>
    <section class="bg-gray-200 h-screen">
        <div class="container flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold">
                <img class="w-8 h-8 mr-2" src="/images/map-marker.svg" alt="logo">
                Leaflet Challange    
            </a>
            <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md lg:p-0 bg-gray-800 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <router-link to="/" class="bi bi-house-door-fill text-white"> Home</router-link>
                    <h1 class="text-xl font-bold leading-tight md:text-2xl text-white">
                        Sign Up
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input type="text" v-model="name"  placeholder="Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 border-gray-600 text-white" required="">
                        </div>
                        <div>
                            <input type="email" v-model="email"  placeholder="Email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 border-gray-600 text-white" required="">
                        </div>
                        <div>
                            <input type="password" v-model="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400 border-gray-600 text-white" required="">
                        </div>
                        <button @click="signup" class="w-full text-white hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                        <p class="text-sm font-light text-gray-400">
                            Already have an account? <router-link to="/login" class="font-medium hover:underline"> Sign In</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:'',
        }
    },
    methods: {
        async signup(){
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });

            console.warn(result);
            if(result.status==201){
                alert("Sign Up Succes")
                localStorage.setItem("user-info",JSON.stringify(result.data))
                // this.$router.push({name:'Login'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name: 'Home'})
        }
        
        
    }

}
</script>

<style>

</style>