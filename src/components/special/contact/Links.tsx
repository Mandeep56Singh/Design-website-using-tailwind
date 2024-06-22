import React from 'react'

const Links : React.FC = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1">
        <div className="flex flex-col items-center gap-8">
          <p className="font-Jost text-xl text-black-light">info@selhono.com</p>
          <p className="font-Jost text-xl text-black-light">
            +1 (378) 400-1234
          </p>
          <p className="font-Jost text-xl text-black-light">www.selhono.com</p>

          <div className="flex gap-4 sm:mt-4">
            <div className="text-2xlp text-black-dark sm:text-4xl">
              <i className="fa-brands fa-square-facebook"></i>
            </div>
            <div className="text-2xlp text-black-dark sm:text-4xl">
              <i className="fa-brands fa-square-x-twitter"></i>
            </div>
            <div className="text-2xlp text-black-dark sm:text-4xl">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="text-2xlp text-black-dark sm:text-4xl">
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Links