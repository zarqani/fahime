<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  });
</script>

<script>
  import StyledTitle from "./style.js";

  export default {
    components: {
      StyledTitle,
    },
  };
</script>

<template>
  <h3>{{ title }}</h3>
  <p>{{ subtitle }}</p>
</template>
