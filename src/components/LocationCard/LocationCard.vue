<template>
  <div class="container-fluid mx-sm-0">
    <div
      @click="selectedCard(location)"
      v-for="location of locations"
      :key="location.id"
    >
      <div
        v-if="selected == location.id"
        class="selected-location card location-card w-sm-100"
      >
        <div class="card-body p-0">
          <p class="location-name">{{ location.name }}</p>
          <!-- TODO: Create time format -->
          <p class="location-description">
            Abierto de {{ location.opening_time }} - {{ location.closing_time }}
          </p>
          <p class="location-description">{{ location.address }}</p>
        </div>
      </div>
      <div v-else class="card location-card w-sm-100">
        <div class="card-body p-0">
          <p class="location-name">{{ location.name }}</p>
          <p class="location-description">
            Abierto de {{ location.opening_time }} - {{ location.closing_time }}
          </p>
          <p class="location-description">{{ location.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
