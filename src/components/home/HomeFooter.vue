<script setup lang="ts">
import Container from "../Container.vue";
</script>
<template>
  <Container>
    <div class="py-10">
      <div class="flex flex-wrap">
        <div v-for="i in 3" :key="i" class="w-full md:w-3/12 lg:w-2/12">
          <ul>
            <li
              v-for="i in 2"
              :key="i"
              class="mb-4 text-center md:mb-2 md:text-left"
            >
              <a
                href="#"
                class="opacity-70 transition-opacity duration-300 hover:opacity-100"
                >A Link {{ i }}</a
              >
            </li>
          </ul>
        </div>
        <div
          class="ml-auto mt-1 h-full w-full text-center md:mt-auto md:w-auto md:text-right"
        >
          <img
            src="@/assets/logo-full-inverted.svg"
            alt="tailplume logo"
            class="inline-block h-8 opacity-50"
          />
          <span class="block opacity-40"
            >&copy; {{ new Date().getFullYear() }}</span
          >
        </div>
      </div>
    </div>
  </Container>
</template>
