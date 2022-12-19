<script setup>
  import SectionTitle from "../../components/SectionTitle/index.vue";
  import { SectionNumber, Container } from "../../components/CommonStyle/index";
  import { Information, AboutMe } from "./style";

  const title = `Hello! I’m Fahime Zarqani.`;
  const description = `I'm an experienced Front End developer who seeks out
            innovative solutions to problems. In my several years in
            this industry, I've honed my analytical thinking and collaboration
            skills, and I like working with a team.`;

  const info = [
    { title: "01. ADDRESS: ", label: "Tehran-Iran" },
    { title: "02. DATE OF BIRTH: ", label: "1994-12-20" },
    {
      title: "03. EDUCATION: ",
      label: `Bachelor's degree in software engineering, Golestan University`,
    },
    { title: "04. PHONE: ", label: "+989900995049", href: "tel:+989900995049" },
    {
      title: "05. EMAIL: ",
      label: "Zarqani.f94@gmail.com",
      href: "mailto:zarqani.f94@gmail.com",
    },
    { title: "06. WEB: ", label: "fahimee.ir", href: "www.fahimee.ir" },
  ];
</script>

<template>
  <section id="about">
    <Container>
      <SectionTitle
        title="About Me"
        subtitle="I’m very passionate and dedicated to my work..."
      />

      <about-me>
        <img src="../../assets/me.png" />
        <div>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>

          <information>
            <ul>
              <li v-for="item in info">
                <span>{{ item.title }}</span>
                <a v-if="item.href" :href="item.href" target="_balnk">{{
                  item.label
                }}</a
                ><span v-else>{{ item.label }}</span>
              </li>
            </ul>
          </information>
        </div>
      </about-me>
    </Container>

    <SectionNumber><span>0</span>1.</SectionNumber>
  </section>
</template>
