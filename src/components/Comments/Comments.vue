<template>
  <section id="contact-us" class="comments-section pt-5">
    <div class="container-fluid">
      <div class="comments-header m-auto">Cuentanos tu experiencia</div>
      <div class="comments-description m-auto pt-4">
        Don't miss out on our great offers & Receive deals from all our top
        restaurants via e-mail.
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4">
          <form>
            <div class="form-row">
              <div class="form-group col-lg-6 col-md-12">
                <label for="name">Nombre y Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="John Doe"
                  v-model="name"
                />
              </div>
              <div class="form-group col-lg-6 col-md-12">
                <label for="message">Mensaje</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  v-model="message"
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="form-group col-lg-6 col-md-12">
                <label for="email">Correo electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="j.doe@correo.com"
                  v-model="email"
                />
              </div>
            </div>
            <button
              @click="sendComments"
              type="button"
              class="btn btn-comments"
            >
              Enviar comentarios
            </button>
          </form>
        </div>
        <div class="col-md-12 col-lg-8" align="right"></div>
      </div>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
