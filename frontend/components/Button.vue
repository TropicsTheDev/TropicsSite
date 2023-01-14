<template>
  <div class="button-back" :disabled="disabled" :style="buttonBackCss">
    <button class="button-front" :disabled="disabled" @click="$emit('buttonClicked')" :style="buttonFrontCss">
      <slot />
    </button>
  </div>
</template>

<script setup>
import useGlobalCssProps from "@/styles/useGlobalCssProps";

const props = defineProps({
  alt: Boolean,
  form: Boolean,
  disabled: Boolean,
});

const { buttonBackCss, buttonFrontCss } = useGlobalCssProps({
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
});
</script>
