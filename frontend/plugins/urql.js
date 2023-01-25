import urql, { createClient, ssrExchange, dedupExchange, fetchExchange } from "@urql/vue";
// Honestly not sure if I need all these config options since I'm static rendering. May come back after more research
export default defineNuxtPlugin((nuxt) => {
  const config = useRuntimeConfig();
  const { vueApp } = nuxt;
  const ssrKey = "__URQL_DATA__";

  const ssr = ssrExchange({
    isClient: process.client,
  });

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxt.hook("app:created", () => {
      ssr.restoreData(nuxt.payload[ssrKey]);
    });
  }

  // when app has rendered in server, send SSR state to client
  if (process.server) {
    nuxt.hook("app:rendered", () => {
      nuxt.payload[ssrKey] = ssr.extractData();
    });
  }

  const client = createClient({
    url: config.public.apiUrl,
    exchanges: [
      dedupExchange,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
  });

  nuxt.provide("urql", client);
  vueApp.use(urql, client);
});
