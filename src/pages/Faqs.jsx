import React from 'react'
import { IoIosArrowUp,IoIosArrowDroprightCircle } from "react-icons/io";

function Faqs() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
        
        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/FAQs</button>
        <h2 className='absolute top-14 left-18 text-white'>FAQs</h2>
        <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
      </div>
        <div className='flex'>
          <div className='ml-24 mr-4 mt-14 border rounded-t px-2 py-2 bg-amber-600'>FAQs</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>Net</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>Ragging</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>Gender Sensitization</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>SAP Bureau</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>University/College</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>MRP bureau</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>SC/ST/PWD</div>
          <div className='mt-14 border rounded-t px-2 py-2 bg-pink-100'>DEB</div>

        </div>
        <div>
          <h6 className='ml-24 border-2 pl-2 py-2 flex border-gray-300 bg-pink-100'>01. Recognition/Specification of degrees<IoIosArrowUp className='ml-210' /></h6>
          <p className='ml-24 border -mt-2! pl-2 py-2 font-light text-sm border-gray-300'>A list of UGC specified degrees under Section 22 of UGC Act, 1956 is available on UGC website at /pdfnews/1061840_specification-of-degrees-july-2014.pdf</p>
          <p className='ml-24 border pl-2 py-2 -mt-4! border-gray-300'>02. Validity of any degree</p>
          <p className='ml-24 border pl-2 py-2 -mt-4! border-gray-300'>03. Equivalence of degrees</p>
          <p className='ml-24 border pl-2 py-2 -mt-4! border-gray-300'>04. Equivalence of PGDM to Master degree</p>
          <p className='ml-24 border pl-2 py-2 -mt-4! border-gray-300'>05. Recognition of diplomas and certificates</p>
          <p className='ml-24 border pl-2 py-2 -mt-4! border-gray-300'>06. To start pre-university courses</p>
          <p className='ml-24 border pl-2 py-2 -mt-4! border-gray-300'>07. Recognition of two years bachelor's degree programme</p>
          <button className='ml-24! flex border px-3 mt-12! mb-18! py-1 rounded text-white bg-blue-950'>Read more<IoIosArrowDroprightCircle className='mt-1.5 ml-1' /></button>
        </div>
    </div>
  )
}

export default Faqs