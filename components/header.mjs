export function createHeader() {
  document.addEventListener("DOMContentLoaded", function (event) {
    const links = [
      "/index.html",
      "/views/service.html",
      "/views/projects.html",
      "/views/about.html",
      "/views/contact.html",
    ];
    const currentPage = window.location.href;

    // Get all the links in the navigation
    const navLinks = document.querySelectorAll(".link");

    // Loop through each link and check if it matches the current page URL
    navLinks.forEach((link) => {
      if (link.href === currentPage) {
        link.classList.add("text-orange-500"); // Apply orange color to the active link
      } else {
        link.classList.remove("text-orange-500"); // Remove orange color from non-active links
      }
    });
  });
}
