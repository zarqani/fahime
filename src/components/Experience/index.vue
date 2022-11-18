<script setup>
  import {
    ExperienceWrap,
    ExperiencePart,
    WebsitesUrl,
    Date,
    Position,
    Company,
  } from "./style";
  import SectionTitle from "../../components/SectionTitle/index.vue";
  import { SectionNumber, Container } from "../../components/CommonStyle/index";

  const experience = [
    {
      date: "2021 - Present",
      position: "Front End Developer",
      compony: "Arta Capital.",
      href: "https://enigma.ir/",
      description:
        "Enigma provides stock market analysis charts an analysis tools.",
      urls: ["https://enigma.ir/", "https://panel.enigma.ir/"],
    },
    {
      date: "2019 - 2021",
      position: "Front End Developer",
      compony: "Doctop.",
      href: "https://doctop.com/",
      description:
        "Doctop is a free online service that helps patients find doctors.",
      urls: ["https://doctop.com/"],
    },
    {
      date: "2017 - 2019",
      position: "Front End Developer",
      compony: "Freelancer",
      href: "#",
      description: "",
      urls: [
        "https://github.com/zarqani",
        "https://github.com/fahimezarghani/",
      ],
    },
    {
      date: "2013 - 2017",
      position: "Wordpress Developer",
      compony: "Zariss.",
      href: "#",
      description: "",
      urls: [
        "http://www.vicologroup.com/",
        "http://www.ideatrophy.ir/",
        "http://www.moso.ir/",
        "http://www.iott.ir/",
        "http://www.easyco.ir",
        "http://www.irtcishop.com/",
        "http://www.70rang.com/",
        "http://www.8thart.net/",
        "http://www.keyhantel.com/",
        "http://www.sushico.ir/",
        "http://www.28711.ir/",
        "http://www.boofco.com/",
        "http://www.tecno.co.ir/",
        "http://www.taitookgallery.com/",
        "http://www.irannails.com/",
        "http://www.unilever4u.com/",
        "http://www.baghaa.com/",
        "http://www.kimiadam.com/",
        "http://www.namaagahi.com/",
        "http://www.farnamdevelopments.com/",
        "http://www.generalbiosystems.ir/",
        "http://www.valatec.ir/",
        "http://www.kalapad.com/",
        "https://www.siteeditor.org/",
        "https://wordpress.org/plugins/site-editor/",
        "https://github.com/fahimezarghani/editor",
        "https://stars.starsideas.org",
        "https://www.stars-menu.com",
        "https://wordpress.org/plugins/stars-menu",
      ],
    },
  ];
</script>

<template>
  <section id="experience">
    <Container>
      <SectionTitle
        title="Work Experience"
        subtitle="My Professional Work Experience"
      />
      <experience-wrap>
        <experience-part v-for="(item, index) in experience">
          <Date :active="!index"
            ><span> {{ item.date }} </span></Date
          >
          <Position>
            <span> {{ item.position }} </span>
          </Position>
          <Company>
            <a target="_blank" :href="item.href">{{ item.compony }}</a>
          </Company>
          <div>
            <p v-if="item.description">{{ item.description }}</p>
            <websites-url :rowLength="item.urls.length">
              <li v-for="url in item.urls">
                <a target="_blank" :href="url">{{ url }}</a>
              </li>
            </websites-url>
          </div>
        </experience-part>
      </experience-wrap>
    </Container>

    <SectionNumber><span>0</span>2.</SectionNumber>
  </section>
</template>
