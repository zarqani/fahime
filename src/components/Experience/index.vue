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
      date: "2022 - Present",
      position: "Front End Developer",
      compony: "Pio.",
      href: "https://app.pio.ir/",
      description: `
      Pio is a startup company that provides car services.</br>
      <ul style="list-style: disc;">
        <li>Deliver engaging user experience through optimization of images, code, and cross-browser compatibility, increasing Time on Page by +180 seconds.</li>
        <li>Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement.</li>
        <li>Designed dynamic and browser-compatible pages using HTML5, CSS3, React, and Javascript.</li>
      </ul>
        <b>Skills</b>: JavaScript (ES6), React.js, Redux, Socket.IO, MUI,  Axios, REST APIs, HTML, CSS, Git, PWA, Service Worker, Workbox, Push Notifications, Styled-System, Styled-Components.

      `,
      urls: ["https://piocompany.org/", "https://app.pio.ir/"],
    },
    {
      date: "2021 - 2022",
      position: "Front End Developer",
      compony: "Arta Capital.",
      href: "https://enigma.ir/",
      description: `
      Enigma is the largest provider of analytical products in the Iranian stock market.
      <ul style="list-style: disc;">
        <li>Collaborated with designers to improve UIs and updated the websites to be more user-friendly.</li>
        <li>Ensure Cross-browser and device compatibility.</li>
        <li>Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement.</li>
      </ul>
        <b>Skills</b>: JavaScript (ES6), TypeScript, Next.js, Redux, WebSocket, Ant Design, Axios, Jest, REST APIs, HTML, CSS, Git, Styled-System, Styled-Components.
      `,
      urls: ["https://enigma.ir/", "https://panel.enigma.ir/"],
    },
    {
      date: "2019 - 2021",
      position: "Front End Developer",
      compony: "Doctop.",
      href: "https://doctop.com/",
      description: `
        Doctop is a software management system for all physicians and clinics to serve various services. including online appointment booking, Electronic visits, and so on.
        <ul style="list-style: disc;">
          <li>Delivered responsive, cross-browser compatible, and accessibility-compliant websites.</li>
          <li>Improves World Wildlife Fund website by utilizing web development best practices that include accessibility, search engine optimization (SEO), and website performance.</li>
        </ul>
        <b>Skills</b>: JavaScript (ES6), Next.js,  Ant Design, Node.js, GraphQL, Axios, REST APIs, Cypress, HTML, CSS, Git.
     `,
      urls: ["https://doctop.com/"],
    },
    {
      date: "2017 - 2019",
      position: "Front End Developer",
      compony: "Freelancer",
      href: "#",
      description:
        "I worked on the individual project. I learned React js and GraphQl.",
      urls: [
        "https://github.com/zarqani",
        "https://github.com/fahimezarghani/",
      ],
    },
    {
      date: "2013 - 2017",
      position: "WordPress Developer",
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
            <p v-if="item.description">
              <span v-html="item.description"></span>
            </p>
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
