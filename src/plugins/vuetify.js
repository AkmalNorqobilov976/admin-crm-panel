// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            ["app-bar-color"]: '#F8F8F8',
            ["gray-100"]: '#EAECF2',
            ["red-500"]: '#E92020',
            ["yellow-550"]: '#FFCC33',
            ["gray-f5"]: "#F5F5F5"
          }
        }
      }
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
