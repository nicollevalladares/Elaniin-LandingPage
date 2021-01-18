<template>
  <div class="card border-0 m-2">
    <img class="card-img-top" :src="item.image" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">{{ item.description }}</p>
    </div>
    <div class="card-body d-flex justify-content-between w-100">
      <span class="text-sm card-category">{{ item.category }}</span>
      <a class="btn card-price">$ {{ item.price }}</a>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css" scoped></style>
