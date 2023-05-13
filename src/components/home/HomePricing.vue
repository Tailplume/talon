<script setup lang="ts">
import Container from "../Container.vue";
import HomePricingTierCard from "./HomePricingTierCard.vue";
</script>
<template>
  <section class="relative">
    <!-- absolute inset-0 bg-gradient-to-tr from-transparent to-purple-900 transform -translate-x-full -->
    <div
      class="absolute inset-0 bg-gradient-to-tr from-transparent to-purple-900"
    ></div>
    <Container class="relative py-48">
      <h2
        class="mb-6 text-center text-3xl font-bold opacity-80 drop-shadow-lg md:text-6xl"
      >
        Pricing
      </h2>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <HomePricingTierCard />
        <HomePricingTierCard />
        <HomePricingTierCard />
      </div>
      <p class="mt-6 text-center opacity-80 drop-shadow-lg">
        * Pricing is not final and is subject to change
      </p>
    </Container>
  </section>
</template>
