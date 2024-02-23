export function createHeader() {

    const header = document.querySelector(
        'header'
    );
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
        <ul class="hidden xl:mr-5 xl:flex xl:gap-12">
          <li class="font-Jost text-xl font-medium">
            <a href="/index.html">Home</a>
          </li>
          <li class="font-Jost text-xl font-medium">
            <a href="/views/about.html">Pages</a>
          </li>
          <li class="font-Jost text-xl font-medium">
            <a href="/test.html">Services</a>
          </li>
          <li class="font-Jost text-xl font-medium"><a href="#">Project</a></li>
          <li class="font-Jost text-xl font-medium"><a href="#">Blog</a></li>
          <li class="font-Jost text-xl font-medium"><a href="#">Contact</a></li>
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
}