// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    }
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/sanitize.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
  css: [
    "@/styles/fonts/Hermit/stylesheet.css",
    "@/styles/globals.css",
    "@/styles/components.scss",
    "boxicons/css/boxicons.min.css",
  ],
  plugins: ["@/plugins/urql"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/theme.scss";',
        },
      },
    },
  },
});
