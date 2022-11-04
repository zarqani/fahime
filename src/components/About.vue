<script setup>
  import SectionTitle from "../components/common/SectionTitle/index.vue";
</script>

<template>
  <section id="about">
    <div class="container">
      <SectionTitle
        title="About Me"
        subtitle="I’m very passionate and dedicated to my work..."
      />

      <div class="about-me">
        <img src="../assets/me.png" />
        <div class="main-about">
          <h2>Hello! I’m Fahime Zarqani.</h2>
          <p>
            I'm an experienced javascript developer who constantly seeks out
            innovative solutions to everyday problems. In my several years in
            this industry, I've honed my analytical thinking and collaboration
            skills, and I like working with a team.
          </p>

          <div class="header-contacts">
            <ul>
              <li><span>01. ADDRESS: </span> Tehran-Iran</li>
              <li><span>02. DATE OF BIRTH: </span> 1994-12-20</li>
              <li>
                <span>03. EDUCATION: </span> Bachelor's degree in software
                engineering, Golestan University
              </li>
              <li>
                <span>04. PHONE: </span>
                <a href="tel:+989900995049">09900995049</a>
              </li>
              <li>
                <span>05. EMAIL: </span>
                <a href="mailto:zarqani.f94@gmail.com">Zarqani.f94@gmail.com</a>
              </li>
              <!--
                  <li>
                    <span>02. WEB: </span>
                    <a target="_balnk">www.fahimezarqani.ir</a>
                  </li>
                -->
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section-number"><span>0</span>1.</div>
  </section>
</template>

<style>
  .about-me img {
    max-width: 180px;
    display: block;
    margin-bottom: 16px;
    text-align: left;
    padding-right: 32px;
  }

  .about-me {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .main-about {
    padding-top: 0px;
  }
  .header-contacts ul {
    margin: 0;
    padding: 0;
  }

  .header-contacts li,
  .contacts-btn {
    list-style: none;
    margin-right: 40px;
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 4px;
    margin-bottom: 4px;
  }

  .header-contacts li:before {
    content: "";
    position: absolute;
    left: -30px;
    width: 15px;
    top: 50%;
    height: 2px;
    margin-top: -2px;
  }

  .header-contacts li a {
    transition: all 200ms ease-out;
    color: #f57500;
  }
</style>
