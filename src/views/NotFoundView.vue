<template>
  <div
    class="bg-[#041536] flex items-center flex-col justify-center h-screen w-full text-center text-white"
  >
    <h1>404 Not Found</h1>
    <p class="mb-8">Sorry, the page you are looking for does not exist.</p>
    <RouterLink
      to="/"
      class="border border-slate-600 px-4 py-5 rounded hover:text-slate-700 transition-colors"
      >Go back to the homepage</RouterLink
    >
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
