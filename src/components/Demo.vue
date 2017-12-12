<template lang="html">
  <div class="">

    <form @submit.prevent="submitAlert" class="mb-3">
      <div class="form-group">
        <input type="text" class="form-control" required placeholder="Demo Alert Text" v-model="newErrorText">
      </div>

      <button class="btn btn-sm btn-block btn-secondary" type="submit">Add Alert</button>

      <button class="btn btn-sm btn-block btn-danger" type="button" @click="clearAlerts">Clear All</button>
    </form>

    <details open class="mb-3">
      <summary>State</summary>
      <pre class="bg-dark text-light small p-2">{{ $store.state }}</pre>
    </details>

  </div>
</template>

<script>
import alertsMixin from '@/mixins/alertsMixin'

export default {
  name: 'demo',
  mixins: [alertsMixin],
  data () {
    return {
      newErrorText: ''
    }
  },
  methods: {
    submitAlert () {
      this.addAlert(new Error(this.newErrorText))
    }
  }
}
</script>
