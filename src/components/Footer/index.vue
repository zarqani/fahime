<script setup>
  import { SocialMedia } from "./style";
  import GithubIcon from "../../components/icons/IconGithub.vue";
  import LinkedinIcon from "../../components/icons/IconLinkedin.vue";
</script>

<template>
  <footer>
    <social-media>
      <a target="_blank" href="https://github.com/zarqani">
        <GithubIcon />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/fahime-zarghani-898a03117/"
      >
        <LinkedinIcon />
      </a>
    </social-media>
  </footer>
</template>
