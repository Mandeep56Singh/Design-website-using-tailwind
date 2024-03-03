function createCategoryBar() {
    const projectCategory = document.querySelector('.project-category');
   
    const buttonArray = projectCategory.querySelectorAll("button");
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
