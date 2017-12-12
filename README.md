# Hillsborough County Error Alerts

> A Vue.js project


* [Vue](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/en/)

## Basic Use

```bash
npm install --save https://github.com/Commbocc/hc-error-alerts
```

```js
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

import alerts from 'hc-error-alerts/src/store/modules/alerts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alerts
  }
})
```

```js
// mixins/alertsMixin.js
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
```

```vue
<!-- App.vue -->
<template>
  <div>
    <!-- alerts -->
    <template v-for="alert in activeAlerts">
      <div is="Alert" :alert="alert"></div>
    </template>
  </div>
</template>

<script>
import alertsMixin from './mixins/alertsMixin'
import Alert from 'hc-error-alerts/src/components/Alert'

export default {
  components: {
    Alert
  },
  mixins: [alertsMixin],
  methods: {
    handleError () {
      this.addAlert(new Error('The Error Message'))
    }
  }
}
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
