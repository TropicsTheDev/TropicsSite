<template>
  <section class="section" id="tech" :style="sectionCss">
    <div class="section-divider" :style="sectionDividerCss" />
    <h2 class="section-title" :style="sectionTitleCss">Technologies</h2>
    <p class="section-text">
      I work with various technologies for both frontend and backend web
      development!
    </p>
    <ul class="list">
      <li class="list-item">
        <div class="list-container">
          <h4 class="list-title">
            React
            <picture
              ><i class="bx bxl-react" style="font-size: 3rem"
            /></picture>
          </h4>
          <p class="list-paragraph">Experienced with ReactJS</p>
        </div>
      </li>
      <li class="list-item">
        <div class="list-container">
          <h4 class="list-title">
            Vue
            <picture>
              <i class="bx bxl-vuejs" style="font-size: 3rem" />
            </picture>
          </h4>
          <p class="list-paragraph">Experienced with VueJS</p>
        </div>
      </li>
      <li class="list-item">
        <div class="list-container">
          <h4 class="list-title">
            Node
            <picture
              ><i class="bx bxl-nodejs" style="font-size: 3rem"
            /></picture>
          </h4>
          <p class="list-paragraph">Experienced with NodeJS</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import useGlobalCssProps from "@/styles/useGlobalCssProps";

const { sectionCss, sectionTitleCss } = useGlobalCssProps({});
const { sectionDividerCss } = useGlobalCssProps({ divider: true });
</script>

<style lang="scss" scoped>
.image-container {
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: $breakpoints-lg) {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media screen and (max-width: $breakpoints-md) {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
}

.main-image {
  width: 100%;
}

.list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media screen and (max-width: $breakpoints-lg) {
    margin: 64px 0;
  }
  @media screen and (max-width: $breakpoints-md) {
    margin: 64px 0;
    gap: 24px;
  }

  @media screen and (max-width: $breakpoints-sm) {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
}

.list-container {
  display: flex;
  flex-direction: column;
  @media screen and (max-width: $breakpoints-sm) {
    display: flex;
    margin-left: 18px;
  }
}

.list-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: var(--colors-accent3);
  margin-bottom: 8px;
  @media screen and (max-width: $breakpoints-md) {
    font-size: 24px;
    line-height: 28px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
}

.list-paragraph {
  font-size: 18px;
  line-height: 30px;
  color: var(--colors-primary2);
  @media screen and (max-width: $breakpoints-md) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 14px;
    line-height: 22px;
  }
}

.list-item {
  max-width: 320px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: $breakpoints-md) {
    max-width: 203px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
}

.list-icon {
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media screen and (max-width: $breakpoints-md) {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
}
</style>
