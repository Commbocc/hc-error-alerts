import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'addAlert',
      'clearAlerts'
    ])
  },
  computed: mapState({
    activeAlerts: state => state.alerts.active
  })
}
