import React from 'react'
import Links from './Links'
import Form from './Form'
const FormSection : React.FC = () => {
  return (
    <section className="mt-10 sm:mt-20">
      <h1 className="mx-auto w-[320px] text-center font-DM-serif-Display text-2xl text-black-dark xsm:w-[280px] xsm:text-xlp sm:text-3xl md:w-[680px]">
        We love meeting new people  and helping them.
      </h1>
      <div className='lg:flex flex-row-reverse'>
        <Form></Form>
        <Links></Links>
      </div>
    </section>
  );
}

export default FormSection