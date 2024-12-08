import { ColorRing } from "react-loader-spinner";

const CircleLoader = () => {
  return (
    <section className="flex justify-center items-center w-[100vw] h-[40vh]">
      <ColorRing
        visible={true}
        height="160"
        width="160"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      ></ColorRing>
    </section>
  );
};

export default CircleLoader;
