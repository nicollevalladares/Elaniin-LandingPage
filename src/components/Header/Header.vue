<template>
    <div>
        <nav class="navbar p-0 header navbar-expand-lg navbar-light">
            <router-link class="d-lg-none navbar-brand" to="/">
                <span v-bind:style="{ color: headerColor }"  class="nav-link p-0 foodies-link">Foodies</span>
            </router-link>
            <router-link class="d-none d-lg-block navbar-brand" to="/">
                <span v-bind:style="{ color: headerColor }"  class="nav-link p-0 foodies-link">Foodies</span>
            </router-link>      
            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#headerCollapse" aria-controls="headerCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span v-bind:style="{ color: headerColor }" class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="headerCollapse">
                <div class="dropdown-divider"></div>
                <div class="navbar-nav">
                    <router-link class="nav-item" to="/">
                        <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Acerca De</span>
                    </router-link>
                    <router-link class="nav-item" to="/">
                        <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Restaurantes</span>
                    </router-link>
                    <router-link class="nav-item" to="/menu">
                        <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Menú</span>
                    </router-link>
                    <router-link class="nav-item" to="/">
                        <span v-bind:style="{ color: headerColor }"  class="header-link nav-link">Contáctanos</span>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
