import gsap from "gsap";
import barba from "@barba/core";

// page transitions

  function pageTransition() {
    let tl = gsap.timeline();
    tl.to("ul.transition li", {
      scaleY: 1,
      transformOrigin: "bottom left",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });

    tl.to("ul.transition li", {
      scaleY: 0,
      transformOrigin: "bottom left",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.1,
    });
  }
  function delay(n) {
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1500);
          done();
        },
      },
    ],
  });