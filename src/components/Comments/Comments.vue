<template>
  <section id="contact-us" class="comments-section py-5">
    <div class="container-fluid">
      <div class="comments-header m-auto w-lg-50 w-md-50">
        Cuentanos tu experiencia
      </div>
      <div class="comments-description m-auto w-50 py-4">
        Don't miss out on our great offers & Receive deals from all our top
        restaurants via e-mail.
      </div>
      <div class="row">
        <div class="col-9 mx-auto">
          <form class="text-right">
            <div class="row">
              <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="form-row">
                  <div class="form-group col-12 text-left">
                    <input
                      type="text"
                      class="form-control comments-control"
                      id="name"
                      placeholder="John Doe"
                      v-model="name"
                    />
                    <label for="name">Nombre y Apellido</label>
                  </div>
                  <div class="form-group col-12 text-left">
                    <input
                      type="email"
                      class="form-control comments-control"
                      id="email"
                      placeholder="j.doe@correo.com"
                      v-model="email"
                    />
                    <label for="email">Correo electrónico</label>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-12 col-sm-12">
                <div class="form-row">
                  <div class="form-group col-12 text-left">
                    <textarea
                      class="form-control comments-control"
                      id="message"
                      rows="4"
                      maxlength="256"
                      resi
                      v-model="message"
                    ></textarea>
                    <label for="message">Mensaje</label>
                  </div>
                </div>
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
      </div>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
