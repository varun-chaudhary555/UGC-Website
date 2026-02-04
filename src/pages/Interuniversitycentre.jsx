import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Interuniversitycentre() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                
                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Inter University Centres</button>
                <h2 className='absolute top-14 left-18 text-white'>Inter University Centres</h2>
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>Inter University Centres</h2>
                    <div className='flex'>
                        <div className='border h-70 w-52 ml-10'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/iuac.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>The Inter University Accelerator Centre Post Box No. 10502 Aruna Asaf Ali Marg,New Delhi-110 067.</a>
                        </div>
                        <div className='border h-70 w-52 ml-10'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/iucaa.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>Inter University Centre
                                For Astronomy and Astrophysics(IUCAA),
                                Post Bag 4, Ganeshkhind,Pune - 411007.</a>
                        </div>
                        <div className='border h-70 w-52 ml-10'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/ugc_dae.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>UGC-DAE Consortium for ScientificResearch , Indore
                                University Campus, Khandawa Road,
                                Indore - 452017 (M P).</a>
                        </div>
                        <div className='border h-70 w-52 ml-10'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/cec.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>Consortium for Educational Communication (CEC)
                                Aruna Asaf Ali Marg,
                                New Delhi - 110067.</a>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='border h-70 w-52 ml-10 mt-6 mb-14'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/inf.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>Information and Library Network Centre (INFLIBNET)
                                Infocity, Gandhinagar,
                                Gujarat - 382007

                            </a>
                        </div>
                        <div className='border h-70 w-52 ml-10  mt-6 mb-14'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/naac.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>National Assessment and Accreditation Council (NAAC)
                                P.O. Box. No. 1075, Nagarbhavi,
                                Bengaluru - 560072</a>
                        </div>
                        <div className='border h-70 w-52 ml-10 mt-6 mb-14'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/IUCTE.jpg" alt="" />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>Inter University Centre for Teacher Education
                                IUCTE, Banaras Hindu University,Varanasi</a>
                        </div>
                        <div className='border h-70 w-52 ml-10 mt-6 mb-14'>
                            <img src="https://www.ugc.gov.in/Content/images/InterUniversityCentres/IUCYS.png" alt="" className='h-30 w-48' />
                            <a href="" style={{ textDecoration: "none" }} className='text-black text-sm font-semibold px-2'>Inter University Centre
                                for Yogic Sciences (IUC-YS)
                                Camp Office at Inter-University Accelerator Centre, Aruna Asaf Ali Marg, New Delhi-110067.</a>
                        </div>
                    </div>
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
        </div>
    )
}

export default Interuniversitycentre