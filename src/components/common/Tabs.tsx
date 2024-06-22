
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


gsap.registerPlugin(MotionPathPlugin);

const tabs = ["Bedroom", "Bathroom", "kitchen"];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (tabRefs.current[0]) {
      gsap.set(sliderRef.current, {
        x: tabRefs.current[0].offsetLeft,
        width: tabRefs.current[0].offsetWidth,
      });
      gsap.set(tabRefs.current[0], { color: "#fff" });
    }
  }, []);

  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      const oldTab = activeTab;
      setActiveTab(index);
      const tl = gsap.timeline({ defaults: { duration: 0.4 } });
      tl.to(sliderRef.current, {
        x: tabRefs.current[index]?.offsetLeft,
        width: tabRefs.current[index]?.offsetWidth,
      });
      tl.to(tabRefs.current[oldTab], { color: "#000", ease: "none" }, 0);
      tl.to(tabRefs.current[index], { color: "#fff", ease: "none" }, 0);
    }
  };

  return (
    <div className="tabs-block relative mx-auto my-[50px] flex w-[360px] justify-center rounded-full border border-solid  border-orange-200">
      <div
        className="slider absolute left-0 top-0 h-full rounded-full bg-orange-light shadow-md"
        ref={sliderRef}
      ></div>
      {tabs.map((tab, index) => (
        <button
          className="relative  flex-auto text-nowrap py-4 text-center text-lg  font-semibold text-black-dark "
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
