export default {
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config) {
      console.log(
        config.module.rules
          .find(r => r.test.toString().includes('?css'))
          .oneOf.find(l => !l.resourceQuery)
          .use.find(m => m.loader.includes('postcss')).options.plugins
      )
    }
  }
}
