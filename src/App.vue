<script setup>
import { ref, onMounted } from 'vue'
import HttpApi from "@/service/HttpApi";

onMounted(() => {
  getInitData()
})

const getInitData = async () => {
  const initData = await HttpApi('get', 'init')
  console.log({initData})
}
</script>

<template>
    <router-view />
</template>

<style scoped></style>
