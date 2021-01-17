<template>
    <section class="pt-5">
        <!-- TODO: Add yellow shape -->
        <div class="container-fluid adds-container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-md-6 col-lg-6 order-md-first">
                    <div class="text" data-scroll="out" data-splitting="">
                        <p class="m-0">Un nuevo sabor esta en</p>
                        <span class="underline-text">la ciudad</span>
                    </div>
                    <div v-if="homeData.description">
                        <p class="description-text">{{homeData.description}}</p>
                    </div>
                    <div v-if="homeData.link" class="mt-3">
                        <!-- TODO: Fix the arrow -->
                        <a class="link-text" href="/">{{homeData.link}} <ArrowRight /> </a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-6 position-relative order-sm-first" align=right>
                    <img class="burger" src="@/assets/AddsAssets/Hamburger.png">
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>