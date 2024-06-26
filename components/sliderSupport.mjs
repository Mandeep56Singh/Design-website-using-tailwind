 function slider(){
  const sliderContent = document.querySelector(".slider-list");
  const slideButtons = document.querySelectorAll(".slide-button");
  const maxScroll = sliderContent.scrollWidth - sliderContent.clientWidth;
  console.log(sliderContent.scrollWidth);
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -2 : 2;
      const scrollAmount = sliderContent.clientWidth * direction;
      sliderContent.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

}
slider();
