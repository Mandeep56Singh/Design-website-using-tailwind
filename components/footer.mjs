export function createFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
     <div class="mt-12 md:mt-20 xl:mt-60">
      <div class="gap-24 xl:mx-auto xl:flex xl:w-[1210px]">
        <div class="mx-auto w-[300px] sm:w-[560px] md:w-[680px] xl:ml-0">
          <div class="flex gap-1">
            <img
              src="/assets/images/logos/Vector.png"
              alt="logo"
              class="size-6 sm:size-8 md:size-12 xl:size-10"
            />
            <h1
              class="ml-2 font-DM-serif-Display text-xlp text-black-light sm:text-2xlp md:mt-3 md:text-4xl xl:mt-0 xl:text-[40px]"
            >
              SELHONO
            </h1>
          </div>
          <p
            class="mt-2 w-[300px] text-wrap text-left font-Jost text-xl text-black-light sm:w-[560px] md:mt-6 md:w-[620px] md:text-2xl xl:w-[400px]"
          >
            Join our vibrant community of interior design enthusiasts!
            <br class="" />
            Follow us on Facebook, Instagram, LinkedIn, and Twitter for daily
            inspiration
          </p>

          <div class="flex gap-4 sm:mt-4">
            <div class="text-2xlp text-black-dark sm:text-4xl">
              <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div class="text-2xlp text-black-dark sm:text-4xl">
              <i class="fa-brands fa-square-x-twitter"></i>
            </div>
            <div class="text-2xlp text-black-dark sm:text-4xl">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="text-2xlp text-black-dark sm:text-4xl">
              <i class="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>

        <div class="hidden text-nowrap xl:block">
          <h1 class="font-DM-serif-Display text-2xl text-black-dark">Pages</h1>
          <p class="text-xlp leading-[4rem] text-black-light">About Us</p>
          <p class="text-xlp leading-[4rem] text-black-light">Our Projects</p>
          <p class="text-xlp leading-[4rem] text-black-light">Our Team</p>
          <p class="text-xlp leading-[4rem] text-black-light">Contact Us</p>
          <p class="text-xlp leading-[4rem] text-black-light">Services</p>
        </div>

        <div class="hidden text-nowrap xl:block">
          <h1 class="font-DM-serif-Display text-2xl text-black-dark">
            Services
          </h1>
          <p class="text-xlp leading-[4rem] text-black-light">Kitchan</p>
          <p class="text-xlp leading-[4rem] text-black-light">Living Area</p>
          <p class="text-xlp leading-[4rem] text-black-light">Bathroom</p>
          <p class="text-xlp leading-[4rem] text-black-light">Dinning Hall</p>
          <p class="text-xlp leading-[4rem] text-black-light">Bedroom</p>
        </div>

        <div class="mx-auto mt-10 w-[300px] sm:w-[560px] md:w-[680px] xl:m-0">
          <h1
            class="font-DM-serif-Display text-2xl text-black-dark md:text-3xl xl:text-2xl"
          >
            Contact
          </h1>
          <p
            class="mt-[1rem] whitespace-normal text-xl text-black-light sm:text-xlp md:text-2xl xl:text-xlp xl:leading-8"
          >
            55 East Birchwood Ave. <br class="sm:hidden" />
            Brooklyn, New York 11201
          </p>

          <p
            class="text-xl text-black-light md:text-2xl xl:text-xlp xl:leading-[4rem]"
          >
            contact@selhono.com
          </p>
          <p class="text-xl leading-[4rem] text-black-light sm:text-xlp">
            (123) 456 - 7890
          </p>
        </div>
      </div>
      <p
        class="mb-8 mt-12 text-center font-Jost text-black-light sm:mt-20 sm:text-xlp md:mt-24 xl:mt-40"
      >
        Copyright © SELHONO
      </p>
    </div>`;
    
}