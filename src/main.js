import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // Import the router      
import '@mdi/font/css/materialdesignicons.css'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })

createApp(App).use(router).use(vuetify).mount('#app')
