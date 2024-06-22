import React from 'react'
 export type  formProps = {
  label: string;
  type: string;
  className?: string;
};
const FormInput: React.FC<formProps> = ({ label, type, className }) => {
  return (
    <div className="group relative z-0  mb-5  w-full ">
      <input
        type={type}
        className={`peer block w-full  appearance-none border-0 border-b-2 border-gray-600  bg-transparent px-0 pt-2.5 font-Jost text-xl text-gray-900  focus:border-orange-500 focus:outline-none focus:ring-0 ${className}`}
        placeholder=" "
        required
      />
      <label className="peer-placeholder-shown:translate-y-[-10px]peer-placeholder-shown:scale-100 absolute top-3 -z-10 mb-2 origin-[0] -translate-y-6 scale-100 transform font-Jost text-base text-gray-400 duration-300 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-orange-500 ">
        {label}
      </label>
    </div>
  );
};
export default FormInput;