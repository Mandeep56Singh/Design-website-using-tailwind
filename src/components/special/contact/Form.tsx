import React from "react";
import Button from "../../common/Button";
import FormInput from "./FormInput";
import {formProps } from "./FormInput"
const inputs: formProps[] = [
  {
    label: "Name",
    type: "text",
  },
  {
    label: "Email",
    type: "email",
  },
  {
    label: "Subject",
    type: "text",
  },
  {
    label: "Phone",
    type: "telno",
  },
];

const Form: React.FC = () => {
  return (
    <form className="mx-auto mt-20 grid w-[320px] gap-2  md:w-[680px] md:grid-cols-2 md:gap-8 xl:w-[780px]">
      {inputs.map((ele, i) => (
        <FormInput label={ele.label} type={ele.type} key={i}></FormInput>
      ))}
      <div className="group relative z-0 mb-5 w-full md:col-span-2">
        <textarea
          className="bg-red-40 peer mt-5 block h-40 w-full appearance-none border-0 border-b-2 border-gray-600  bg-transparent px-0 py-2.5 font-Jost text-xl text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label className="absolute top-3 -z-10 mb-2 origin-[0] -translate-y-6 scale-100 transform font-Jost text-base text-gray-400 duration-300 peer-placeholder-shown:translate-y-[-10px] peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-orange-500">
          Please write your message...
        </label>
      </div>

      <div className="flex justify-center md:justify-end md:col-span-2">
        <Button variant={"black"}>
          Send Now <i className="fa-solid fa-arrow-right ml-3"></i>
        </Button>
      </div>
    </form>
  );
};

export default Form;
