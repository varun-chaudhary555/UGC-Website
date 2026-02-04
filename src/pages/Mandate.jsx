import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Mandate() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/</button>
        <h2 className='absolute top-14 left-18 text-white'>Mandate</h2>
        <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex'>
        <div>
          <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>Mandate</h2>
          <p className='pl-14'>The UGC has the unique distinction of being the only grant-giving agency in the country which has been vested with two responsibilities: that of providing funds and that of coordination, determination and maintenance of standards in institutions of higher education.</p>
          <h6 className='pl-14 pt-2 pb-4'>The UGC`s mandate includes:</h6>
          <p className='pl-14 mb-2 flex'><FaCheckCircle className='mt-1 mr-1 text-orange-500' />Promoting and coordinating university education.</p>
          <p className='pl-14 mb-2 flex'><FaCheckCircle className='mt-1 mr-1 text-orange-500' />Determining and maintaining standards of teaching, examination and research in universities.</p>
          <p className='pl-14 mb-2 flex'><FaCheckCircle className='mt-1 mr-1 text-orange-500' />Framing regulations on minimum standards of education.</p>
          <p className='pl-14 mb-2 flex'><FaCheckCircle className='mt-1 mr-1 text-orange-500' />Monitoring developments in the field of collegiate and university education; disbursing grants to the universities and colleges.</p>
          <p className='pl-14 mb-2 flex'><FaCheckCircle className='mt-1 mr-1 text-orange-500' />Serving as a vital link between the Union and state governments and institutions of higher learning.</p>
          <p className='pl-14 pb-12 flex '><FaCheckCircle className='mt-1 mr-1 text-orange-500' />Advising the Central and State governments on the measures necessary for improvement of university education.</p>
          <p></p>
        </div>
        <div className='w-94'>
          <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
            <div className='border h-full border-gray-400'>
              <div className="border-t-4 border-orange-500">
                <h5 className="pt-4 pl-4 font-semibold">ABOUT UGC</h5>
                <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <Link to="/genesis" style={{ textDecoration: "none" }}  className='mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Genesis</Link>
                  <Link to="/mandate" style={{ textDecoration: "none" }} className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Mandate</Link>
                  <Link to="/ugcact" style={{ textDecoration: "none" }}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />UGC ACT 1956</Link>
                  <Link to="/logo" style={{ textDecoration: "none" }}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Logo</Link>
                  <Link to="/ugcbureaus" style={{ textDecoration: "none" }}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Bureaus</Link>
                  <Link to="/ugcoffices" style={{ textDecoration: "none" }}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />UGC Offices</Link>
                  <Link to="/interuniversitycentre" style={{ textDecoration: "none" }}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Inter University Centres</Link>
                  <Link to="/nationalfacilities" style={{ textDecoration: "none" }}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />National Facilities</Link>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mandate