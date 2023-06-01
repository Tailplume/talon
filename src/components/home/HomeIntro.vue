<script setup lang="ts">
import Container from "../Container.vue";
</script>
<template>
  <section class="py-44">
    <Container>
      <img
        src="@/assets/home/be-yourself.svg"
        alt="Be yourself"
        class="mb-3 w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12"
      />
      <p class="mb-5 text-lg md:text-2xl">
        Everything you make, share and sell online,<br />
        all in one place
      </p>
      <form>
        <div
          name="link"
          class="mb-2 mr-4 inline-flex items-center rounded-r-2xl border-2 border-black/[0.4] bg-white/[.16] px-6 py-4 text-xl font-light opacity-60"
          style="border-top-left-radius: 2rem; border-bottom-left-radius: 2rem"
        >
          <span>tailplu.me/</span>
          <input type="text" class="ml-2 w-44 bg-transparent" disabled />
        </div>

        <button
          class="inline-block rounded-full bg-white/[.16] px-6 py-4 text-xl font-medium duration-200 hover:bg-white/[0.25] disabled:pointer-events-none disabled:opacity-50"
          disabled
        >
          Claim your tailplume
        </button>
      </form>
      <p class="mt-2"><i>We are not currently accepting new signups.</i></p>
      <p class="mt-1">
        <i
          >However, you can
          <a
            href="https://forms.gle/49RXrBSUB2ktJ1QSA"
            class="underline"
            target="_blank"
            >register your interest towards early access here.</a
          ></i
        >
      </p>
    </Container>
  </section>
</template>
