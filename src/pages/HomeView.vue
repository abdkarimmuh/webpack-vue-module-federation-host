<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div v-if="isLoadingComponent">Loading HelloWorld.vue</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const isLoadingComponent = ref(true);

const HelloWorld = defineAsyncComponent(() =>
  import("app-remote/HelloWorld.vue").finally(() => {
    isLoadingComponent.value = false;
  })
);
</script>
