import React from 'react'

function EgovernanceDefault() {
  return (
    <div>
        <div className='w-[1260px] h-[520px] bg-[#2e2b41]'>
                <div className="w-292 h-118 bg-gray-200 rounded-2xl ml-12 ">
                    <p className="text-[#ff6c3a] text-3xl text-center pt-10 font-bold">e-Governance <span className="text-[#364c66]"> @UGC</span></p>
                    <div className="flex">
                        <div className="h-48 w-58 rounded ml-14 mt-10 bg-white hover:*:text-orange-500! cursor-pointer
">
                            <img src="https://www.ugc.gov.in/Content/images/eGovernance/7032830_UGC_Equivalence.jpg" className="px-10 pt-4 h-24 " alt="" />
                            <p className="text-center py-4 text-xl text-[#524e61] font-bold">UGC Equivalence <br />Portal</p>
                        </div>
                        <div className=" h-54 w-58 rounded ml-8 mt-10 bg-white hover:*:text-orange-500! cursor-pointer">
                            <img src="https://www.ugc.gov.in/Content/images/eGovernance/PhD_Citation_Portal.jpg" className="px-10 pt-4 h-24 " alt="" />
                            <p className="text-center py-4 text-xl text-[#524e61] font-bold">UGC Ph.D. <br /> Excellence Citation <br /> Portal</p>
                        </div>
                        <div className=" h-44 w-58 rounded ml-8 mt-10 bg-white hover:*:text-orange-500! cursor-pointer
">
                            <img src="https://www.ugc.gov.in/Content/images/eGovernance/fhei_logo.png" className="px-10 pt-4 h-24 " alt="" />
                            <p className="text-center pt-6 text-xl text-[#524e61] font-bold">UGC FHEI</p>
                        </div>
                        <div className=" h-44 w-58 rounded ml-8 mt-10 bg-white hover:*:text-orange-500! cursor-pointer
">
                            <img src="https://www.ugc.gov.in/Content/images/eGovernance/mmmc.png" className="px-10 pt-4 h-24 " alt="" />
                            <p className="text-center pt-6 text-xl text-[#524e61] font-bold">Malviya Mission</p>
                        </div>
                    </div>
                    <span className="block text-center mt-4">
                    <button className="bg-[#3f495a] hover:bg-gray-300 text-white hover:text-[#2e2b42]! px-8 py-2 rounded-full!">
                        View All
                    </button></span>
                </div>

            </div>
    </div>
  )
}

export default EgovernanceDefault