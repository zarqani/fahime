<script setup>
  import { StyledTitle } from "./style";

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

<template>
  <styled-title>
    <h3>{{ title }}</h3>
    <p>{{ subtitle }}</p>
  </styled-title>
</template>
