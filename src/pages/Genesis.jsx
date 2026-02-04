import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Genesis() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Genesis</button>
        <h2 className='absolute top-14 left-18 text-white'>Genesis</h2>
        <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex'>
        <div>
          <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>Genesis</h2>
          <p className='pl-14'>From ancient Bharat to modern India, higher education has always occupied a place of prominence in Indian history. In ancient times, Nalanda, Taxila and Vikramsila universities were renowned seats of higher learning, attracting students not only from all over the country but from far off countries like Korea, China, Burma (now Myanmar), Ceylon (now Sri Lanka), Tibet and Nepal. Today, India manages one of the largest higher education systems in the world*.</p>
          <img src="https://www.ugc.gov.in/Content/images/MainPage/genimg001.jpg" alt="" className='pl-80' />
          <h6 className='pl-30 pt-2 text-bold text-xl!'>The Prime Minister, Pandit Jawaharlal Nehru, addressed the inaugural meet on 28th</h6>
          <h6 className='pl-30 -mt-2! text-bold text-xl! text-center'>December,1953. Photo: PIB</h6>
          <p className='pl-14 mb-2 flex'>The present system of higher education dates back to Mountstuart Elphinstone`s minutes of 1823, which stressed on the need for establishing schools for teaching English and the European sciences. Later, Lord Macaulay, in his minutes of 1835, advocated "efforts to make natives of the country thoroughly good English scholars". Sir Charles Wood`s Dispatch of 1854, famously known as the ` Magna Carta o f English Education in India`, recommended creating a properly articulated scheme of education from the primary school to the university. It sought to encourage indigenous education and planned the formulation of a coherent policy of education. Subsequently, the universities of Calcutta, Bombay (now Mumbai) and Madras were set up in 1857, followed by the university of Allahabad in 1887.<br /><br />

            The Inter-University Board (later known as the Association of Indian Universities) was established in 1925 to promote university activities, by sharing information and cooperation in the field of education, culture, sports and allied areas.<br /><br />

            The first attempt to formulate a national system of education in India came In 1944, with the Report of the Central Advisory Board of Education on Post War Educational Development in India, also known as the Sargeant Report. It recommended the formation of a University Grants Committee, which was formed in 1945 to oversee the work of the three Central Universities of Aligarh, Banarasand Delhi. In 1947, the Committee was entrusted with the responsibility of dealing with all the then existing Universities.<br /><br />

            Soon after Independence, the University Education Commission was set up in 1948 under the Chairmanship of Dr. S Radhakrishnan "to report on Indian university education and suggest improvements and extensions that might be desirable to suit the present and future needs and aspirations of the country". It recommended that the University Grants Committee be reconstituted on the general model of the University Grants Commission of the United Kingdom with a full-time Chairman and other members to be appointed from amongst educationists of repute.<br /><br />

            In 1952, the Union Government decided that all cases pertaining to the allocation of grants-in-aid from public funds to the Central Universities and other Universities and Institutions of higher learning might be referred to the University Grants Commission. Consequently, the University Grants Commission (UGC) was formally inaugurated by late Shri Maulana Abul Kalam Azad, the then Minister of Education, Natural Resources and Scientific Research on 28 December 1953.<br /><br />

            The UGC, however, was formally established only in November 1956 as a statutory body of the Government of India through an Act of Parliament for the coordination, determination, and maintenance of standards of university education in India. The offices of the UGC are located in three locations in Delhi: Bahadur Shah Zafar Marg in New Delhi, 35, Feroze Shah Road, and the South Campus of the University of Delhi.<br /><br /></p>
        </div>
        <div className='w-94'>
          <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
            <div className='border h-full border-gray-400'>
              <div className="border-t-4 border-orange-500">
                <h5 className="pt-4 pl-4 font-semibold">ABOUT UGC</h5>
                <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <Link to="/genesis" style={{ textDecoration: "none" }} className='mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Genesis</Link>
                  <Link to="/mandate" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Mandate</Link>
                  <Link to="/ugcact" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />UGC ACT 1956</Link>
                  <Link to="/logo" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Logo</Link>
                  <Link to="/ugcbureaus" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Bureaus</Link>
                  <Link to="/ugcoffices" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />UGC Offices</Link>
                  <Link to="/interuniversitycentre" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Inter University Centres</Link>
                  <Link to="/nationalfacilities" style={{ textDecoration: "none" }} className=' ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />National Facilities</Link>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Genesis