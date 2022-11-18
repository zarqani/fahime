<script setup>
  import About from "../components/About/index.vue";
  import Experience from "../components/Experience/index.vue";
  import Skills from "../components/Skills/index.vue";
  import { SectionDivider } from "../components/CommonStyle/index";
</script>

<template>
  <main>
    <About />
    <SectionDivider><span /></SectionDivider>
    <Experience />
    <SectionDivider><span /></SectionDivider>
    <Skills />
  </main>
</template>
