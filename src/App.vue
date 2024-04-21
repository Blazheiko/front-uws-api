<script setup>
import { ref, onMounted } from 'vue'
import HttpApi from "@/service/HttpApi";
import { useApiRoutesStore } from '@/stores/apiRoutes'

const store = useApiRoutesStore()

onMounted(() => {
  getInitData()
})

const getInitData = async () => {
  const initData = await HttpApi('get', 'init')
  console.log({initData})
  if(initData){
    store.setHttpRoutes(initData.httpRoutes)
    store.setWsRoutes(initData.wsRoutes)
  }


}
</script>

<template>
    <router-view />
</template>

<style scoped></style>
