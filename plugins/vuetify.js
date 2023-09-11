import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'
import * as components from 'vuetify/components'
import { md3 } from 'vuetify/blueprints'
// import * as directives from 'vuetify/directives'

const light = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#E5E5E5',
      primary: '#43858B',
      'primary-darken-1': '#045C64',
      secondary: '#77577E',
      'secondary-darken-1': '#491F53',
      error: '#B00020',
      info: '#79B1B7',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }

  const dark = {
    dark: true,
    colors: {
      background: '#242424',
      surface: '#404040',
      primary: '#43858B',
      'primary-darken-1': '#045C64',
      secondary: '#77577E',
      'secondary-darken-1': '#491F53',
      error: '#B00020',
      info: '#79B1B7',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        blueprint: md3,
        icons: {
            defaultSet: 'md',
            aliases,
            sets: {
                md
            }
        },
        components,
        theme: {
            defaultTheme: 'light',
            themes: {
                light,
                dark
            },
        }
      })

    nuxtApp.vueApp.use(vuetify)
})
