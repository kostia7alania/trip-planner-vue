<template>
  <v-container>
    <v-subheader>Places to visit</v-subheader>
    <div class="text-center">
      <v-expand-transition>
        <v-btn
          :disabled="!isEnabledActionButtons"
          @click="send"
          color="primary"
        >
          <v-progress-circular v-if="isLoading" indeterminate color="amber" />
          <v-icon v-else left>mdi-cloud-upload-outline</v-icon>
          Send
        </v-btn>
      </v-expand-transition>
      <v-expand-transition>
        <v-btn :disabled="!isEnabledActionButtons" @click="clear" text>
          <v-icon left>mdi-filter-variant-remove</v-icon>
          Clear
        </v-btn>
      </v-expand-transition>
    </div>
    <v-timeline v-if="selectedCountries.length">
      <transition-group name="bounce" tag="div">
        <v-timeline-item
          v-for="([flag, english, russian], i) in selectedCountries"
          :key="flag"
          small
        >
          <template v-slot:icon>
            <v-avatar>
              <span :class="'flag__' + flag"></span>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>{{ english }}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              <v-icon left>mdi-map-marker</v-icon>
              #{{ i + 1 }}
              <v-hover v-slot:default="{}">
                <v-icon :disabled="!isEnabledActionButtons" @click="remove(i)">
                  mdi-close-thick
                </v-icon>
              </v-hover>
            </v-card-title>
            <v-card-text>
              {{ russian }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </transition-group>
    </v-timeline>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Places",
  computed: {
    ...mapState(["selectedCountries", "isLoading", 'finished']),
    isEnabledActionButtons() {
      return !!this.selectedCountries.length && !this.isLoading;
    }
  },
  methods: {
    ...mapMutations([
      "REMOVE_COUNTRY",
      "CLEAR_SELECTED_COUNTRIES",
      "SET_FINISH",
      "SET_SNACKBAR"
    ]),
    ...mapActions(["sendHandler"]),
    async send() {
      try {
        await this.sendHandler();
        this.SET_SNACKBAR( "Success!");
      } catch (e) {
        this.SET_SNACKBAR((e && e.message) || "Error.!.");
      }
    },
    remove(i) {
      this.REMOVE_COUNTRY(i);
      if(!this.selectedCountries.length && this.finished) {
        this.SET_FINISH(false)
      }
    },
    clear() {
      this.CLEAR_SELECTED_COUNTRIES();
      this.SET_FINISH(false);
    }
  }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
