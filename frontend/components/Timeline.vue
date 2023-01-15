<template>
  <section class="section" :style="sectionCss">
    <div class="section-divider" :style="sectionDividerCss" />
    <h2 class="section-title" :style="sectionTitleCss">About Me</h2>
    <section class="section-text">All about me and what I do</section>
    <ul class="carousel-container" ref="carouselRef" @scroll="handleScroll">
      <template v-if="totalCarouselCount > 0">
        <li
          class="carousel-mobile-scroll-node"
          v-for="(item, index) in TimeLineData"
          :key="index"
          :style="
            carouselMobileContainerScrollNodeCss({
              final: index === totalCarouselCount - 1,
            })
          "
        >
          <div
            class="carousel-item"
            :id="`carousel__item-${index}`"
            @click="(event) => handleClick(event, index)"
            :style="carouselItemCss({ active: activeItem, index })"
          >
            <h4 class="carousel-item-title">
              {{ item.year }}
              <svg
                class="carousel-item-img"
                width="208"
                height="6"
                viewBox="0 0 208 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                  fill="url(#paint0_linear)"
                  fill-opacity="0.33"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-4.30412e-10"
                    y1="0.5"
                    x2="208"
                    y2="0.500295"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop
                      offset="0.79478"
                      stop-color="white"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </h4>
            <p class="carousel-item-text">{{ item.text }}</p>
          </div>
        </li>
      </template>
    </ul>
    <div class="carousel-buttons">
      <button
        class="carousel-button"
        v-for="(item, index) in TimeLineData"
        :key="index"
        :style="carouselButtonCss({ active: activeItem, index })"
        @click="(event) => handleClick(event, index)"
      >
        <div class="carousel-button-dot" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { TimeLineData } from "@/constants/constants";
import useGlobalCssProps from "~~/styles/useGlobalCssProps";

const totalCarouselCount = TimeLineData.length;

const activeItem = ref(0);
const carouselRef = ref(null);

function handleClick(event, index) {
  event.preventDefault();
  console.log("clicked", { event, index, carouselRef });
  if (carouselRef.value) {
    const scrollLeft = Math.floor(
      carouselRef.value.scrollWidth *
        0.7 *
        (index / TimeLineData.length)
    );

    scroll(carouselRef.value, scrollLeft);
  }
}

function scroll(node, left) {
  return node.scrollTo({ left, behavior: "smooth" });
}

function handleScroll() {
  if (carouselRef.value) {
    const index = Math.round(
      (carouselRef.value.scrollLeft /
        (carouselRef.value.scrollWidth * 0.7)) *
        TimeLineData.length
    );

    activeItem.value = index;
  }
}

// snap back to beginning of scroll when window is resized
// avoids a bug where content is covered up if coming from smaller screen
onMounted(() => {
  const handleResize = () => scroll(carouselRef.value, 0);

  window.addEventListener("resize", handleResize);
});

const carouselMobileContainerScrollNodeCss = ({ final }) => ({
  "--carousel-mobile-scroll-node_max-width": final ? `120%` : `min-content`,
});
const carouselItemCss = ({ active, index }) => ({
  "--carousel-item_opacity": active === index ? 1 : 0.5,
});
const carouselButtonCss = ({ active, index }) => ({
  "--carousel-button_opacity": active === index ? 1 : 0.33,
  "--carousel-button_transform": active === index ? "scale(1.6)" : "scale(1)",
});

const { sectionCss, sectionTitleCss, } = useGlobalCssProps({});
const { sectionDividerCss } = useGlobalCssProps({ divider: true });
</script>

<style lang="scss" scoped>
.carousel-container {
  max-width: 1040px;
  background: var(--colors-background1);
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* overflow-x: hidden; */
  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-bottom: 80px;
  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: $breakpoints-sm) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
}

.carousel-mobile-scroll-node {
  @media screen and (max-width: $breakpoints-sm) {
    display: flex;
    min-width: var(--carousel-mobile-scroll-node_max-width);
  }
}

.carousel-item {
  background: var(--colors-background1);
  padding: 1rem;
  border-radius: 3px;
  max-width: 196px;
  @media screen and (max-width: $breakpoints-md) {
    max-width: 124px;
    margin-left: 16px;
  }

  @media screen and (max-width: $breakpoints-sm) {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    opacity: var(--carousel-item_opacity);
  }

  &:hover {
    background: var(--colors-accent1);
  }
}

.carousel-item-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    var(--colors-primary1) 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  @media (max-width: $breakpoints-md) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media screen and (max-width: $breakpoints-sm) {
    font-size: 16px;
    line-height: 24px;
  }
}
.carousel-item-img {
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  @media screen and (max-width: $breakpoints-sm) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
}

.carousel-item-text {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: var(--colors-primary2);
  padding-right: 16px;
  @media screen and (max-width: $breakpoints-md) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
}
.carousel-buttons {
  width: 288px;
  display: none;
  visibility: hidden;
  @media screen and (max-width: $breakpoints-sm) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
}

.carousel-button {
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: var(--carousel-button_opacity);
  transform: var(--carousel-button_transform);
  &:focus {
    outline: none;
  }
}

.carousel-button-dot {
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
}
</style>
