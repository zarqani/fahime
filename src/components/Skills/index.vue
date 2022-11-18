<script setup>
  import SectionTitle from "../../components/SectionTitle/index.vue";
  import { SectionNumber, Container } from "../../components/CommonStyle/index";
  import {
    SkillsBox,
    SkillTitle,
    SkillPercent,
    SkillBg,
    SkillBar,
  } from "./style";

  const skills = [
    {
      title:
        "Front-end (Html, Css(Sass, Less), Js(ES5, ES6+), ReactJs, NextJs, Svelte, …)",
      percent: "88%",
    },
    { title: "Back-end (Nodejs, SQL, ..)", percent: "50%" },
    { title: "Version Controller (Git, Gitlab, Github, ...)", percent: "75%" },
    { title: "Task Manager (Jira ,Trello , Gitlab,...)", percent: "85%" },
    { title: "Agile (Scrum, Kanban)", percent: "78%" },
    { title: "Wordpress ( Theme, Plugin)", percent: "70%" },
  ];
</script>

<template>
  <section id="skills">
    <Container>
      <SectionTitle
        title="Work Skills"
        subtitle="My Professional Work Skills."
      />

      <skills-box>
        <div v-for="item in skills">
          <skill-title>
            <span>{{ item.title }}</span>
          </skill-title>
          <skill-percent />
          <skill-bg>
            <skill-bar :percent="item.percent" />
          </skill-bg>
        </div>
      </skills-box>
    </Container>

    <SectionNumber><span>0</span>3.</SectionNumber>
  </section>
</template>
