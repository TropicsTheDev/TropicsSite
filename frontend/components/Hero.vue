<template>
  <section class="section" :style="sectionCss">
    <div class="left-section">
      <h2 class="section-title" :style="sectionTitleCss">
        Welcome to <br />
        My Portfolio
      </h2>
      <p class="section-text">
        Building epic apps with JavaScript
      </p>
      <Button @buttonClicked="() => (window.location = 'https://google.com')"
        >Learn More</Button
      >
    </div>
  </section>
</template>

<script setup>
import useGlobalCssProps from "@/styles/useGlobalCssProps";

const { sectionCss } = useGlobalCssProps({ row: true, nopadding: true });
const { sectionTitleCss } = useGlobalCssProps({ main: true, center: true });
</script>

<style lang="scss" scoped>
.left-section {
  width: 100%;
  @media screen and (max-width: var(--breakpoints-sm)) {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media screen and (max-width: var(--breakpoints-md)) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
