<script setup lang="ts">
defineProps<{
  tierName: string;
  features: string[];
}>();
</script>
<template>
  <div class="glassmorphism rounded-lg px-6 py-8 shadow-lg">
    <h3 class="mb-4 text-center text-3xl font-semibold">{{ tierName }}</h3>
    <div class="mb-6 flex items-center justify-center">
      <!-- <span class="text-5xl font-bold">$0</span>
      <span class="ml-2 text-lg font-light">/ month</span>* -->
      <span class="text-5xl font-bold">$0</span>
      <span class="text-lg">&nbsp;TBC</span>
    </div>
    <ul class="mb-8">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="mb-2 text-center text-lg"
      >
        {{ feature }}
      </li>
    </ul>
    <button
      class="group relative block w-full overflow-hidden rounded-full bg-gradient-to-r from-white/50 to-white/20 px-6 py-3 text-xl font-medium text-white outline outline-2 outline-transparent transition-all duration-500 hover:scale-x-105 hover:shadow-sm hover:outline-orange-600"
    >
      <div
        class="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-orange-400 to-purple-600 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      ></div>
      <span class="relative drop-shadow-lg">Get Started</span>
    </button>
  </div>
</template>
<style scoped>
.glassmorphism {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}
</style>
