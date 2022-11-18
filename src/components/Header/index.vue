<script setup>
  import { ScrollNav, ScrollNavInner } from "./style";
  import { Button, Container } from "../CommonStyle";

  const menu = ["about", "experience", "skills"];

  function downloadPdf() {
    window.print();
    // var doc = new jsPDF();

    // console.log("clicked");

    // var elementHTML = document.getElementById("app").innerHTML;
    // /* var specialElementHandlers = {
    //         '#elementH': function (element, renderer) {
    //             return true;
    //         }
    //     }; */
    // console.log(elementHTML);
    // doc.fromHTML(elementHTML, 15, 15, {
    //   width: 170,
    //   /* 'elementHandlers': specialElementHandlers */
    // });

    // doc.save("sample-document.pdf");
  }
</script>

<template>
  <scroll-nav>
    <Container>
      <scroll-nav-inner>
        <h1>Fahime Zarqani</h1>
        <ul>
          <li v-for="item in menu">
            <a :href="`#${item}`"
              ><span>{{ item }}</span></a
            >
          </li>
          <li>
            <Button @click="downloadPdf" color="primary"
              ><span>Download</span></Button
            >
          </li>
        </ul>
      </scroll-nav-inner>
    </Container>
  </scroll-nav>
</template>
