import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

function Readmore() {
        return (
                <div>
                    <div className='relative'>
                        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                        
                        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/</button>
                        <h1 className='absolute top-14 left-18 text-white'>About UGC</h1>
                        <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
                    </div>
                    <div className='flex'>
                        <div className="flex gap-6">
        
                            {/* Text Section */}
                            <div className="w-4/4">
                                <h2 className="pl-14 pt-12 text-orange-500!">
                                   About UGC
                                </h2>
        
                                <p className="pl-14 pt-2 pb-4">
                                    The University Grants Commission is a statutory organization under the Ministry of Education, Government of India, established by an Act of Parliament in 1956 for the promotion and co-ordination of University education and for the determination and maintenance of standards of teaching, examination and research in Universities, and for the purpose of performing its functions under this Act. In addition to providing grants to eligible universities and colleges, the Commission also advises the Central and State Governments on the measures which are necessary for the development of Higher Education. <br /><br />

The offices of the UGC are located in three locations in Delhi: Bahadur Shah Zafar Marg in New Delhi, 35, Feroze Shah Road, and the South Campus of the University of Delhi.
                                </p>
                            </div>
                        </div>
        
                        <div className='w-94'>
                            <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
                                
                            </div>
                        </div>
                        
        
                    </div>
                    <div>
                    <span className='block ml-196 mb-10 -mt-10!'>
      <a href="/" to="/readmore" style={{textDecoration:"none"}} className="bg-[#ff6c3a] hover:bg-gray-100 text-white hover:text-[#2e2b42]! duration-500 px-8 py-2 rounded-full!">
        Back
      </a></span>
                        </div>
                </div>
            )
}

export default Readmore