<template>
  <section class="section" :style="sectionCss">
    <Hero />
    <BackgroundAnimation />
  </section>
  <Projects />
  <Technologies />
  <Timeline />
  <!-- <Acomplishments /> -->
</template>

<script setup>
import useGlobalCssProps from "@/styles/useGlobalCssProps";

const { sectionCss } = useGlobalCssProps({ grid: true });
</script>
