<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Header from "./components/Header/index.vue";
  import Footer from "./components/Footer/index.vue";
  import { SectionDivider } from "./components/CommonStyle/index";
</script>

<template>
  <header>
    <Header />
  </header>

  <!-- <RouterLink to="/">Home</RouterLink> -->
  <RouterView />

  <SectionDivider><span /></SectionDivider>
  <Footer />
</template>

<script>
  import { injectGlobal } from "vue-styled-components";
  injectGlobal`
    @import url("https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&family=Oswald:wght@500;700&family=Roboto:wght@500&display=swap");
    
      html {
        overflow-x: hidden !important;
        overflow-y: scroll;
        height: 100%;
      }
      body {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 13px;
        height: 100%;
        font-family: "Mukta Vaani", sans-serif;
        padding-top: 75px;
      }
      @-o-viewport {
        width: device-width;
      }
      @-ms-viewport {
        width: device-width;
      }
      @viewport {
        width: device-width;
      }
      a {
        text-decoration: none;
        position: relative;
        color: #000;
      }

      *,
      *:after,
      *:before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      section {
        position: relative;
        float: left;
        width: 100%;
        padding: 60px 0;
        background: #fff;
        overflow: hidden;
      }


      p {
        font-size: 14px;
        line-height: 28px;
        padding-bottom: 10px;
        font-weight: 500;
        color: #5e646a;
        font-family: "Roboto", sans-serif;
      }
      ol,
      ul {
        list-style: none;
      }

`;
</script>
