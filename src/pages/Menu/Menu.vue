<template>
  <div>
    <Adds v-bind:data="data" />
    <div class="container-fluid-px-2 container-fluid">
      <ElaniinFilter />
      <div class="row">
        <div
          v-for="item of menu"
          :key="item.id"
          class="col-xs-12 col-md-6 col-lg-3"
        >
          <MenuItem v-bind:item="item" />
        </div>
        <!-- TODO: Pagination -->
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
