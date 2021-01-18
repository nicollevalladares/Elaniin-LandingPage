<template>
    <nav class="navbar navbar-expand-lg navbar-light pt-5 pt-lg-5 pt-md-30 pt-sm-5 pl-lg-6 pl-md-40 position-absolute">
        <router-link class="navbar-brand" to="/">
            <span v-bind:style="{ color: headerColor }"  class="nav-link p-0 foodies-link">Foodies</span>
        </router-link>
        <button
            class="navbar-toggler border-0 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#headerCollapse"
            aria-controls="headerCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
            <span class="sr-only">Toggle navigation</span>
        </button>
        <div class="collapse navbar-collapse" id="headerCollapse">
            <div class="navbar-nav">
                <router-link class="nav-item ml-lg-40" to="/">
                    <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Acerca de</span>
                </router-link>
                <router-link class="nav-item ml-lg-40" to="/">
                    <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Restaurantes</span>
                </router-link>
                <router-link class="nav-item ml-lg-40" to="/menu">
                    <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Menú</span>
                </router-link>
                <router-link class="nav-item ml-lg-40" to="/">
                    <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Contáctanos</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
