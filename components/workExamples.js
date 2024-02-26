function createWorkExamples() {
  const examples = document.querySelector(".work-examples");
  const title = ["Concept & Details", "Idea for Work", "Design", "Perfection"];
  const description = [
    "Our interior design website offers expert guidance and inspiration for creating stylish and functional environments.",
    "Transforming interior design with an intuitive online platform for seamless collaboration and visualization.",
    "Creating functional yet stunning interiors, marrying form and function with innovative spatial solutions.",
    "Perfection is our ethos, manifested through meticulous attention to detail and unwavering commitment to excellence",
  ];
  const imageURL = [
    "/assets/images/backgrounds/Rectangle 21.png",
    "/assets/images/backgrounds/Rectangle 22.png",
    "/assets/images/backgrounds/Rectangle 23.png",
    "/assets/images/backgrounds/Rectangle 24.png",
   
];

 for(let i = 0; i < 4 ; i++) {


  const example = document.createElement("div");
  let direction = "sm:flex-row";
  let left = "left-3/4";
  if(i%2 != 0) {
   direction = "sm:flex-row-reverse";
   left = "0"
   console.log("executed for " , i)
  }

  example.classList.add(
    "mx-1",
    "mt-8",
    "flex",
    "flex-col",
    "justify-center",
    "gap-4",
    "overflow-hidden",
    "sm:mt-16",
    direction,
    "sm:gap-4",
    "md:gap-20",
    "md:mt-20",
    "lg:gap-24",
    "lg:mt-44"
  );


      example.innerHTML = `
        <img
          src="${imageURL[i]}"
          class="hidden w-[250px] object-contain sm:block md:w-[300px] lg:w-[480px] xl:w-[625px] xl:h-[485px]"
        />
        <div
          class="bg-image h-[120px] w-screen bg-orange-light bg-cover bg-center bg-no-repeat sm:hidden"
           style="background-image: url('${imageURL[i]}');
        >
           <div class=" w-full bg-black-default bg-opacity-100">
             <h1
            class="relative left-2/3 font-DM-serif-Display text-[90px] text-orange-bright  "
          >
             0${i + 1}
          </h1>
          </div>
        </div>

        <div
          class=" mx-auto w-[320px] rounded-3xl bg-transparent p-4  sm:mx-0 xsm:w-[280px] xsm:pl-2"
        >
         <h1
            class="relative ${left} font-DM-serif-Display text-[90px] text-orange-bright sm:text-5xl md:text-7xl lg:text-[90px] hidden sm:block"
          >
            0${i + 1}
          </h1>
          <div class="mt-2 sm:mt-4 lg:mt-24 xl:mt-[150px]">
            <h1
              class="font-DM-serif-Display text-2xlp text-black-dark md:text-4xl"
            >
              ${title[i]}
            </h1>
            <p
              class="font-Jost text-lg text-black-light sm:text-xl md:text-xlp"
            >
              ${description[i]}
            </p>
          </div>
        </div>`;
     
        examples.appendChild(example);
      
 }
}
createWorkExamples();
