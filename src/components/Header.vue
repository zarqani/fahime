<!-- <script setup>
  const links = ["about", "experience", "skills", "download"];
</script> -->
<script>
  function downloadPdf() {
    var doc = new jsPDF();

    console.log("clicked");

    var elementHTML = document.getElementById("contnet").innerHTML;
    /* var specialElementHandlers = {
            '#elementH': function (element, renderer) {
                return true;
            }
        }; */
    console.log(elementHTML);
    doc.fromHTML(elementHTML, 15, 15, {
      width: 170,
      /* 'elementHandlers': specialElementHandlers */
    });

    doc.save("sample-document.pdf");
  }
</script>

<template>
  <nav class="page-scroll-nav">
    <div class="container">
      <div class="page-scroll-nav-inner">
        <h1>Fahime Zarqani</h1>
        <ul class="no-list-style init_hidden_filter">
          <li>
            <a class="scroll-link fbgs" href="#about" data-bgtext="01"
              ><span>About</span></a
            >
          </li>
          <li>
            <a class="scroll-link fbgs" href="#experience" data-bgtext="02"
              ><span>Experience</span></a
            >
          </li>
          <li>
            <a class="scroll-link fbgs" href="#skills" data-bgtext="04"
              ><span>Skills</span></a
            >
          </li>
          <li>
            <a ehi="downloadPdf" class="btn ajax color-bg fl-btn"
              ><span>Download</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
  .page-scroll-nav {
    position: fixed;
    left: 0;
    width: 100%;
    background: #313131;
    top: 0;
    z-index: 20;
    -webkit-transform: translate3d(0, 0, 0);
  }

  .page-scroll-nav ul {
    margin: 0;
    display: flex;
    align-items: center;
  }

  /* .page-scroll-nav li {
        display: inline-block;
      } */

  .page-scroll-nav li a:not(.btn) {
    height: 75px;
    line-height: 75px;
    display: block;
    padding: 0 30px;
    position: relative;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
    font-weight: 500;
  }

  .page-scroll-nav li a:not(.btn).act-sec,
  .page-scroll-nav li a:not(.btn)::hover {
    color: #fff;
  }

  .page-scroll-nav li a:not(.btn)::after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    z-index: 2;
    top: 0;
    transition: all 200ms linear;
    background: #f57500;
  }

  .page-scroll-nav li a:not(.btn).act-sec:after {
    width: 100%;
  }
  .page-scroll-nav h1 {
    margin: 0;
    color: #ffffffcf;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 500;
  }
  .page-scroll-nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
