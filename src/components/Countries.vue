<template>
  <div class="countries">
    Countries
    <ul>
      <li class="country" v-for="(country, i) in countries" :key="country.name">
        <input
          class="country__check"
          @click="changeHandler(i)"
          :checked="currentCountry === country.name"
          :id="country.name"
          type="checkbox"
        />
        <label class="country__label" :for="country.name">{{
          country.name
        }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Countries",
  computed: {
    ...mapState([
      "countries",
      "currentCountry"
    ])
  },
  methods: {
    ...mapMutations([
      'SET_CURRENT_COUNTRY'
    ]),
    changeHandler(i) {
      if (!event.target.checked) {
        return event.preventDefault()
      }
      this.SET_CURRENT_COUNTRY(this.countries[i].name)
    }
  }
};
</script>

<style lang="scss">
.country {
  list-style: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  &__check {
    display: none;
  }
  &__check:checked ~ label {
    color: red;
  }
  &__label {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
