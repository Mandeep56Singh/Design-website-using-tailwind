import { createButton } from "./components/buttonElement.mjs";
import { slider } from "./components/sliderSupport.mjs";
import { createArticleContainer } from "./components/articleSection.mjs";
import { createFooter } from "./components/footer.mjs";

createFooter();
createButton("button-black", "#292F36", "../assets/images/icons/arrow.png");
createButton("button-orange", "#CDA274", "../assets/images/icons/arrow.png");
slider();
createArticleContainer();
