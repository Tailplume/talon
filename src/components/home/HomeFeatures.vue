<script setup lang="ts">
import { ref } from "vue";

import Container from "../Container.vue";
import HomeFeaturesHeading from "./HomeFeaturesHeading.vue";

const activeTab = ref(0);

function setActiveTab(tab: number) {
  activeTab.value = tab;
}

setInterval(() => {
  const newTab: number = activeTab.value >= 2 ? 0 : activeTab.value + 1;
  setActiveTab(newTab);
}, 5000);
</script>
<template>
  <section class="py-44">
    <Container>
      <h2 class="mb-8 text-5xl font-bold drop-shadow-lg lg:hidden">Features</h2>
      <div class="flex flex-wrap items-center">
        <div class="w-12/12 lg:w-8/12 2xl:w-6/12">
          <ul>
            <HomeFeaturesHeading
              title="Customizable Profile"
              :is-active="activeTab === 0"
              @click="setActiveTab(0)"
              description="Tailor your page to reflect who you are, with unique backgrounds, colors and fonts"
            />
            <HomeFeaturesHeading
              title="Social Media Integration"
              :is-active="activeTab === 1"
              @click="setActiveTab(1)"
              description="Seamlessly integrate links to all your social media profiles, making it easy for others to connect with you."
            />
            <HomeFeaturesHeading
              title="Analytics & Insights"
              :is-active="activeTab === 2"
              @click="setActiveTab(2)"
              description="Track the performance of your links and measure engagement with comprehensive analytics."
            />
          </ul>
        </div>
        <div class="w-12/12 lg:ml-auto lg:w-3/12 2xl:w-4/12">
          <img
            src="/phone-preview1.png"
            alt="Phone Preview"
            class="max-w-full"
            style="max-height: 38rem"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
