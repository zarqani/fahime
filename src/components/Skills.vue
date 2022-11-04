<template>
  <section id="skills">
    <div class="container">
      <div class="section-title">
        <h3>Work Skills</h3>
        <p>My Professional Work Skills</p>
      </div>

      <div class="skillbar-box animaper">
        <div class="pr-bg pr-bg-white"></div>
        <!-- skill 1-->
        <div class="custom-skillbar-title">
          <span
            >Front-end (Html, Css(Sass, Less), Js(ES5, ES6+), ReactJs, NextJs,
            Svelte, …)</span
          >
        </div>
        <div class="skill-bar-percent"></div>
        <div class="skillbar-bg" data-percent="88%">
          <div class="custom-skillbar" style="width: 88%"></div>
        </div>
        <!-- skill 2-->
        <div class="custom-skillbar-title">
          <span>Back-end (Nodejs, SQL, ..)</span>
        </div>
        <div class="skill-bar-percent"></div>
        <div class="skillbar-bg" data-percent="50%">
          <div class="custom-skillbar" style="width: 50%"></div>
        </div>
        <!-- skill 3-->
        <div class="custom-skillbar-title">
          <span> Version Controller (Git, Gitlab, Github, ...)</span>
        </div>
        <div class="skill-bar-percent"></div>
        <div class="skillbar-bg" data-percent="75%">
          <div class="custom-skillbar" style="width: 75%"></div>
        </div>
        <!-- skill 4-->
        <div class="custom-skillbar-title">
          <span>Task Manager (Jira ,Trello , Gitlab,...)</span>
        </div>
        <div class="skill-bar-percent"></div>
        <div class="skillbar-bg" data-percent="85%">
          <div class="custom-skillbar" style="width: 85%"></div>
        </div>
        <!-- skill 5-->
        <div class="custom-skillbar-title">
          <span>Agile (Scrum, Kanban)</span>
        </div>
        <div class="skill-bar-percent"></div>
        <div class="skillbar-bg" data-percent="78%">
          <div class="custom-skillbar" style="width: 78%"></div>
        </div>
        <!-- skill 6-->
        <div class="custom-skillbar-title">
          <span>Wordpress ( Theme, Plugin)</span>
        </div>
        <div class="skill-bar-percent"></div>
        <div class="skillbar-bg" data-percent="70%">
          <div class="custom-skillbar" style="width: 70%"></div>
        </div>
      </div>
    </div>
    <div class="section-number"><span>0</span>3.</div>
  </section>
</template>

<style>
  .skillbar-box {
    position: relative;
    z-index: 1;
  }

  .custom-skillbar-title span {
    float: left;
    color: #000;
    text-align: left;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 6px;
  }

  .skill-bar-percent {
    float: right;
    font-size: 14px;
    font-weight: 800;
    color: #666;
  }

  .skillbar-bg {
    position: relative;
    display: block;
    float: left;
    width: 100%;
    height: 4px;
    overflow: hidden;
    background: #f2f2f2;
    margin: 16px 0;
  }

  .custom-skillbar {
    height: 14px;
    width: 0px;
    background: #f57500;
  }
</style>
