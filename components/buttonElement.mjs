export function createButton() {
  let blackButtons = document.getElementsByClassName("button-black"); 
  let orangeButtons = document.getElementsByClassName("button-orange");  
  let color;
  let classNames = [
    "flex",
    "items-center",
    "rounded-2xl",
    "px-8",
    "py-4",
    "font-Inter",
    "text-lg",
    "font-semibold",
    "text-white",
    "xl:px-10",
    "xl:py-6",
  ]; // Define classNames array with common classes


  // Loop through each button in the collection
  Array.from(blackButtons).forEach((button) => {
    // Add color class
    button.classList.add("bg-black-dark");

    // Add common classes
    classNames.forEach((className) => {
      button.classList.add(className);
    });

    // Create and append image
    const imgURL = "../assets/images/icons/arrow.png";
    const img = document.createElement("img");
    img.classList.add(
      "grayscale-100",
      "ml-3",
      "brightness-0",
      "invert",
      "filter"
    );
    img.src = imgURL;
    button.appendChild(img);
  });
  Array.from(orangeButtons).forEach((button) => {
    // Add color class
    button.classList.add("bg-orange-light");

    // Add common classes
    classNames.forEach((className) => {
      button.classList.add(className);
    });

    // Create and append image
    const imgURL = "../assets/images/icons/arrow.png";
    const img = document.createElement("img");
    img.classList.add(
      "grayscale-100",
      "ml-3",
      "brightness-0",
      "invert",
      "filter"
    );
    img.src = imgURL;
    button.appendChild(img);
  });

  
}
