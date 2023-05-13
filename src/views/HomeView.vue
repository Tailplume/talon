<script setup lang="ts">
import { RouterLink } from "vue-router";
import Container from "../components/Container.vue";
import HomeIntro from "../components/home/HomeIntro.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";
import HomePricing from "../components/home/HomePricing.vue";
import HomeFooter from "../components/home/HomeFooter.vue";
</script>

<template>
  <div class="relative min-h-screen bg-slate-900 text-white">
    <img
      src="@/assets/home/rainbow-blom.svg"
      class="pointer-events-none absolute top-0 min-h-screen min-w-full object-cover"
    />
    <Container>
      <nav class="flex items-center py-7 text-xl text-white">
        <RouterLink to="/">
          <img
            src="@/assets/logo-full-inverted.svg"
            alt="tailplume logo"
            class="opacity-70"
            style="height: 3rem"
          />
        </RouterLink>
        <div class="ml-auto">
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </nav>
    </Container>
    <HomeIntro />
    <HomeFeatures />
    <HomePricing />
    <HomeFooter />
  </div>
</template>
