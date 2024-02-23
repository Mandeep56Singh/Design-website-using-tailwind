import { createHeader } from "./components/header.mjs";
import { createFooter } from "./components/footer.mjs";
import { slider } from "./components/sliderSupport.mjs";
import { createButton } from "./components/buttonElement.mjs";
import { createArticleContainer } from "./components/articleSection.mjs";

createFooter();
createHeader();
createButton("button-black", "#292F36", "../assets/images/icons/arrow.png");
createButton("button-orange", "#CDA274", "../assets/images/icons/arrow.png");
slider();
createArticleContainer();
