<template>
  <v-snackbar v-model="text">
    {{ text }}
    <v-btn color="pink" text @click="text = false">
      <v-icon>mdi-close-thick</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: "Snackbar",
  computed: {
    ...mapState([
      'snackbar'
    ]),
    data() {
      return { 
      }
    },
    text: {
      get() {
        return this.snackbar
      },
      set(e){
        if(!e) this.SET_SNACKBAR(false)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_SNACKBAR'])
  }
};
</script>
