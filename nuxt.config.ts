export default defineNuxtConfig({
  devtools: { enabled: !process.env.NUXT_PUBLIC_IS_PRODUCTION },

  app: {
    baseURL: "/landing-page-v1/",
    buildAssetsDir: "_nuxt/",
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      apiKey: process.env.API_KEY,
      frontendUrl: process.env.FRONTEND_URL,
      isProduction: process.env.NUXT_PUBLIC_IS_PRODUCTION,
    },
  },

  nitro: {
    routeRules: {
      "/api/v1/**": { proxy: process.env.API_URL + "/**" },
    },
    output: {
      publicDir: "dist",
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1",
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  tailwindcss: {
    cssPath: "@/assets/scss/global.scss",
    configPath: "tailwind.config.ts",
    viewer: false,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
  ],

  robots: {
    configPath: "robots.config.ts",
  },

  i18n: {
    defaultLocale: "ja",
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English (US)",
        file: "en-US.js",
      },
      {
        code: "vi",
        iso: "vi-VN",
        name: "Tiếng Việt",
        file: "vi-VN.js",
      },
      {
        code: "ja",
        iso: "ja-JP",
        name: "日本語",
        file: "ja-JP.js",
      },
    ],
    customRoutes: "config",
    pages: {
      home: {
        vi: "/",
        en: "/",
        ja: "/",
      },
      about: {
        vi: "/ve-chung-toi",
        en: "/about-us",
        ja: "/fermyとは",
      },
    },
    detectBrowserLanguage: false,
    vueI18n: "./i18n.options.ts",
  },

  hooks: {
    "vite:extendConfig": (config, { isClient, isServer }) => {
      if (isClient) {
        config.resolve.alias.vue = "vue/dist/vue.esm-bundler";
      }
    },
  },

  compatibilityDate: "2024-08-09",
});
