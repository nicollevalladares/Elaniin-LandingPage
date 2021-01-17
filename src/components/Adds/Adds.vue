<template>
    <section v-bind:style="{ background: data.backgroundColor }" class="padding-adds">
        <!-- TODO: Add yellow shape -->
        <div class="container-fluid adds-container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-md-6 col-lg-6 order-md-first">
                    <div class="text" data-scroll="out" data-splitting="">
                        <p v-bind:style="{ color: data.titleColor }"  class="m-0">{{data.firstText}}</p>
                        <span class="underline-text">{{data.underlineText}}</span>
                    </div>
                    <div v-if="data.description && data.link">
                        <p class="description-text">{{data.description}}</p>
                        <!-- TODO: Fix the arrow -->
                        <a class="link-text" href="/">{{data.link}} <ArrowRight /> </a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-6 position-relative order-sm-first" align=right>
                    <img class="burger" :src="data.url">
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>