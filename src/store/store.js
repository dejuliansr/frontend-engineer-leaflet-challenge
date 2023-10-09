import { defineStore } from "pinia";

export const useDisplaysStore = defineStore('Displays', {
    state: () => ({
        ListDevice: [],
        isLoading: false
    }),

    actions: {
        async GetDevice(){
            this.isLoading = true
            const res = await fetch ('https://telematics.transtrack.id/api/get_devices?lang=en&user_api_hash=$2y$10$VO6Y2wdW9x.0i0OEB25hAeEpe2KXPduYbUYwKWKmEQOq7jFOlujdK', {
                method: "GET"
            })
            if(res.ok){
                const data = await res.json()
                const FilterData = data.flatMap((group) => group.items.filter((item) => item.lat !==0 && item.lng !==0))
                this.ListDevice = FilterData
            }
            else{
                this.ListDevice = []
            }
            this.isLoading = false
        }
    }
})