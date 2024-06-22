import React from "react";
type pageProps = {
    children:string | number
}
const pages = [1,2,3];
const PageItems : React.FC<pageProps> = ({children})  => {
    return (
  <div className="grid size-12 place-content-center rounded-full bg-black-lighest">
    {children}
  </div>
    )
}
const Pagination: React.FC = () => {
  return (
    <section className="margin-section">
      <div className="mx-auto flex w-[266px] gap-5">
       {
        pages.map((page) => <PageItems>{page}</PageItems>)
       }
        <button  className="grid size-12 place-content-center rounded-full bg-black-lighest">
            <img src="src/ass" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
