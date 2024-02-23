export function createBanner() 
{

    const banner = document.querySelector('.banner');
    const title = banner.textContent;
    console.log(title);
    banner.classList.add("mt-6", "sm:mt-10", "md:mt-12", "xl:mt-16");

    banner.innerHTML = `
      <div
        class="relative h-36 w-screen bg-About-Us-img bg-center sm:h-44 md:h-56 xl:h-64 2xl:h-[356px]"
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
    return banner;
}