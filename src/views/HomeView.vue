<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="min-h-screen bg-slate-900 text-white relative">
    <img
      src="@/assets/home/rainbow-blom.svg"
      class="absolute w-screen pointer-events-none min-h-screen object-cover"
    />
    <nav class="text-white p-7">
      <div class="container mx-auto flex text-xl px-5 sm:px-20">
        <img
          src="@/assets/logo-full-inverted.svg"
          alt="tailplume logo"
          class="opacity-70"
          style="height: 3rem"
        />
        <div class="ml-auto">
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </div>
    </nav>
    <div
      class="container mx-auto px-5 sm:px-10 md:px-15 xl:px-20 relative py-44"
    >
      <div class="w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12 mb-5">
        <img
          src="@/assets/home/be-yourself.svg"
          alt="Be yourself"
          class="mb-5"
        />
        <p class="text-2xl">
          Everything you make, share and sell online,<br />
          all in one place
        </p>
      </div>
      <form>
        <div
          name="link"
          class="px-6 py-4 mr-4 bg-white/[.16] rounded-r-2xl border-black/[0.4] border-2 inline text-xl font-light"
          style="border-top-left-radius: 2rem; border-bottom-left-radius: 2rem"
        >
          tailplu.me/
          <input type="text" class="bg-transparent w-44" />
        </div>
        <button
          class="bg-white/[.16] px-6 py-4 rounded-full hover:bg-white/[0.25] font-medium duration-200 text-xl"
        >
          Claim your tailplume
        </button>
      </form>
    </div>
  </section>
</template>
