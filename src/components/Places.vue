<template>
  <div class="places">
   Places
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Places',
  computed: {
    ...mapState()
  }
}
</script>
