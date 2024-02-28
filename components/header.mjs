export function createHeader() {
  const header = document.querySelector("header");
  header.classList.add("xl:w-[1210px]","mx-auto")

 const links = [
    "/index.html",
    "/views/service.html",
    "/views/projects.html",
    "/views/about.html",
    "/views/contact.html",
];
const linksText = [
  "Home",
  "Services",
  "Projects",
  "About",
  "Contact",
]

  header.innerHTML = `
     <div class="mt-5 flex h-[50px] justify-between sm:mt-4 xsm:mt-2">
      <div class="ml-3 flex items-center gap-1">
        <img
          src="../assets/images/logos/Vector.png"
          alt="logo"
          class="sm: size-8 md:size-10 xl:size-12"
        />
        <h1
          class="xsm: font-DM-serif-Display text-3xlp text-black-light sm:mt-2 sm:text-2xlp xsm:mt-2 xsm:text-2xl"
        >
          SELHONO
        </h1>
      </div>

      <nav class="flex items-center gap-3 xl:gap-12">
        <ul class="  hidden xl:mr-5 xl:flex xl:gap-12">
          <li class="font-Jost text-xl font-medium">
            <a href="${links[0]}">${linksText[0]}</a>
          </li>
          <li class="font-Jost text-xl font-medium">
            <a href="${links[1]}">${linksText[1]}</a>
          </li>
          <li class="font-Jost text-xl font-medium">
            <a href="${links[2]}">${linksText[2]}</a>
          </li>
          <li class="font-Jost text-xl font-medium"><a href="${links[3]}">${linksText[3]}</a></li>
          <li class="font-Jost text-xl font-medium"><a href="${links[4]}">${linksText[4]}</a></li>
        </ul>
        <div>
          <img
            src="../assets/images/icons/search.png"
            alt="search"
            class="md:mr-4"
          />
        </div>
        <img
          src="../assets/images/icons/menu.svg"
          alt="menu"
          class="mr-5 block size-6 md:mr-24 xl:hidden"
        />
      </nav>
    </div>`;
 
    const currentPage = window.location.href;

    // Get all the links in the navigation
    const navLinks = document.querySelectorAll("header ul li a");

    // Loop through each link and check if it matches the current page URL
    navLinks.forEach((link) => {
      if (link.href === currentPage) {
        link.classList.add("text-orange-500"); // Apply orange color to the active link
      } else {
        link.classList.remove("text-orange-500"); // Remove orange color from non-active links
      }
    });

}
