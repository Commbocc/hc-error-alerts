<template>
  <div id="HcErrorAlerts">
    <div class="row">
      <div class="col-md-5">

        <!-- demo -->
        <div is="Demo"></div>

      </div>
      <div class="col-md-7">

        <!-- alerts -->
        <template v-for="alert in activeAlerts">
          <div is="Alert" :alert="alert"></div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import alertsMixin from '@/mixins/alertsMixin'

import Alert from '@/components/Alert'
import Demo from '@/components/Demo'

export default {
  name: 'app',
  mixins: [alertsMixin],
  components: {
    Alert,
    Demo
  }
}
</script>
