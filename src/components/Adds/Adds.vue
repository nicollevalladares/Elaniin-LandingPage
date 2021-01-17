<template>
    <section class="pt-5">
        <div class="container-fluid adds-container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-md-6 col-lg-6">
                    <div class="text" data-scroll="out" data-splitting="">
                        <p>Un nuevo sabor esta en</p>
                        <span class="underline-text">la ciudad</span>
                        <div v-if="homeData.description">
                            <p class="description-text">{{homeData.description}}</p>
                        </div>
                        <div v-if="homeData.link">
                            <!-- TODO: Fix the arrow -->
                            <a class="link-text" href="/">{{homeData.link}} <ArrowRight /> </a>
                        </div>
                    </div>
                </div>
                <!-- TODO: Add the yellow shape into the adds section. -->
                <!-- <div class="shapes-add">
                    <img class="position-absolute img-fluid mw-150" src="@/assets/Subtract.png">
                </div> -->
                <div class="col-xs-12 col-md-6 col-lg-6">
                    <img class="" src="@/assets/hero_hamburger.png">
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>