<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="min-h-screen bg-slate-900 text-white rainbow-bloom">
    <nav class="text-white p-7">
      <div class="container mx-auto flex text-xl px-5 sm:px-20">
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
      </div>
    </nav>
    <div
      class="container mx-auto px-5 sm:px-10 md:px-15 xl:px-20 relative py-44"
    >
      <img
        src="@/assets/home/be-yourself.svg"
        alt="Be yourself"
        class="w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12 mb-3"
      />
      <p class="text-lg md:text-2xl mb-5">
        Everything you make, share and sell online,<br />
        all in one place
      </p>
      <form>
        <div
          name="link"
          class="px-6 py-4 mr-4 mb-2 bg-white/[.16] rounded-r-2xl border-black/[0.4] border-2 inline-flex items-center text-xl font-light opacity-60"
          style="border-top-left-radius: 2rem; border-bottom-left-radius: 2rem"
        >
          <span>tailplu.me/</span>
          <input type="text" class="bg-transparent w-44 ml-2" disabled />
        </div>

        <button
          class="bg-white/[.16] px-6 py-4 rounded-full hover:bg-white/[0.25] font-medium duration-200 inline-block text-xl disabled:opacity-50 disabled:pointer-events-none relative"
          disabled
        >
          Claim your tailplume
        </button>
      </form>
      <p class="mt-2">We are not currently accepting new signups.</p>
    </div>
  </section>
</template>

<style>
.rainbow-bloom {
  background-image: url("@/assets/home/rainbow-blom.svg");
  background-size: cover;
}
</style>
