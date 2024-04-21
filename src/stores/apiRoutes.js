import { ref } from 'vue'
import { defineStore } from 'pinia'

let wsRoutes;
export const useApiRoutesStore = defineStore('apiRoutes',  () => {
    let httpRoutes = ref([])
    let wsRoutes = ref([])

    function setHttpRoutes(routes) {
        httpRoutes.value = routes
    }
    function setWsRoutes(routes) {
        wsRoutes.value = routes
    }

    return { httpRoutes, wsRoutes, setHttpRoutes, setWsRoutes}
})
