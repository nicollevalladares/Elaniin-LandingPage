<template>
   <div class="container-fluid-px-2 container-fluid">
        <div class="row">
            <div v-for="item of menu" :key="item.id" class="col-xs-12 col-md-6 col-lg-3">
                <MenuItem v-bind:item="item"/>
            </div>
        </div>
   </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>