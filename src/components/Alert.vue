<template lang="html">
  <div class="alert alert-dismissible fade show" :class="alert.alertClass" role="alert">

    {{ alert.message }}

    <button v-if="dismissible" @click="dismiss" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

  </div>
</template>

<script>
export default {
  name: 'alert',
  props: {
    alert: {
      required: true
    },
    dismissible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dismiss () {
      this.$emit('dismiss', this.alert)
    }
  }
}
</script>
