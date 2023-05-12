<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  isActive: boolean;
}>();
</script>
<template>
  <li class="cursor-pointer mb-6">
    <h2
      class="text-3xl md:text-6xl font-bold transition duration-500 ease-in-out mb-3"
      :class="{ 'opacity-40': !isActive }"
    >
      {{ title }}
    </h2>
    <div
      class="description md:text-xl mb-4"
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
