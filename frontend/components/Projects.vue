<template>
  <section class="section" id="projects" :style="sectionCss">
    <div class="section-divider" :style="sectionDividerCss" />
    <h2 class="section-title" :style="sectionTitleCss">Projects</h2>
    <section class="grid-container">
      <div class="blog-card" v-for="project in projects" :key="project.id">
        <img class="img" :src="project.image" :alt="project.title" />
        <div class="title-content">
          <h3 class="header-three" :style="headerThreeCss(project.title)">
            {{ project.title }}
          </h3>
          <hr class="hr" />
        </div>
        <p class="card-info">
          {{ project.description }}
        </p>
        <div>
          <div class="title-content">Stack</div>
          <ul class="tag-list">
            <li class="tag" v-for="(tag, index) in project.tags" :key="index">
              {{ tag }}
            </li>
          </ul>
          <ul class="utility-list">
            <a class="external-links" :href="project.source">Code</a>
            <a class="external-links" :href="project.visit">{{
              project.visit ? "Live Site" : "No Demo"
            }}</a>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import useGlobalCssProps from "@/styles/useGlobalCssProps";
import { projects } from "@/constants/constants";

const headerThreeCss = (title) => ({
  "--header-three_font-size": title ? "3rem" : "2rem",
});
const { sectionCss } = useGlobalCssProps({ nopadding: true });
const { sectionTitleCss } = useGlobalCssProps({ main: true });
const { sectionDividerCss } = useGlobalCssProps({ });
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media screen and (max-width: $breakpoints-sm) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
}

.blog-card {
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(121, 81, 169, 0.5);
  text-align: center;
  width: 400px;
  @media screen and (max-width: $breakpoints-sm) {
    width: 100%;
  }
}

.title-content {
  text-align: center;
  z-index: 20;
  width: 100%;
  color: var(--colors-accent4);
}

.header-three {
  font-weight: 500;
  letter-spacing: 2px;
  color: var(--colors-accent2);
  padding: 0.5rem 0;
  font-size: var("--header-three_font-size");
}

.hr {
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: var(--colors-accent3);
}

.intro {
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
}

.card-info {
  width: 100%;
  padding: 0 50px;
  color: var(--colors-primary2);
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  @media screen and (max-width: $breakpoints-sm) {
    padding: 0.3rem;
  }
}

.utility-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
}

.external-links {
  color: var(--colors-primary2);
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: var(--colors-background2);
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: var(--colors-accent1);
    color: var(--colors-accent2)
  }
}

.tag-list {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}
.tag {
  color: car(--colors-primary1);
  font-size: 1.5rem;
}
</style>
