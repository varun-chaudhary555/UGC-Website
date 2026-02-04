import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Marqueebody() {
    const boxStyle = {
        overflow: "hidden",
        height: "200px",
        width: "100%",
        position: "relative",
        marginTop: "8px",
    };

    const textStyle = {
        display: "inline-block",
        animation: "scrollUp 80s linear infinite",
    };
    return (
        <div>
            <div className="bg-gray-100 h-100 w-full py-16 -mt-8 flex justify-start pl-16">
                {/* Outer wrapper to hold white + orange layers */}
                <div className="relative">
                    {/* Orange layer (behind) */}
                    <div className="absolute top-1.5 left-1.5 h-70 w-88 bg-orange-500 rounded-2xl"></div>

                    {/* White box (above) */}
                    <div className="relative bg-white h-70 w-88 rounded-2xl z-10 border border-gray-100">
                        <div className='pt-3'>
                            <p className='text-[#3e4c66] font-bold text-xl ml-6'>Anti-ragging / e-Samadhaan</p>
                        </div>
                        <div className='h-1.5 bg-orange-500 mx-4 -mt-3'></div>
                        <div style={{ display: "contents" }}>
                            <img src="photos/anti_raging.png" className='h-16 ml-10 mt-2' alt=""></img>
                        </div>
                        <div className='h-px bg-gray-200 mt-2 mx-4'></div>
                        <div>
                            <a href="https://samadhaan.ugc.ac.in/Home/Index" target='_blank' style={{ display: "contents" }}><img src="photos/samadhan.png" className='h-32 ml-6 mt-2' alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* Orange layer (behind) */}
                    <div className="absolute top-1.5 left-1.5 h-70 w-88 ml-8 bg-orange-500 rounded-2xl"></div>

                    {/* White box (above) */}
                    <div className="relative bg-white h-70 w-88 rounded-2xl ml-8 z-10 border border-gray-100">
                        <div className='pt-3'>
                            <p className='text-[#3e4c66] font-bold text-xl ml-6'>Helpline Number @UGC</p>
                        </div>
                        <div className='h-1.5 bg-orange-500 mx-4 -mt-3'></div>
                        <div style={boxStyle}>
                            <div style={textStyle}>
                                <p className='text-[#524e61] font-bold ml-4 mr-6'>
                                    UGC Office Helpline: 011-23604446, 011-23604200
                                    <br /><br />

                                    Covid-19 Helpline: 1800-111-657
                                    <br /> Email: covid19help.ugc@gov.in
                                    <br /><br />

                                    Scholarship/Fellowship Helpline: 011-23604505
                                    <br /> Email: netjrf-ugc@gov.in
                                    <br /><br />

                                    National Scholarship Portal Helpline: 0120-6619540
                                    <br /> Email: helpdesk@nsp.gov.in
                                    <br /><br />

                                    UGC e-Samadhan Portal: 1800-111-656 (General Inquiry), +91 79-2326-8279 (For Technical Queries)
                                    <br /><br />

                                    Anti-ragging Helpline: 1800-180-5522
                                    <br /> Email: helpline@antiragging.in
                                    <br /><br />


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* Orange layer (behind) */}
                    <div className="absolute top-1.5 left-1.5 h-70 w-88 ml-8 bg-orange-500 rounded-2xl"></div>

                    {/* White box (above) */}
                    <div className="relative bg-white h-70 w-88 rounded-2xl ml-8 z-10 border border-gray-100">
                        <div className='pt-3'>
                            <p className='text-[#3e4c66] font-bold text-xl ml-6'>RTIs</p>
                        </div>
                        <div className='h-1.5 bg-orange-500 mx-4 -mt-3'></div>
                        <div style={boxStyle}>
                            <div style={textStyle}>
                                <p className='text-[#524e61] font-normal ml-4 mr-6'>
                                    <FaCheckCircle className='inline-flex text-orange-500 mr-1 mb-1' /> Right to Information Act
                                    <br /><br />

                                    <FaCheckCircle className='inline-flex text-orange-500 mr-1 mb-1' /> Consolidated Quarterly Return from CPIOs of University Grants Commission, New Delhi
                                    <br /><br />

                                    <FaCheckCircle className='inline-flex text-orange-500 mr-1 mb-1' /> Information to be published in pursuance of section 4(1)(b) of Right to Information Act, 2005 (BEING UPDATED)
                                    <br /><br />

                                    <FaCheckCircle className='inline-flex text-orange-500 mr-1 mb-1' /> Central Public Information Officer & Appellate Authority as on 22.11.2022
                                    <br /><br />

                                </p>

                            </div>
                        </div>
                        <Link to="rtis" target='_blank'>   <div className='-mt-1 text-center text-sm font-semibold'> <span > <button className='hover:text-green-400 duration-500'>View more</button></span> </div></Link>
                    </div>
                </div>
            </div>
            {/* Inline keyframes animation */}
            <style>
                {`
          @keyframes scrollUp {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-200%); }
          }
        `}
            </style>
        </div>
    )
}

export default Marqueebody