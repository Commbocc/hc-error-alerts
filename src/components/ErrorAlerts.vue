<template lang="html">
  <div class="">
    <div v-for="alert in activeErrors" is="AlertComp" :alert="alert" @dismiss="removeAlert(alert)"></div>
  </div>
</template>

<script>
import AlertComp from './Alert'
import Alert from '../models/Alert'

export default {
  components: {
    AlertComp
  },
  data () {
    return {
      errorLog: []
    }
  },
  computed: {
    activeErrors () {
      return this.errorLog.filter(alert => alert.active)
    }
  },
  methods: {
    addAlert (error, alertClass) {
      this.errorLog.push(new Alert(error, alertClass))
    },
    prependAlert (error, alertClass) {
      this.errorLog.unshift(new Alert(error, alertClass))
    },
    removeAlert (alert) {
      this.errorLog.find(a => a === alert).active = false
    },
    hideAlerts () {
      this.errorLog.map(e => {
        e.active = false
        return e
      })
    },
    clearAlerts () {
      this.errorLog = []
    }
  }
}
</script>
