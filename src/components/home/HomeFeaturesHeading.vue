<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  isActive: boolean;
}>();
</script>
<template>
  <li class="mb-6 cursor-pointer">
    <h2
      class="mb-3 text-3xl font-bold transition duration-500 ease-in-out md:text-6xl"
      :class="{ 'opacity-40': !isActive }"
    >
      {{ title }}
    </h2>
    <div
      class="description mb-4 md:text-xl"
      :class="{
        active: isActive,
      }"
    >
      {{ description }}
    </div>
  </li>
</template>
<style scoped>
.description {
  max-height: 0;
  transition-duration: 500ms;
  overflow-y: hidden;
}
.description.active {
  max-height: 4rem;
}
</style>
