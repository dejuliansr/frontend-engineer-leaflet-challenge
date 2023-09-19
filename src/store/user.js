import { defineStore } from "pinia";
import router from "../router/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    email: '',
    password: '',
  }),

  actions:{
    async Login(){
      const res = await fetch("https://telematics.transtrack.id/api/login?email=" +this.email+"&password="+this.password, {
        method: "POST",
      });
      const user = await res.json()
      console.log(user)
      const status = res.status
   
      if(status == 200){
        router.push('/home')
      }
      else{
        alert('Error!! Invalid Email or Password')
      }
    },
  },
});