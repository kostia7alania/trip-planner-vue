<template>
  <v-container>
    <v-subheader
      >Countries
    </v-subheader>
    <template v-for="([flag, english, russian], i) in countries">
      <v-list two-line subheader :key="flag">
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <v-avatar size="24" class="mr-4"> </v-avatar>
            <v-list-item-title>
              <i :class="`flag__${flag}`"></i>
              {{ russian }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip
                class="mr-2"
                @click="start(i)"
                :disabled="!isStartEnabled || isAdded(flag)"
              >
                <v-icon left>mdi-airplane-takeoff</v-icon>
                Start
              </v-chip>
              <v-chip
                class="mr-2"
                @click="medium(i)"
                :disabled="!isMediumEnabled || isAdded(flag)"
              >
                <v-icon left>mdi-airplane</v-icon>
                Medium
              </v-chip>
              <v-chip
                @click="end(i)"
                :disabled="!isEndEnabled || isAdded(flag)"
              >
                <v-icon left>mdi-airplane-landing</v-icon>
                End
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Countries",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState([
      "countries",
      "selectedCountries",
      "finished",
      'isLoading'
    ]),
    searchItems() {
      return this.selectedCountries.map(([flag, english, russian])=>({title: russian, text: `[${flag}] ${russian} (${english})`}))
    },
    selectedCountriesFiltered() {
      const { search, selectedCountries } = this;
      if (!search) return selectedCountries;
      return selectedCountries.filter(
        ([flag, english, russian]) =>
          flag.match(search) || english.match(search) || russian.match(search)
      );
    },
    isStartEnabled() {
      return this.selectedCountries.length === 0 && !this.finished && !this.isLoading;
    },
    isMediumEnabled() {
      return this.selectedCountries.length && !this.finished && !this.isLoading
    },
    isEndEnabled() {
      return this.selectedCountries.length && !this.finished && !this.isLoading
    }
  },
  methods: {
    ...mapMutations(["ADD_COUNTRY", "SET_FINISH"]),
    isAdded(flag) {
      return !!this.selectedCountries.find(
        ([selectedFlag]) => selectedFlag === flag
      );
    },
    start(i) {
      this.ADD_COUNTRY(this.countries[i]);
    },
    medium(i) {
      this.ADD_COUNTRY(this.countries[i]);
    },
    end(i) {
      this.ADD_COUNTRY(this.countries[i]);
      this.SET_FINISH(true);
    }
  }
};
</script>
