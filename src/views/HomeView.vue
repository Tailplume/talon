<script setup lang="ts">
import { RouterLink } from "vue-router";
import Container from "../components/Container.vue";
</script>

<template>
  <section class="min-h-screen bg-slate-900 text-white rainbow-bloom">
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
    <div class="py-44">
      <Container>
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
            style="
              border-top-left-radius: 2rem;
              border-bottom-left-radius: 2rem;
            "
        >
          <span>tailplu.me/</span>
          <input type="text" class="bg-transparent w-44 ml-2" disabled />
        </div>

        <button
          class="bg-white/[.16] px-6 py-4 rounded-full hover:bg-white/[0.25] font-medium duration-200 inline-block text-xl disabled:opacity-50 disabled:pointer-events-none"
          disabled
        >
          Claim your tailplume
        </button>
      </form>
      <p class="mt-2"><i>We are not currently accepting new signups.</i></p>
      </Container>
    </div>
    </div>
  </section>
</template>

<style>
.rainbow-bloom {
  background-image: url("@/assets/home/rainbow-blom.svg");
  background-size: cover;
}
</style>
