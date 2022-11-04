<template>
  <footer>
    <div class="social-media">
      <a target="_blank" href="https://github.com/zarqani">
        <img src="../assets/github.svg" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/fahime-zarghani-898a03117/"
      >
        <img src="../assets/linkedin.svg" />
      </a>
    </div>
  </footer>
</template>

<style>
  .social-media {
    padding: 40px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-media img {
    cursor: pointer;
    margin: 0 5px;
    color: #eee;
    width: 26px;
    opacity: 0.75;
  }

  .social-media img:hover {
    opacity: 1;
  }
</style>
