<template>
    <section class="pt-5">
       <div class="container-fluid">
            <div class="row">
            <div class="locations-section col-xs-12 col-md-12 col-lg-4 order-md-first">
                <p class="location-text">Estamos para ti</p>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <!-- TODO: Add icons -->
                        <a v-on:click="onTabChange('takeaway')" class="nav-item nav-link active" id="nav-takeaway-tab" data-toggle="tab" href="#nav-takeaway" role="tab" aria-controls="nav-takeaway" aria-selected="true">Para llevar</a>
                        <a v-on:click="onTabChange('delivery')" class="nav-item nav-link" id="nav-delivery-tab" data-toggle="tab" href="#nav-delivery" role="tab" aria-controls="nav-delivery" aria-selected="false">Domicilio</a>
                    </div>
                </nav>
                <!-- TODO: Add search icon -->
                <input class="form-control" type="search" placeholder="Buscar nombre o dirección" aria-label="Search">
                <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-takeaway" role="tabpanel" aria-labelledby="nav-takeaway-tab">
                    <LocationCard v-bind:locations="locations" />
                </div>
                <div class="tab-pane fade" id="nav-delivery" role="tabpanel" aria-labelledby="nav-delivery-tab">
                    <LocationCard v-bind:locations="locations"/>
                </div>
                </div>
            </div>
            <div class="locations-section col-md-12 col-lg-8 position-relative d-lg-block d-md-block d-sm-none" align=right>
                <iframe 
                    width="100%" 
                    height="609" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    v-bind:src="`https://maps.google.com/maps?q=${selectedLocation.latitude},${selectedLocation.longitude}&hl=es&z=14&amp;output=embed`"
                >
                </iframe>
            </div>
        </div>
       </div>
    </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
