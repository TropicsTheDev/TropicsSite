<template>
  <section class="section" :style="sectionCss">
    <h2 class="section-title" :style="sectionTitleCss">
      Personal Acomplishments
    </h2>
    <div class="boxes">
      <div class="box" v-for="(card, index) in data" :key="index">
        <h5 class="box-num">{{ `${card.number}+` }}</h5>
        <p class="box-text">{{ card.text }}</p>
      </div>
    </div>
    <div class="section-divider" :style="sectionDividerCss" />
  </section>
</template>

<script setup>
import useGlobalCssProps from "@/styles/useGlobalCssProps";

const data = ref([
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
]);

const { sectionCss, sectionDividerCss, sectionTitleCss } = useGlobalCssProps({});
</script>

<style lang="scss" scoped>
.boxes {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  @media screen and (max-width: $breakpoints-md) {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  @media screen and (max-width: $breakpoints-sm) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
}

.box {
  background: var(--colors-background2);
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media screen and (max-width: $breakpoints-lg) {
    height: 210px;
  }
  @media screen and (max-width: $breakpoints-md) {
    height: 135px;
    padding: 16px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
}
.box-num {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: var(--colors-accent2);
  margin-bottom: 8px;
  @media screen and (max-width: $breakpoints-md) {
    font-size: 28px;
    line-height: 32px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 24px;
    line-height: 26px;
  }
}

.box-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: var(--colors-primary1);
  @media screen and (max-width: $breakpoints-md) {
    font-size: 16px;
    line-height: 20px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 10px;
    line-height: 14px;
  }
}

.join {
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  @media screen and (max-width: $breakpoints-md) {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
}

.join-text {
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: $breakpoints-md) {
    line-height: 32px;
    font-size: 20px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
}

.icon-container {
  display: flex;
  @media screen and (max-width: $breakpoints-sm) {
    width: 160px;
    justify-content: space-between;
  }
}
</style>
