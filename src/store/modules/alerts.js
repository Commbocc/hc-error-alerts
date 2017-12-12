import _ from 'underscore'
import AlertError from '../models/alert'

export default {
  state: {
    active: []
  },
  mutations: {
    addAlert (state, error) {
      state.active.push(new AlertError(error))
    },
    prependAlert (state, error) {
      state.active.unshift(new AlertError(error))
    },
    removeAlert (state, id) {
      let alertError = _.findWhere(state.active, { id })
      let index = state.active.indexOf(alertError)
      state.active.splice(index, 1)
    },
    clearAlerts (state) {
      state.active = []
    }
  }
}
