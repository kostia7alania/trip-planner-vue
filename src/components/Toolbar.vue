<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      Trip Planner
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/kostia7alania/trip-planner-vue"
      target="_blank"
      text
    >
      <span class="mr-2">Source</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
