// Vue App
import { createApp } from "vue";
import App from "./App.vue";
import '@mdi/font/css/materialdesignicons.css'; // Add this line to import MDI CSS

// Vue Router
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#00C853',     // Bright green
          secondary: '#1B5E20',   // Dark green
          accent: '#00E676',      // Lighter green
          error: '#FF5252',       // Default red for error
          info: '#00ACC1',        // Cyan for info
          success: '#4CAF50',     // Default green for success
          warning: '#FB8C00',     // Orange for warning
        },
      },
    },
  },
});

createApp(App).use(vuetify).use(router).mount("#app");
