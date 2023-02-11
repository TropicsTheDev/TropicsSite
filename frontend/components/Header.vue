<template>
  <div class="container" :style="cssProps">
    <div class="div1">
      <NuxtLink to="/">
        <span role="presentation" style="display: flex; align-items: center; color: var(--colors-accent2)"
          ><i class="bx bx-code-block" /><span class="span">Tropics</span></span
        >
      </NuxtLink>
    </div>
    <ul class="div2">
      <li>
        <NuxtLink to="#projects" class="nav-link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#tech" class="nav-link">Tech</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#about" class="nav-link">About</NuxtLink>
      </li>
    </ul>
    <div class="div3">
      <a href="https://github.com/TropicsTheDev" class="social-icons">
        <i class="bx bxl-github" />
      </a>
      <a href="https://www.instagram.com/dougie_mt/" class="social-icons">
        <i class="bx bxl-instagram" />
      </a>
      <a href="https://www.linkedin.com/in/douglas-townsend-3a3997183/" class="social-icons">
        <i class="bx bxl-linkedin-square" />
      </a>
    </div>
  </div>
</template>

<script setup>
const isOpen = computed(() => false);
const cssProps = computed(() => ({
  "--nav-products-icon_opacity": isOpen ? "1" : ".75",
  "--nav-products-icon_transform": isOpen ? "scaleY(-1)" : "scaleY(1)",
}));
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  @media screen and (max-width: $breakpoints-sm) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
}

.span {
  font-size: 2rem;
  color: var(--colors-accent2);
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media screen and (max-width: $breakpoints-sm) {
    grid-area: 1 / 1 / 2 / 3;
  }
}
.div2 {
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: $breakpoints-sm) {
    grid-area: 2 / 2 / 3 / 5;
  }
}
.div3 {
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: $breakpoints-sm) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
}

// Navigation Links
.nav-link {
  font-size: 2rem;
  line-height: 32px;
  color: var(--colors-primary1);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media screen and (max-width: $breakpoints-sm) {
    padding: 0.5rem;
  }
}
/// DropDown Contact
.contact-drop-down {
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
  @media screen and (max-width: $breakpoints-sm) {
    padding: 0.4rem 0;
  }
  @media screen and (max-width: $breakpoints-md) {
    padding: 0;
  }
}

.nav-products-icon {
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: var(--nav-products-icon_opacity);
  transform: var(--nav-products-icon_transform);
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: $breakpoints-sm) {
    margin: 2px 0 0 2px;
    width: 15px;
  }
}

// Social Icons

.social-icons {
  transition: 0.3s ease;
  color: var(--colors-primary1);
  border-radius: 50px;
  padding: 8px;
  font-size: 3rem;
  &:hover {
    background-color: var(--colors-accent1);
    color: var(--colors-accent2);
    transform: scale(1.2);
    cursor: pointer;
  }
}
</style>
