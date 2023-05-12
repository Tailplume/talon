<script setup lang="ts">
import { RouterLink } from "vue-router";
import Container from "../components/Container.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";
import HomeIntro from "../components/home/HomeIntro.vue";
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white rainbow-bloom">
    <Container>
      <nav class="text-white text-xl flex items-center py-7">
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
  </div>
</template>

<style>
.rainbow-bloom {
  background-image: url("@/assets/home/rainbow-blom.svg");
  background-size: cover;
}
</style>
