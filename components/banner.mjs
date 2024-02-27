export function createBanner() {
  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    if (!banner) {
      console.error("Banner element not found.");
      return;
    }

    const title = banner.textContent;
    const links = ["/index.html", "/views/about.html", "/views/service.html"];
    const images = ["bg-About-Us-img", "bg-services-img"];

    let image;
    if (window.location.pathname === links[1]) {
      image = images[0];
    } else if (window.location.pathname === links[2]) {
      image = images[1];
    }
    console.log(title);
    banner.classList.add("mt-6", "sm:mt-10", "md:mt-12", "xl:mt-16");

    banner.innerHTML = `
      <div
        class="relative h-36 w-screen ${image} bg-center sm:h-44 md:h-56 xl:h-64 2xl:h-[356px]"
      >
        <div
          class="absolute inset-0 h-full w-full bg-black-default bg-opacity-60 pt-16 sm:pt-20 md:pt-28 xl:pt-36 2xl:pt-44"
        >
          <h1
            class="text-center font-DM-serif-Display text-3xlp text-white sm:text-6xl md:text-6xlp xl:text-7xl"
          >
           ${title}
          </h1>
        </div>
      </div>
    `;
  });
}