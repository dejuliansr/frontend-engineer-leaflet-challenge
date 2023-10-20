import { defineStore } from "pinia";

export const useDisplaysStore = defineStore('Displays', {
    state: () => ({
        listDevice: [],
        isLoading: false
    }),
    
    actions: {
        async getDevice(){
            const token = localStorage.getItem('token')
            this.isLoading = true
            if(!token){
                alert('no token')
            }
            const res = await fetch (`https://telematics.transtrack.id/api/get_devices?lang=en&user_api_hash=${token}`, {
                method: "GET"
            })
            if(res.ok){
                const data = await res.json()
                const FilterData = data.flatMap((group) => group.items.filter((item) => item.lat !==0 && item.lng !==0))
                this.listDevice = FilterData
            }
            else{
                this.listDevice = []
            }
            this.isLoading = false
        }
    }
})