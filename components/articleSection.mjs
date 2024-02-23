export function createArticleContainer() {
  const articleNews = document.querySelector(".article-news");
  const title = ["Kitchan Design", "Living Design", "Interior Designing"];
  const description = [
    " Let’s Get Solution For <br />Building Construction <br />Work",
    "Low Cost Latest Invented <br />Interior Designing <br /> Ideas",
    " Best For Any Office & <br /> Business Interior <br /> Solution",
  ];
  const date = [" 22 December,2023", "26 December,2022", "4 December,2023"];

  const element = `
             <!-- container 1 -->
        <div
          class="xl:h-[521px] max-w-[382px] w-11/12 rounded-[62px] border border-[#E7E7E7] p-5 xsm:w-[300px] mx-auto "
        >
          
        </div>
            `;

  for (let i = 0; i < title.length; i++) {
    const elementi = document.createElement("div");
    elementi.className =
      "md:h-[521px] max-w-[382px] w-11/12 rounded-[62px] border border-[#E7E7E7] p-5 xsm:w-[300px] mx-auto";
    if (i === 1) {
      elementi.classList.add("md:mt-[380px]");
      elementi.classList.add("lg:mt-0");
    }
    if (i == 2) {
      elementi.classList.add("md:-mt-[250px]");
      elementi.classList.add("lg:mt-0");
    }
    elementi.innerHTML = `
            
                            <div
            class="h-72 xl:w-96 bg-no-repeat rounded-tr-[44px] sm:rounded-none md:rounded-tr-[44px]  "
            style="
              background-image: url('assets/images/backgrounds/ArticleBg${
                i + 1
              }.png');
            "
          >
            <div
              class="relative left-5 top-56 grid h-12 w-32 place-content-center rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-black-default opacity-50"
            >
              <h1 class="font-Jost text-white">${title[i]}</h1>
            </div>
          </div>
          <h1
            class="mt-2 text-wrap font-DM-serif-Display text-2xl text-black-dark"
          >
            ${description[i]}
          </h1>
          <div class="mt-3 flex items-center">
            <div>
              <p class="font-Jost sm:text-xlp text-black-light text-lg">
               ${date[i]}
              </p>
            </div>
            <div
              class="ml-auto grid size-[70px] place-content-center rounded-full"
            >
              <img
                src="assets/images/icons/arrowArticle.png"
                alt="ArrowRight" class="size-12 sm:size-16"
              />
            </div>
          </div>
            `;

    articleNews.appendChild(elementi);
  }
}

