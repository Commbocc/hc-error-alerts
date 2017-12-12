<template lang="html">
  <div class="alert alert-dismissible fade show" :class="alertClass" role="alert">
    <h4 v-if="heading" class="alert-heading">
      {{ heading }}
    </h4>

    <slot>
      {{ alert.message }}
    </slot>

    <button v-if="dismissible" @click="removeAlert(alert.id)" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'alert',
  props: {
    alert: {
      required: true
    },
    alertClass: {
      type: String,
      default: 'alert-warning'
    },
    heading: String,
    dismissible: {
      type: Boolean,
      default: true
    }
  },
  methods: mapMutations([
    'removeAlert'
  ])
}
</script>
