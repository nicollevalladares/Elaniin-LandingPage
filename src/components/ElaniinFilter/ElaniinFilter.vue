<template>
<!-- TODO: Add functionality to filters -->
  <div class="container-fluid-px-2 container-fluid position-absolute w-100 pt-2">
    <form class="row">
      <!-- TODO: Add search icon -->
      <input
        class="form-control col-md-4 filter-menu"
        type="search"
        placeholder="Busca tu platillo favorito..."
        aria-label="Search"
      />
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler border-0 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#filtersCollapse"
            aria-controls="filtersCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              class="icon-bar top-bar"
            ></span>
            <span
              class="icon-bar middle-bar"
            ></span>
            <span
              class="icon-bar bottom-bar"
            ></span>
            <span class="sr-only">Toggle navigation</span>
          </button>
          <div class="collapse navbar-collapse" id="filtersCollapse">
            <div class="dropdown-divider"></div>
            <div class="navbar-nav">
              <router-link class="nav-item" to="/">
                <span class="header-link nav-link">Todas</span>
              </router-link>
            </div>
            <div
              v-for="category of categories"
              :key="category.id"
              class="navbar-nav"
            >
              <router-link class="nav-item" to="/">
                <span class="header-link nav-link">{{ category.name }}</span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </form>
  </div>
</template>

<script src="./index.js"></script>
<style src="./styles.css"></style>
