<template>
  <v-app>
    <Toolbar />
    <v-content>
      <v-row class="text-center">
        <v-col cols="6">
          <Places />
        </v-col>
        <v-col cols="6">
          <Countries />
        </v-col>
      </v-row>
    </v-content>
    <Snackbar />
  </v-app>
</template>

<script>
import "@/assets/flags.scss";
import { mapMutations } from 'vuex';

export default {
  name: "App",
  components: {
    Toolbar: () => import("@/components/Toolbar"),
    Countries: () => import("@/components/Countries"),
    Places: () => import("@/components/Places"),
    Snackbar: () => import("@/components/Snackbar")
  },
  created(){
    this.SET_LOADING(false)
  },
  methods: {
    ...mapMutations([
      'SET_LOADING'
    ])
  }
};
</script>
