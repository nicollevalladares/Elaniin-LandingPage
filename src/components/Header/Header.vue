<template>
  <nav
    class="navbar navbar-expand-lg navbar-light pt-5 pt-lg-5 pt-md-30 pt-sm-5 pl-lg-6 pl-md-40 position-absolute w-100"
  >
    <router-link class="navbar-brand" to="/">
      <span
        v-bind:style="{ color: headerColor }"
        class="nav-link p-0 foodies-link"
        >Foodies</span
      >
    </router-link>
    <button
      class="navbar-toggler border-0 collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#headerCollapse"
      aria-controls="headerCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span
        class="icon-bar top-bar"
        v-bind:style="{ background: headerColor }"
      ></span>
      <span
        class="icon-bar middle-bar"
        v-bind:style="{ background: headerColor }"
      ></span>
      <span
        class="icon-bar bottom-bar"
        v-bind:style="{ background: headerColor }"
      ></span>
      <span class="sr-only">Toggle navigation</span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="headerCollapse"
      v-bind:style="{ background: headerBackground }"
    >
      <div class="navbar-nav">
        <a class="nav-item ml-lg-40" href="#about">
          <span
            v-bind:style="{ color: headerColor }"
            class="header-link nav-link"
            >Acerca de</span
          >
        </a>
        <a class="nav-item ml-lg-40" href="#locations">
          <span
            v-bind:style="{ color: headerColor }"
            class="header-link nav-link"
            >Restaurantes</span
          >
        </a>
        <a class="nav-item ml-lg-40" href="/menu">
          <span
            v-bind:style="{ color: headerColor }"
            class="header-link nav-link"
            >Menú</span
          >
        </a>
        <a class="nav-item ml-lg-40" href="#contact-us">
          <span
            v-bind:style="{ color: headerColor }"
            class="header-link nav-link"
            >Contáctanos</span
          >
        </a>
      </div>
    </div>
  </nav>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
