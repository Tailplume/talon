<script setup lang="ts">
import { RouterLink } from "vue-router";
import Container from "../components/Container.vue";
import HomeIntro from "../components/home/HomeIntro.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";
import HomePricing from "../components/home/HomePricing.vue";
import HomeFooter from "../components/home/HomeFooter.vue";
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    { name: "title", content: "Tailplume" },
    {
      name: "description",
      content:
        "Everything you make, share and sell online, all in one place. The link in bio platform that puts you first.",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:url",
      content: "https://tailplume.io",
    },
    {
      name: "og:title",
      content: "Tailplume",
    },
    {
      name: "og:description",
      content:
        "Everything you make, share and sell online, all in one place. The link in bio platform that puts you first.",
    },
    {
      name: "og:image",
      content: "https://tailplume.io/meta-icon.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:url",
      content: "https://tailplume.io",
    },
    {
      name: "twitter:title",
      content: "Tailplume",
    },
    {
      name: "twitter:description",
      content:
        "Everything you make, share and sell online, all in one place. The link in bio platform that puts you first.",
    },
    {
      name: "twitter:image",
      content: "https://tailplume.io/meta-icon.jpg",
    },
  ],
});
</script>

<template>
  <div class="relative min-h-screen bg-slate-900 text-white">
    <img
      src="@/assets/home/rainbow-blom.svg"
      class="pointer-events-none absolute top-0 min-h-screen min-w-full object-cover"
    />
    <div class="relative">
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
    </div>
    <HomePricing />
    <HomeFooter />
  </div>
</template>
