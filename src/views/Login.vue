<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="min-h-screen bg-slate-900 flex items-center justify-center">
    <div class="text-white text-center">
      <h1 class="text-3xl mb-5">Login Coming Soon</h1>
      <p class="text-lg mt-8">
        We're sorry, but the app isn't quite ready yet. We're looking forward to
        sharing Tailplume with you soon!
      </p>
      <RouterLink
        to="/"
        class="inline-block mt-8 px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-gray-200 hover:text-slate-900 transition-colors duration-200"
      >
        Back to Home
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url("@/assets/home/rainbow-blom.svg");
  background-size: cover;
}

h1,
p,
a {
  color: white;
}

p {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
