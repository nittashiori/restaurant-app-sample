export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: 'false',
  srcDir: 'src/',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-clipboard2',
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:wght@400;700', 'Montserrat:wght@800'],
    },
  },
  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/mixins.scss',
      '@/assets/scss/reset.scss',
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://webservice.recruit.co.jp/hotpepper',
      pathRewrite: { '^/api': '' },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  env: {
    apikey: '84cb53550715ea81',
  },
}
