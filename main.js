
import { createBanner } from "./components/banner.mjs";
import { createButton } from "./components/buttonElement.mjs";
import { createFooter } from "./components/footer.mjs";
import { createHeader } from "./components/header.mjs";

const links = ["/index.html", "/views/about.html", "/views/service.html"];
const currentPage = window.location.pathname;
document.addEventListener("DOMContentLoaded", () => {
  createFooter();
  createHeader();
  createButton("button-black", "#292F36", "../assets/images/icons/arrow.png");
  createButton("button-orange", "#CDA274", "../assets/images/icons/arrow.png");
 
});

if (currentPage != links[0]) {
  createBanner();
}





