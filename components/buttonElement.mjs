export function createButton() {
  let Button;
  let color;
  let classNames; // Declare classNames variable

  // Define classNames based on the condition
  if (document.querySelector(".button-black")) {
    Button = document.querySelector(".button-black");
    color = "bg-black-dark";
  } else if (document.querySelector(".button-orange")) {
    Button = document.querySelector(".button-orange");
    color = "bg-orange-light";
  }

  // Define classNames array based on the color
  classNames = [
    "flex",
    "items-center",
    "rounded-2xl",
    `${color}`, // Use the color variable here
    "px-8",
    "py-4",
    "font-Inter",
    "text-lg",
    "font-semibold",
    "text-white",
    "xl:px-10",
    "xl:py-6",
  ];

  // Add classNames to the button
  classNames.forEach((className) => {
    Button.classList.add(className);
  });

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
  Button.appendChild(img);
}
