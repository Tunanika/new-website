export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    'nuxt-svgo',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxt/fonts',
  ],
  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      script: [
        {
          'src': 'https://analytics.hrcd.fr/js/script.js',
          'defer': true,
          'data-domain': 'canvas.hrcd.fr',
        },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },

  css: ['~/assets/style/main.css'],

  site: {
    url: process.env.NUXT_SITE_URL || 'https://tunaerhanoglu.com',
    identity: {
      type: 'Person',
    },
    twitter: '@',
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    watch: {
      ws: {
        showURL: false,
      },
    },
    highlight: {
      theme: 'github-dark',
    },
    navigation: {
      fields: ['image', '_id'],
    },
    markdown: {
      anchorLinks: false,
    },
    locales: ['en'],
    defaultLocale: 'en',
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      available: process.env.NUXT_PUBLIC_AVAILABLE,
      meetingLink: process.env.NUXT_PUBLIC_MEETING_LINK,
    },
    private: {
      resendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  routeRules: {
    '/': { isr: true, prerender: true },
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-31',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/', '/writing', '/works', '/about', '/contact'],
    },
  },

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: '/',
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: '~/i18n.config.ts',
  },
  image: {
    format: ['webp'],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
      projectLg: 3072,
    },
  },

  svgo: {
    autoImportPath: './assets/logo/',
  },
})
