
import { createButton } from "./components/buttonElement.mjs";
import { createFooter } from "./components/footer.mjs";
import { createHeader } from "./components/header.mjs";
import gsap from "gsap";
import barba from "@barba/core";

const links = [
  "/index.html",
  "/views/about.html",
  "/views/service.html",
  "/views/products.html",
];
const currentPage = window.location.pathname;
document.addEventListener("DOMContentLoaded", () => {
  createFooter();
  createHeader();
  createButton("button-black", "#292F36", "../assets/images/icons/arrow.png");
  createButton("button-orange", "#CDA274", "../assets/images/icons/arrow.png");
 
});



// page transitions
 const link = document.querySelectorAll(".link");

 // Iterate over each link element and add an event listener to it
 link.forEach((li) => {
   li.addEventListener("click", transformPage);
 });


  function transformPage() {
    pageTransition();
    delay(1500);
  }
  function pageTransition() {
    let tl = gsap.timeline();
    tl.to("ul.transition li", {
      scaleY: 1,
      transformOrigin: "bottom left",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });

    tl.to("ul.transition li", {
      scaleY: 0,
      transformOrigin: "bottom left",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.1,
    });
  }
  function delay(n) {
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

   barba.init({
     sync: true,
     transitions: [
       {
         async leave(data) {
           const done = this.async();

           pageTransition();
           await delay(1500);
           done();
         },
         
       },
     ],
   });





