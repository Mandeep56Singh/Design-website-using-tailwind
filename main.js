
import { createFooter } from "./components/footer.mjs";
import { createHeader } from "./components/header.mjs";


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







