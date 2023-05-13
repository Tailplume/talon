<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex min-h-screen items-center justify-center bg-slate-900">
    <div class="text-center text-white">
      <h1 class="mb-5 text-3xl">Login Coming Soon</h1>
      <p class="mt-8 text-lg">
        We're sorry, but the app isn't quite ready yet. We're looking forward to
        sharing Tailplume with you soon!
      </p>
      <RouterLink
        to="/"
        class="mt-8 inline-block rounded-lg border border-white px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-200 hover:text-slate-900"
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
