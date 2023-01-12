// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/sanitize.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Ubuntu",
        },
      ],
    },
  },
  css: [
    "@/styles/globals.css",
    "@/styles/components.scss",
    "boxicons/css/boxicons.min.css",
  ],
});
