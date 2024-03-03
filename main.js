
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
 
});



// page transitions
function disableHeaderLinks() {
  const headerLinks = document.querySelectorAll("header a");
  headerLinks.forEach((link) => {
    link.classList.add("pointer-events-none");
  });
}

function enableHeaderLinks() {
  const headerLinks = document.querySelectorAll("header a");
  headerLinks.forEach((link) => {
    link.classList.remove("pointer-events-none");
  });
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
 async function delay(n) {
   disableHeaderLinks(); // Disable header links before the delay
   await new Promise((resolve) => setTimeout(resolve, n));
   enableHeaderLinks(); // Enable header links after the delay
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
         async beforeLeave(data) {
          return createHeader();
         },
         
       },
     ],
   });





