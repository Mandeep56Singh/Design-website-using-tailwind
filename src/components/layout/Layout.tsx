import gsap from "gsap";
import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, Transition } from "react-transition-group";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const onExit = () => {
    const t1 = gsap.timeline();
    t1.to(".li", {
      scaleY: 1,
      transformOrigin: "bottom left",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    });
    t1.to(".li", {
      scaleY: 0,
      transformOrigin: "bottom left",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.1,
    });
  };

  return (
    <>
      <Header />
      <div className="Container">
        <ul className="transition">
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
        </ul>
        <SwitchTransition>
          <Transition key={location.pathname} timeout={1000} onExit={onExit}>
            {currentOutlet}
          </Transition>
        </SwitchTransition>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
