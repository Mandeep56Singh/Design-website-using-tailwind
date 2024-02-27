function createJionUsSection() {
    const jionUsSection = document.querySelector(".jion-us-section");
    jionUsSection.innerHTML = `
     <div
      class="margin-section relative   flex h-[430px] w-screen flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat sm:pt-20 "
      style="background-image: url('/assets/images/backgrounds/Rectangle 10.png')"
    >
      <div
        class="grid h-[250px] sm:w-[569px] place-content-center rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-black-default bg-opacity-70 w-11/12 xsm:w-[300px] px-7 sm:px-0"
      >
        <h1 class="font-DM-serif-Display sm:text-5xl text-white text-2xl">
          Wanna join the interno?
        </h1>
        <p class="mt-3 sm:text-xlp font-medium text-white">
         Join us and explore the artistry of interior design
        </p>
        <button class="button-orange mt-8">Contact With Us</button>
      </div>
    </div>
    `;

    return jionUsSection;
}
createJionUsSection();