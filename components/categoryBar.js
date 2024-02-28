function createCategoryBar() {
    const projectCategory = document.querySelector('.project-category');
    const categoriesTitles = [
        "Bathroom",
        "Bedroom",
        "Kitchen",
        "Living Room",
    ];
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add(
      "flex",
      "border",
      "border-orange-light",
      "rounded-xl",
      "mx-auto",
      "w-[266px]",
      "sm:w-[590px]",
      "lg:w-[834.2px]",
      "h-[75px]",
      "overflow-auto",
      "scroll-none"
    );
    for(let i = 0; i < categoriesTitles.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add(
          "btn",
          "font-Jost",
          "text-lg",
          "font-semibold",
          "text-black-dark",
          "py-auto",
          "sm:px-[66px]",
          "px-[32px]",
          "rounded-xl",
          "whitespace-nowrap"
        );
        btn.textContent = categoriesTitles[i];
        if(categoriesTitles[i] === "Bedroom") {
            btn.classList.add("bg-orange-light", "text-white");
        }
        categoryContainer.appendChild(btn);
    }
   

   
    projectCategory.appendChild(categoryContainer);
    const buttonArray = document.querySelectorAll(".btn");
    buttonArray.forEach((btn) => {
        btn.addEventListener("click", () => {
             const activeBtn = document.querySelector(".btn.bg-orange-light");
             activeBtn.classList.remove("bg-orange-light","text-white");
             btn.style.transition = "all 0.2s ease-in";
             btn.classList.add("bg-orange-light","text-white");
           
           
        })
    })

  return projectCategory;
}
createCategoryBar();
