import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Logo() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                
                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/</button>
                <h2 className='absolute top-14 left-18 text-white'>Logo</h2>
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>Logo</h2>
                    <div className='flex'>
                        <img className='pl-14 h-full' src="https://www.ugc.gov.in/Content/images/MainPage/ugc.jpg" alt="" />
                        <p className='pl-4'>It was something that Prime Minister, Shri Atal Bihari Vajpayee, said during his speech on the occasion of the initiation of the University Grants Commission (UGC) Golden Jubilee Year on 28 December, 2002 that sparked off the idea of revisiting the old UGC logo. In his speech, Shri Vajpayee spoke of the need to take a fresh look at the UGC Act, 1956 in the light of the new challenges for the education sector emerging in the twenty-first century. He also suggested that the Commission could consider changing its name to the `University Education Development Commission”. This name truly captures the changed role of the UGC in recent years. <br /><br />
                            Traditionally, UGC was entrusted with the task of co-ordination, formulation and maintenance of the standards of university education. To this end, it engaged itself in, among other things, framing regulations on minimum standards of education,determining standards of teaching, examination and research in universities,</p></div><p className='p-14 -mt-18!'> monitoring developments in the field of collegiate and university education, disbursing grants to universities and colleges and setting up common facilities, services and programmes for a group of universities in the form of Inter-University Centres.
                    </p>
                    <p className="pl-14 -mt-12! font-bold flex"><a href="/LogoReport.pdf" target='_blank' style={{ textDecoration: "none", color: "black" }}>
                        <p className='hover:text-green-400 duration-1000 flex'> View Logo Report<FaRegFilePdf className='mt-1'/></p></a></p>
            </div>
            <div className='w-94'>
                <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
                    <div className='border h-full border-gray-400'>
                        <div className="border-t-4 border-orange-500">
                            <h5 className="pt-4 pl-4 font-semibold">ABOUT UGC</h5>
                            <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                            <div>
                                <Link to="/genesis" style={{ textDecoration: "none" }}  className='mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Genesis</Link>
                           <Link to="/mandate" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Mandate</Link>
                           <Link to="/ugcact" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>UGC ACT 1956</Link>
                           <Link to="/logo" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Logo</Link>
                           <Link to="/ugcbureaus" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Bureaus</Link>
                           <Link to="/ugcoffices" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>UGC Offices</Link>
                           <Link to="/interuniversitycentre" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Inter University Centres</Link>
                           <Link to="/nationalfacilities" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>National Facilities</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
      </div >
    )
}

export default Logo