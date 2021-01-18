<template>
  <section v-bind:style="{ background: data.backgroundColor }" class="py-cover">
    <!-- TODO: Add yellow shape -->
    <div class="container-fluid px-4 px-lg-6 px-md-40">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 col-lg-6 order-last order-md-first">
          <div class="text" data-scroll="out" data-splitting="">
            <p v-bind:style="{ color: data.titleColor }" class="mx-0 my-0">
              {{ data.firstText }}
            </p>
            <span class="underline-text">{{ data.underlineText }}</span>
          </div>
          <div v-if="data.description && data.link">
            <p class="description-text">{{ data.description }}</p>
            <!-- TODO: Fix the arrow -->
            <a class="link-text" href="/">{{ data.link }} <ArrowRight /> </a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 order-first order-md-last">
          <img class="w-100" :src="data.url" />
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
