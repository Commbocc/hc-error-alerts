<template>
  <div id="app">
    <div class="row">
      <div class="col-md-5">

        <!-- demo -->
        <button @click="add">Add Alert</button>
        <button @click="prepend">Prepend Alert</button>
        <button @click="clear">Clear Alerts</button>
        <button @click="log">Log in Console</button>

      </div>
      <div class="col-md-7">

        <div ref="errorAlerts" is="ErrorAlerts"></div>

      </div>
    </div>
  </div>
</template>

<script>
import ErrorAlerts from './components/ErrorAlerts'

export default {
  name: 'app',
  components: {
    ErrorAlerts
  },
  methods: {
    add () {
      this.$refs.errorAlerts.addAlert(new Error(Date.now()))
    },
    prepend () {
      this.$refs.errorAlerts.prependAlert(new Error(Date.now()))
    },
    clear () {
      this.$refs.errorAlerts.clearAlerts()
    },
    log () {
      console.log('All Errors:', this.$refs.errorAlerts.errorLog)
      console.log('Active Errors:', this.$refs.errorAlerts.activeErrors)
    }
  },
  mounted () {
    this.$refs.errorAlerts.addAlert(new Error(`A test error has occured @ ${Date.now()}`))
  }
}
</script>
