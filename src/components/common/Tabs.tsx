import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import React, { useEffect, useRef } from "react";

type TabProps = {
  currentTabIndex: number;
  onTabClick: (index: number) => void;
};

gsap.registerPlugin(MotionPathPlugin);

const tabs = ["Bedroom", "Bathroom", "Kitchen", "living room"];

const Tabs: React.FC<TabProps> = ({ currentTabIndex, onTabClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (tabRefs.current[currentTabIndex]) {
      gsap.set(sliderRef.current, {
        x: tabRefs.current[currentTabIndex]?.offsetLeft,
        width: tabRefs.current[currentTabIndex]?.offsetWidth,
      });
      gsap.set(tabRefs.current[currentTabIndex], { color: "#fff" });
    }
  }, [currentTabIndex]);

  const handleTabClick = (index: number) => {
    if (index !== currentTabIndex) {
      const oldTab = currentTabIndex;

      // Animate the slider before updating the state
      const tl = gsap.timeline({ defaults: { duration: 0.4 } });
      tl.to(sliderRef.current, {
        x: tabRefs.current[index]?.offsetLeft,
        width: tabRefs.current[index]?.offsetWidth,
      });
      tl.to(tabRefs.current[oldTab], { color: "#000", ease: "none" }, 0);
      tl.to(tabRefs.current[index], { color: "#fff", ease: "none" }, 0);

      // Delay the state update to allow the animation to complete
      tl.eventCallback("onComplete", () => onTabClick(index));
    }
  };

  return (
    <div className="tabs-block relative mx-auto my-[50px] flex w-[360px] sm:w-[480px] justify-center rounded-full border border-solid border-orange-200">
      <div
        className="slider absolute left-0 top-0 h-full rounded-full bg-orange-light shadow-md"
        ref={sliderRef}
      ></div>
      {tabs.map((tab, index) => (
        <button
          className="relative flex-auto text-nowrap py-4 text-center text-sm sm:text-lg  font-semibold text-black-dark"
          key={tab}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
