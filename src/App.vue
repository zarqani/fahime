<script setup>
  import { ThemeProvider } from "vue-styled-components";
  import HelloWorld from "./components/HelloWorld.vue";
  import TheWelcome from "./components/TheWelcome.vue";
  import Header from "./components/Header.vue";
  import About from "./components/About.vue";
  import Experience from "./components/Experience.vue";
  import Skills from "./components/Skills.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <ThemeProvider>
    <header>
      <Header />
      <!-- <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    </header>

    <main>
      <About />
      <div class="section-separator fl-wrap"><span></span></div>
      <Experience />
      <div class="section-separator fl-wrap"><span></span></div>
      <Skills />
      <div class="section-separator fl-wrap"><span></span></div>
      <Footer />
      <!-- <TheWelcome /> -->
    </main>
  </ThemeProvider>
</template>
<!-- 
<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style> -->

<script>
  import { injectGlobal } from "vue-styled-components";
  injectGlobal`
 @import url("https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&family=Oswald:wght@500;700&family=Roboto:wght@500&display=swap");
      /* @media print{ */
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
        /* padding-top: 76px; */
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
        padding: 80px 0;
        background: #fff;
        overflow: hidden;
      }

      .section-separator {
        height: 1px;
      }

      .fl-wrap {
        float: left;
        width: 100%;
        position: relative;
      }

      .section-separator:before {
        content: "";
        position: absolute;
        left: 80px;
        right: 0;
        height: 10%;
        background: #eee;
        z-index: 1;
      }

      .section-separator:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        left: 74px;
        top: -4px;
        z-index: 2;
        background: #f57500;
      }

      .section-separator span {
        position: absolute;
        right: 0;
        width: 150px;
        height: 1px;
        top: 0;
        z-index: 10;
        background: #f57500;
      }

      .container {
        max-width: 1100px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }

      .section-title {
        margin-bottom: 40px;
        padding-bottom: 20px;
        position: relative;
        z-index: 1;
      }

      .section-title:before {
        content: "";
        position: absolute;
        left: 0;
        top: -40px;
        height: 2px;
        width: 30px;
        background: #f57500;
      }

      .section-title h3 {
        font-size: 24px;
        text-align: left;
        text-transform: uppercase;
        color: #000;
        font-weight: 800;
        float: left;
        width: 100%;
        letter-spacing: 2px;
        padding-bottom: 10px;
        line-height: 34px;
        margin: 0;
      }

      .section-title h3:before {
        content: "";
        position: absolute;
        left: -90px;
        top: -10px;
        width: 150px;
        bottom: 4px;
        z-index: -1;
        background: #f2f2f2;
      }

      .section-title p {
        padding-top: 10px;
        color: #666;
        text-align: left;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 22px;
        position: relative;
        z-index: 2;
        max-width: 450px;
      }
      p {
        font-size: 14px;
        line-height: 28px;
        padding-bottom: 10px;
        font-weight: 500;
        color: #5e646a;
        font-family: "Roboto", sans-serif;
      }

      .section-title:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 1px;
        width: 90%;
        background: #eee;
      }
      .section-number {
        position: absolute;
        right: 10px;
        top: 20px;
        font-size: 224px;
        font-weight: bold;
        color: #eee;
        opacity: 0.7;
        font-family: "Oswald", sans-serif;
        transform: rotate(-90deg);
      }

      .section-number span {
        position: relative;
        overflow: hidden;
      }

      .section-number span:before {
        content: "";
        position: absolute;
        width: 100%;
        bottom: 50%;
        top: 0;
        left: 0;
        background: #fff;
        z-index: 2;
      }

      ol,
      ul {
        list-style: none;
      }


      .btn {
        padding: 15px 38px;
        position: relative;
        color: #fff;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 2px;
        font-weight: 800;
        background: #3c3c3c;
        overflow: hidden;
        display: inline-block;
      }

      .fl-btn {
        background: #f57500;
      }

      .btn:hover:before {
        width: 100%;
      }

      .btn:hover span {
        z-index: 1;
        position: relative;
        transition: all 0.3s ease-in-out;
        transition-delay: 0.1s;
      }

      .btn:hover span {
        color: #3c3c3c;
      }

      .btn:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        z-index: 1;
        background: #fff;
        transition: all 0.3s ease-in-out;
      }
`;
</script>
