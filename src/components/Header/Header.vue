<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="d-lg-none navbar-brand" to="/">
                        <p class="nav-link foodies-link">Foodies</p>
                    </router-link>
                    <router-link class="d-none d-lg-block navbar-brand" to="/">
                        <p class="nav-link foodies-link">Foodies</p>
                    </router-link>      
                    <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="dropdown-divider"></div>
                        <div class="navbar-nav">
                            <router-link class="nav-item" to="/">
                                <p class="header-link nav-link">Acerca De</p>
                            </router-link>
                            <router-link class="nav-item" to="/">
                                <p class="header-link nav-link">Restaurantes</p>
                            </router-link>
                            <router-link class="nav-item" to="/menu">
                                <p class="header-link nav-link">Menú</p>
                            </router-link>
                            <router-link class="nav-item" to="/">
                                <p class="header-link nav-link">Contáctanos</p>
                            </router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
