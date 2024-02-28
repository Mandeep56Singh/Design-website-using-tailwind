function createProjectItems () {

    const projectItems = document.querySelector(".project-items");
    const projectImages = [

        "/assets/images/backgrounds/Rectangle 27.png",
        "/assets/images/backgrounds/Rectangle 28.png",
        "/assets/images/backgrounds/Rectangle 29.png",
        "/assets/images/backgrounds/Rectangle 30.png",
        "/assets/images/backgrounds/Rectangle 31.png",
        "/assets/images/backgrounds/Rectangle 31.png",
    ];
    const projectContainer = document.createElement("div");
    projectContainer.classList.add(
      "mx-auto",
      "mt-12",
      "grid",
      "w-[340px]",
      "grid-cols-1",
      "gap-12",
      "sm:w-11/12",
      "sm:grid-cols-2",
      "sm:gap-16",
      "xl:mt-28",
      "xl:gap-28",
      "xsm:w-[300px]"
    );
    for (let i = 0; i < projectImages.length; i++) {
        const contianer = document.createElement("div");
         contianer.innerHTML = `
          <img
            src="${projectImages[i]}"
            alt="projectImages"
          />
          <div class="mt-3 flex">
            <div>
              <h1 class="font-DM-serif-Display text-2xl text-black-dark">
                Modern bedroom
              </h1>
              <p class="font-Jost text-xlp text-black-light">
                Decor / Artchitecture
              </p>
            </div>
            <div
              class="ml-auto grid size-[70px] place-content-center rounded-full "
            >
              <img
                src="/assets/images/icons/arrowArticle.png"
                alt="ArrowRight"
                class = "size-12 lg:size-16"
              />
            </div>
          </div>
        </div>
         `;
         
        projectContainer.appendChild(contianer);

    }
    projectItems.appendChild(projectContainer);

    return projectItems;

}
createProjectItems();

//  reference to html code 

/*
 <!-- <section class="project-items mt-9">
     <div
        class="mx-auto mt-12 grid w-[340px] grid-cols-1 gap-12 sm:w-11/12 sm:grid-cols-2 sm:gap-16 xl:mt-28 xl:gap-28 xsm:w-[300px]"
      >
        <div>
          <img
            src="/assets/images/backgrounds/Rectangle 27.png"
            alt="Rectangle 4"
          />
          <div class="mt-3 flex">
            <div>
              <h1 class="font-DM-serif-Display text-2xl text-black-dark">
                Modern bedroom
              </h1>
              <p class="font-Jost text-xlp text-black-light">
                Decor / Artchitecture
              </p>
            </div>
            <div
              class="ml-auto grid size-[70px] place-content-center rounded-full "
            >
              <img
                src="/assets/images/icons/arrowArticle.png"
                alt="ArrowRight"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/images/backgrounds/Rectangle 28.png"
            alt="Rectangle 4"
          />
          <div class="mt-3 flex">
            <div>
              <h1 class="font-DM-serif-Display text-2xl text-black-dark">
                Modern bedroom
              </h1>
              <p class="font-Jost text-xlp text-black-light">
                Decor / Artchitecture
              </p>
            </div>
            <div
              class="ml-auto grid size-[70px] place-content-center rounded-full"
            >
              <img
                src="/assets/images/icons/arrowArticle.png"
                alt="ArrowRight"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/images/backgrounds/Rectangle 29.png"
            alt="Rectangle 4"
          />
          <div class="mt-3 flex">
            <div>
              <h1 class="font-DM-serif-Display text-2xl text-black-dark">
                Modern bedroom
              </h1>
              <p class="font-Jost text-xlp text-black-light">
                Decor / Artchitecture
              </p>
            </div>
            <div
              class="ml-auto grid size-[70px] place-content-center rounded-full"
            >
              <img
                src="/assets/images/icons/arrowArticle.png"
                alt="ArrowRight"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/images/backgrounds/Rectangle 30.png"
            alt="Rectangle 8"
          />
          <div class="mt-3 flex">
            <div>
              <h1 class="font-DM-serif-Display text-2xl text-black-dark">
                Modern bedroom
              </h1>
              <p class="font-Jost text-xlp text-black-light">
                Decor / Artchitecture
              </p>
            </div>
            <div
              class="ml-auto grid size-[70px] place-content-center rounded-full"
            >
              <img
                src="/assets/images/icons/arrowArticle.png"
                alt="ArrowRight"
              />
            </div>
          </div>
        </div>
      </div>
    </section> -->
    
*/
