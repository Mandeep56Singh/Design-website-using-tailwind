export function createButton(buttonClass, bgColorClass, imgUrl) {
  const buttons = document.getElementsByClassName(buttonClass);


  Array.from(buttons).forEach((button) => {
    button.style.backgroundColor = bgColorClass;
    button.classList.add("btn");

    const img = document.createElement("img");
    img.classList.add(
      "grayscale-100",
      "ml-3",
      "brightness-0",
      "invert",
      "filter"
    );
    img.src = imgUrl;
    button.appendChild(img);
  });
}
