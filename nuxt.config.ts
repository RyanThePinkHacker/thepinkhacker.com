// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  css: [
    "~/assets/style/main.scss",
  ],
  modules: [
    "@nuxt/content",
  ],
  content: {
    highlight: {
      theme: "github-dark",
      preload: [
        "rust",
        "toml",
        "asm",
      ],
    },
  },
});
